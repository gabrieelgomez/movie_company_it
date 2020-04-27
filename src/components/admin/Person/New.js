import React from 'react';
import { StyledCard } from '../../styled';
import PersonForm from './Form';

class NewPersonForm extends React.Component {
  state = {
    person: {
      first_name: '',
      last_name: '',
      aliases: '',
      genre: ''
    }
  }

  handleCreatePerson = (e) => {
    e.preventDefault()
    const { person } = this.state;
    this.props.createPerson(person)
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        person: {
          ...prevState.person,
          genre: value
        }
      }
    });
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

  render() {
    const {
      person
    } = this.state;

    return (
      <div className='admin-container'>
        <h1>Add new movie</h1>
        <StyledCard>
          <PersonForm
            handleSubmit={this.handleCreatePerson}
            handleChange={this.handleChange}
            handleSelect={this.handleSelectChange}
            data={person}
          >
          </PersonForm>
        </StyledCard>
      </div>
    )
  }
}

export default NewPersonForm;
