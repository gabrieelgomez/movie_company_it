import React from 'react';
import AdminMovies from '../../../components/admin/Movies';
import MovieService from '../../../services/api/movies';
import PeopleService from '../../../services/api/people';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class AllMovies extends React.Component {

  state = {
    movies: [],
    movie_people: []
  }

  componentDidMount() {
    this.service_people = new PeopleService(this.props.api)
    this.service_movies = new MovieService(this.props.api)
    this.getMoviesData()
    this.getMoviePeopleData()
  }

  getMoviePeopleData = async () => {
    const {tokens} = this.props;
    const data = await this.service_people.getPeople({tokens})
    this.setState({
      movie_people: data
    })
  }

  getMoviesData = async () => {
    const {tokens} = this.props;
    const data = await this.service_movies.getMovies({tokens})
    this.setState({
      movies: data
    })
  }

  render() {
    return <AdminMovies
      movies={this.state.movies}
      movieCategoriesData={this.state.movie_people}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
