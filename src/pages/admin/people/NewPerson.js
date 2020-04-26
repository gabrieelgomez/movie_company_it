import React from 'react';
import NewPersonForm from '../../../components/admin/Person/New';
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewPerson extends React.Component {

  state = {
    person_categories: []
  }

  componentDidMount() {
    this.getPersonCategoriesData()
  }

  getPersonCategoriesData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/person_categories',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    if (res.data) {
      data = res.data.data.map((item) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    this.setState({
      person_categories: data
    })
  }

  createPerson = async (person) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/people/create',
      payload: {
        person: {
          user_id: this.props.currentUser.id,
          ...person
        }
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Propuesta creada exitosamente', '', 'success')
        this.props.history.push(`/admin/people`)
      },
      errorCallback: (err) => {
        swal({
          title: 'There was an error',
          text: err.toString(),
          icon: 'error'
        })
      }
    })
  }

  render() {
    return <NewPersonForm
      createPerson={this.createPerson}
      personCategoriesData={this.state.person_categories}
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
