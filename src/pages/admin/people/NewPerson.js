import React from 'react';
import NewPersonForm from '../../../components/admin/Person/New';
import PeopleService from '../../../services/api/people';
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewPerson extends React.Component {

  state = {
    person: {}
  }

  componentDidMount() {
    this.service_people = new PeopleService(this.props.api)
  }

  createPerson = (person) => {
    const {tokens} = this.props;
    const payload = {
      person: person
    }

    const successCallback = () => {
      swal('Person created', '', 'success')
      this.props.history.push(`/admin/people`)
    }

    const errorCallback = (err) => {
      swal({
        title: 'There was an error',
        text: err.toString(),
        icon: 'error'
      })
    }

    this.service_people.create({payload, tokens, successCallback, errorCallback})
  }

  render() {
    return <NewPersonForm
      createPerson={this.createPerson}
      currentUser={this.props.currentUser}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPerson);
