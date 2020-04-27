import React from 'react';
import {
  Form,
  Button,
  Row,
  Col,
  Select
} from 'antd';
const {Option} = Select;

const MovieFormCast = (props) => {
  return (
    <Form onSubmit={props.handleSubmitCast}>
      <Row>
        <Col span={6} lg={6} md={6} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Add a new person in this {props.role.name}'s category</label><br></br>
            <Select placeholder='Choise a person' style={{ width: 180 }} onChange={props.handleSelectCasting}>
              {
                props.people.map((item) => {
                  return <Option
                                key={item.id}
                                value={
                                  JSON.stringify({
                                    person_id: item.id,
                                    movie_id: props.movie.id,
                                    role_id: props.role.id
                                  })
                                }
                         >
                          {item.first_name}
                        </Option>
                })
              }
            </Select>
          </Form.Item>
        </Col>

        <Col span={6} lg={6} md={6} xs={24}>
          <Button htmlType='submit'>
            Add as {props.role.name}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default MovieFormCast;
