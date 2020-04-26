import React from 'react';
import AdminPersonList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminPerson extends React.Component {

  render() {
    const {
      people
    } = this.props;
    return (
      <div className='admin-container'>
        <div className='admin-actions'>
          <h3>People</h3>
          <LinkButton name='Add new' action='/admin/person/new' />
        </div>
        <AdminPersonList data={people}/>
      </div>
    )
  }
}

export default AdminPerson;
