import React from 'react';
import MovieShowCard from '../../../components/admin/Movies/Show';
import PeopleService from '../../../services/api/people';
import MovieService from '../../../services/api/movies';
import CastService from '../../../services/api/casts';
import RoleService from '../../../services/api/roles';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class ShowMovie extends React.Component {

  state = {
    movie: [],
    people: [],
    cast: [],
    roles: {
    }
  }

  componentDidMount() {
    this.movieID = this.props.match.params.id
    this.service_movies = new MovieService(this.props.api)
    this.service_people = new PeopleService(this.props.api)
    this.service_casts  = new CastService(this.props.api)
    this.service_roles  = new RoleService(this.props.api)
    this.getMovie(this.movieID)
    this.getPeopleData()
    this.getRoles()
  }

  handleSelectCasting = (e) => {
    const value = e;
    this.setState({
      cast: JSON.parse(value)
    })
  }

  createCasting = async (e) => {
    e.preventDefault()
    const { uid, client, access_token } = this.props.tokens;;
    const { cast } = this.state;

    await this.props.api({
      method: 'POST',
      endpoint: '/v1/casts/create',
      payload: {
        cast: cast
      },
      headers: {
        'access-token': access_token,
        client, uid
      }
    }).then((res) => {
      swal('Cast created', '', 'success')
      const data = res.data.included[0]
      const movieData = data.attributes

      const movie = {
        id: data.id,
        type: data.type,
        ...movieData
      }

      this.setState({
        movie
      })    })
    .catch((error) => {
      swal({
        title: "Error",
        text: error.toString(),
        icon: 'error'
      })
    });
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
      movie
    })
  }

  getPeopleData = async () => {
    const {tokens} = this.props;
    const data = await this.service_people.getPeople({tokens})
    this.setState({
      people: data
    })
  }

  getRoles = async () => {
    const {tokens} = this.props;
    const res = await this.service_roles.getRoles({tokens})
    this.setState({
      roles: res
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
      people={this.state.people}
      roles={this.state.roles}
      handleDelete={this.handleDelete}
      handleSelectCasting={this.handleSelectCasting}
      handleSubmitCast={this.createCasting}
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
