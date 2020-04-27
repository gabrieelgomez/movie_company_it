import React from 'react';
import { StyledCard } from '../../styled';
import PersonForm from './Form';

class UpdatePersonForm extends React.Component {

  render() {
    const {currentUser} = this.props;
    return (
      <div className='admin-container'>
        <h1>Update Movie</h1>
        <StyledCard>
          <PersonForm
            data={this.props.personData}
            currentUser={currentUser}
            handleSubmit={this.props.handleUpdatePerson}
            handleChange={this.props.handleChange}
            handleSelect={this.props.handleSelect}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdatePersonForm;
