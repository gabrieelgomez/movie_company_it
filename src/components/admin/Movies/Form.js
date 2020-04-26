import React from 'react';
import moment from 'moment';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  DatePicker,
} from 'antd';

const MovieForm = (props) => {
  const {
    title,
    release_year
  } = props.data;

  const formatDueDateShow = moment.utc(release_year).format('L');

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Title</label>
            <Input
              type='text'
              name='title'
              value={title}
              placeholder='Movie Title'
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>

        <Col span={8} lg={8} md={8} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Release Year</label><br></br>
            <DatePicker
              format='DD/MM/YYYY'
              placeholder={release_year ? formatDueDateShow : ''}
              onChange={props.datePickerChange}
            />
          </Form.Item>
        </Col>

      </Row>
      { props.children }
      <Button htmlType='submit'>
        Save
      </Button>
    </Form>
  )
}

export default MovieForm;
