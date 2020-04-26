import React from 'react';
import MovieShowCard from '../../../components/admin/Movies/Show';
import PeopleService from '../../../services/api/people';
import MovieService from '../../../services/api/movies';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class ShowMovie extends React.Component {

  state = {
    movie: {},
    casting: {},
    directors: {}
  }

  componentDidMount() {
    this.movieID = this.props.match.params.id
    this.service_movies = new MovieService(this.props.api)
    this.service_people = new PeopleService(this.props.api)
    this.getMovie(this.movieID)
  }

  getMovie = async (id) => {
    const { tokens } = this.props;
    const res = await this.service_movies.getOne({tokens, id})
    const data = res.data.data;
    const movieData = data.attributes

    const movie = {
      id: data.id,
      type: data.type,
      ...movieData
    }

    this.setState({
      movie: movie,
      casting: {
        ...movieData.casting
      },
      directors: {
        ...movieData.directors
      }
    })
  }

  deleteMovie = async (id) => {
    const {tokens} = this.props;
    const successCallback = () => {
      swal('Movie deleted', '', 'success')
    }

    const errorCallback = (err) => {
      swal({
        title: 'There was an error',
        text: err.toString(),
        icon: 'error'
      })
    }
    this.service_movies.delete({id, tokens, successCallback, errorCallback})
  }

  handleDelete = (e) => {
    e.preventDefault();
    swal({
      title: 'Are you sure to delete?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deleteMovie(this.movieID)
      } else {
        swal(`Movie deleted`);
      }
    });
  }

  render() {
    return <MovieShowCard
      movie={this.state.movie}
      casting={this.state.casting}
      directors={this.state.directors}
      handleDelete={this.handleDelete}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens } = state.session;
  return { tokens };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);
