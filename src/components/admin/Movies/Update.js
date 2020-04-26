import React from 'react';
import { StyledCard } from '../../styled';
import MovieCategoryForm from './Form';

class UpdateMovieForm extends React.Component {

  render() {
    const {moviePeople, currentUser} = this.props;
    return (
      <div className='admin-container'>
        <h1>Update Movie</h1>
        <StyledCard>
          <MovieCategoryForm
            data={this.props.movieData}
            moviePeople={moviePeople}
            currentUser={currentUser}
            handleSubmit={this.props.handleUpdateMovie}
            handleChange={this.props.handleChange}
            datePickerChange={this.props.datePickerChange}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdateMovieForm;
