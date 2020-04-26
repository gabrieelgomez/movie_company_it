import React from 'react';
import { StyledCard } from '../../styled';
import PersonForm from './Form';

class NewPersonForm extends React.Component {
  state = {
    person: {
      title: '',
      description: '',
      person_category_id: '',
    }
  }

  handleCreatePerson = (e) => {
    e.preventDefault()
    const { person } = this.state;
    this.props.createPerson(person)
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

    const {personCategoriesData} = this.props;
    return (
      <div className='admin-container'>
        <h1>Add new propuesta</h1>
        <StyledCard>
          <PersonForm
            handleSubmit={this.handleCreatePerson}
            handleChange={this.handleChange}
            data={person}
            personCategoriesData={personCategoriesData}
          >
          </PersonForm>
        </StyledCard>
      </div>
    )
  }
}

export default NewPersonForm;
