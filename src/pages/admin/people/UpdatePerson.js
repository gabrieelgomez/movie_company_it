import React from 'react';
import UpdatePersonForm from '../../../components/admin/Person/Update';
import PeopleService from '../../../services/api/people';
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdatePerson extends React.Component {

  state = {
    person: {}
  }

  componentDidMount() {
    const personID = this.props.match.params.id;
    this.service_people = new PeopleService(this.props.api)
    this.getPerson(personID)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        person: {
          ...prevState.person,
          [name]: value
        }
      }
    });
  }

  handleUpdatePerson = (e) => {
    e.preventDefault()
    const { person } = this.state;
    this.updatePerson(person)
  }

  getPerson = async (id) => {
    const { tokens } = this.props;
    const res = await this.service_people.getOne({tokens, id})
    const data = res.data.data;

    const person = {
      id: data.id,
      type: data.type,
      ...data.attributes
    }

    this.setState({
      person: person
    })
  }

  updatePerson = async (person) => {
    const {tokens} = this.props;
    const payload = {
      person: person
    }

    const successCallback = () => {
      swal('Person updated', '', 'success')
    }

    const errorCallback = (err) => {
      swal({
        title: 'There was an error',
        text: err.toString(),
        icon: 'error'
      })
    }

    this.service_people.update({payload, tokens, successCallback, errorCallback})
  }

  render() {
    return <UpdatePersonForm
      personData={this.state.person}
      currentUser={this.props.currentUser}
      handleUpdatePerson={this.handleUpdatePerson}
      handleChange={this.handleChange}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens } = state.session;
  const { currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePerson);
