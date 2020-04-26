import React from 'react';
import PersonShowCard from '../../../components/admin/Person/Show';
import PeopleService from '../../../services/api/people';
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class ShowPerson extends React.Component {

  state = {
    person: {}
  }

  componentDidMount() {
    this.personID = this.props.match.params.id
    this.service_people = new PeopleService(this.props.api)
    this.getPerson(this.personID)
  }

  getPerson = async (id) => {
    const { tokens } = this.props;
    const res = await this.service_people.getOne({tokens, id})
    const data = res.data.data;
    const personData = data.attributes

    const person = {
      id: data.id,
      type: data.type,
      ...personData
    }

    this.setState({
      person: person
    })
  }

  deletePerson = async (id) => {
    const {tokens} = this.props;
    const successCallback = () => {
      swal('Person deleted', '', 'success')
    }

    const errorCallback = (err) => {
      swal({
        title: 'There was an error',
        text: err.toString(),
        icon: 'error'
      })
    }
    this.service_people.delete({id, tokens, successCallback, errorCallback})
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
        this.deletePerson(this.personID)
      } else {
        swal(`Person Deleted`);
      }
    });
  }

  render() {
    return <PersonShowCard
      person={this.state.person}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowPerson);
