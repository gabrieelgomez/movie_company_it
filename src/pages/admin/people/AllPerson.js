import React from 'react';
import AdminPerson from '../../../components/admin/Person';
import PeopleService from '../../../services/api/people';
import { connect } from 'react-redux';
import { api } from '../../../services/api';

class AllPerson extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    this.service_people = new PeopleService(this.props.api)
    this.getPeopleData()
  }

  getPeopleData = async () => {
    const {tokens} = this.props;
    const data = await this.service_people.getPeople({tokens})
    this.setState({
      people: data
    })
  }

  render() {
    return <AdminPerson
      people={this.state.people}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllPerson);
