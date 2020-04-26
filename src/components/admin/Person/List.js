import React from 'react';
import { Table } from 'antd';
import { StyledTable } from '../../styled';
import { Link } from 'react-router-dom';
const { Column } = Table;

const AdminPersonList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title='ID' dataIndex='id' key='id' render={(text, record) => (
        <Link to={`/admin/person/${record.id}`}>{text}</Link>
      )}/>
      <Column title='First Name' dataIndex='first_name' key='first_name' render={(text, record) => (
        <Link to={`/admin/person/${record.id}`}>{text}</Link>
      )}/>
      <Column title='Last name' dataIndex='last_name' key='last_name' />
      <Column title='Aliases' dataIndex='aliases' key='aliases' />
      <Column title='Genre' dataIndex='genre' key='genre' />
    </StyledTable>
  )
}

export default AdminPersonList;
