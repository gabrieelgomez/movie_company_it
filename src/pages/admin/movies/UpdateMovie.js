import React from 'react';
import UpdateMovieForm from '../../../components/admin/Movies/Update';
import MovieService from '../../../services/api/movies';
import PeopleService from '../../../services/api/people';
import swal from 'sweetalert';
import moment from 'moment';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class UpdateMovie extends React.Component {
  state = {
    movie: {
      title: '',
      release_year: '',
    },
    people: []
  }

  componentDidMount() {
    const movieID = this.props.match.params.id;
    this.service_people = new PeopleService(this.props.api)
    this.service_movies = new MovieService(this.props.api)
    this.getMovie(movieID)
    this.getPeople()
  }

  getPeople = async () => {
    const {tokens} = this.props;
    const data = await this.service_people.getPeople({tokens})
    this.setState({
      people: data
    })
  }

  getMovie = async (id) => {
    const { tokens } = this.props;
    const res = await this.service_movies.getOne({tokens, id})
    const data = res.data.data;

    const movie = {
      id: data.id,
      type: data.type,
      ...data.attributes
    }

    this.setState({
      movie
    })
  }

  updateMovie = (movie) => {
    const {tokens} = this.props;
    const payload = {
      movie
    }

    const successCallback = () => {
      swal('Movie updated', '', 'success')
    }

    const errorCallback = (err) => {
      swal({
        title: 'There was an error',
        text: err.toString(),
        icon: 'error'
      })
    }

    this.service_movies.update({payload, tokens, successCallback, errorCallback})
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        movie: {
          ...prevState.movie,
          [name]: value
        }
      }
    });
  }

  datePickerChange = (date) => {
    var datepickerDate = moment(date).format('YYYY-MM-DD');
    var formatDate = datepickerDate + 'T00:00:00.000Z';
    this.setState(prevState => {
      return {
        movie: {
          ...prevState.movie,
          release_year: formatDate
        }
      }
    });
  }

  handleUpdateMovie = (e) => {
    e.preventDefault()
    const { movie } = this.state;
    this.updateMovie(movie)
  }

  render() {
    return <UpdateMovieForm
      movieData={this.state.movie}
      movieCategories={this.state.people}
      currentUser={this.props.currentUser}
      handleUpdateMovie={this.handleUpdateMovie}
      datePickerChange={this.datePickerChange}
      handleChange={this.handleChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovie);
