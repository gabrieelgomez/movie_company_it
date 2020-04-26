import React from 'react';
import AdminMoviesList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminMovies extends React.Component {

  render() {
    const {
      movies
    } = this.props;
    return (
      <div className='admin-container'>
        <div className='admin-actions'>
          <h3>Movies</h3>
          <LinkButton name='Add new' action='/admin/movie/new' />
        </div>
        <AdminMoviesList data={movies}/>
      </div>
    )
  }
}

export default AdminMovies;
