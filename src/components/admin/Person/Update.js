import React from 'react';
import { StyledCard } from '../../styled';
import PersonCategoryForm from './Form';

class UpdatePersonForm extends React.Component {

  render() {
    const {currentUser} = this.props;
    return (
      <div className='admin-container'>
        <h1>Update Movie</h1>
        <StyledCard>
          <PersonCategoryForm
            data={this.props.personData}
            currentUser={currentUser}
            handleSubmit={this.props.handleUpdatePerson}
            handleChange={this.props.handleChange}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdatePersonForm;
