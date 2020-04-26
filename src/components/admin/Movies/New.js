import React from 'react';
import { StyledCard } from '../../styled';
import MovieForm from './Form';
import moment from 'moment';

class NewMovieForm extends React.Component {
  state = {
    movie: {
      title: '',
      release_year: '',
      casting: {},
      directors: {},
      producers: {}
    }
  }

  datePickerChange = (date) => {
    var datepickerDate = moment(date).format('YYYY-MM-DD');
    var proposedDate = datepickerDate + 'T00:00:00.000Z';
    this.setState(prevState => {
      return {
        movie: {
          ...prevState.movie,
          release_year: proposedDate
        }
      }
    });
  }

  handleCreateMovie = (e) => {
    e.preventDefault()
    const { movie } = this.state;
    this.props.createMovie(movie)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        movie: {
          ...prevState.movie,
          [name]: value
        }
      }
    });
  }

  render() {
    const { movie } = this.state;

    const {moviePeople} = this.props;
    return (
      <div className='admin-container'>
        <h1>Create new movie</h1>
        <StyledCard>
          <MovieForm
            handleSubmit={this.handleCreateMovie}
            handleChange={this.handleChange}
            datePickerChange={this.datePickerChange}
            data={movie}
            moviePeople={moviePeople}
          >
          </MovieForm>
        </StyledCard>
      </div>
    )
  }
}

export default NewMovieForm;
