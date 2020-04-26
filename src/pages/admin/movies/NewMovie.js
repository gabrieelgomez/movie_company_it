import React from 'react';
import NewMovieForm from '../../../components/admin/Movies/New';
import MovieService from '../../../services/api/movies';
import PeopleService from '../../../services/api/people';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class NewMovie extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    this.service_people = new PeopleService(this.props.api)
    this.service_movies = new MovieService(this.props.api)
    this.getPeople()
  }

  getPeople = async () => {
    const {tokens} = this.props;
    const data = await this.service_people.getPeople({tokens})
    this.setState({
      people: data
    })
  }

  createMovie = (movie) => {
    const {tokens} = this.props;
    const payload = {
      movie: movie
    }

    const successCallback = () => {
      swal('Movie created', '', 'success')
      this.props.history.push(`/admin/movies`)
    }

    const errorCallback = (err) => {
      swal({
        title: 'There was an error',
        text: err.toString(),
        icon: 'error'
      })
    }

    this.service_movies.create({payload, tokens, successCallback, errorCallback})
  }

  render() {
    return <NewMovieForm
      createMovie={this.createMovie}
      moviePeople={this.state.people}
      currentUser={this.props.currentUser}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens, currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
