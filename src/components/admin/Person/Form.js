import React from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select
} from 'antd';
const {Option} = Select;

const PersonForm = (props) => {
  const {
    first_name,
    last_name,
    aliases,
    genre
  } = props.data;

  const placeholderSelect = genre === '' ? 'Select Genre' : genre;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>First Name</label>
            <Input
              type='text'
              name='first_name'
              value={first_name}
              placeholder='First name'
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>

        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Last Name</label>
            <Input
              type='text'
              name='last_name'
              value={last_name}
              placeholder='Last name'
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>

        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Aliases</label>
            <Input
              type='text'
              name='aliases'
              value={aliases}
              placeholder='Aliases'
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>

        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Genres</label><br></br>
            <Select placeholder={placeholderSelect} defaultValue={genre} style={{ width: 180 }} onChange={props.handleSelect}>
              <Option key='male' value='male'>Male</Option>
              <Option key='female' value='female'>Female</Option>
            </Select>
          </Form.Item>
        </Col>

      </Row>
      <Button htmlType='submit'>
        Save
      </Button>
    </Form>
  )
}

export default PersonForm;
