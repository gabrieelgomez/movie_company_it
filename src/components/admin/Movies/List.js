import React from 'react';
import { Table } from 'antd';
import { StyledTable } from '../../styled';
import { Link } from 'react-router-dom';
const { Column } = Table;

const AdminMoviesList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title='ID' dataIndex='id' key='id' render={(text, record) => (
        <Link to={`/admin/movie/${record.id}`}>{text}</Link>
      )}/>
      <Column title='Movie' dataIndex='title' key='title' render={(text, record) => (
        <Link to={`/admin/movie/${record.id}`}>{text}</Link>
      )}/>
      <Column title='Release Year' dataIndex='release_year' key='release_year'/>
    </StyledTable>
  )
}

export default AdminMoviesList;
