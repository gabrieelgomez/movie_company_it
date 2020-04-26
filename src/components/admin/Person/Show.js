import React from 'react';
import { Descriptions, Icon, List } from 'antd';
import { StyledCard } from '../../styled';
import { Link } from 'react-router-dom';

const PersonShowCard = (props) => {
  const {
    id,
    first_name,
    last_name,
    aliases,
    genre,
    as_actor = [],
    as_director = [],
    as_producer = []
  } = props.person;

  return (
    <div className='admin-container'>
      <StyledCard>
        <div className='card-actions'>
          <Link to={`/admin/person/${id}/update`}>Edit<Icon type='edit'/></Link>
          <span onClick={props.handleDelete}>Delete<Icon type='delete'/></span>
        </div>
        <Descriptions title='Person details' layout='vertical'>
          <Descriptions.Item label='First Name'>{first_name}</Descriptions.Item>
          <Descriptions.Item label='Last Name'>{last_name}</Descriptions.Item>
          <Descriptions.Item label='Aliases'>{aliases}</Descriptions.Item>
          <Descriptions.Item label='Genre'>{genre}</Descriptions.Item>
        </Descriptions>

        <br></br>
        <span>Directors:</span>
        { as_director.length !== 0 &&
          <List bordered>
            { as_director.map((movie, i) => {
              return (
                <List.Item key={i}>
                  <List.Item.Meta
                    avatar={<img style={{height: 30}} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt='logo' />}
                    title={<a href='https://ant.design'>ID: {movie.id}</a>}
                    description={movie.title}
                  />
                </List.Item>
              )
            })}
          </List>
        }

        <br></br>
        <span>Producers:</span>
        { as_producer.length !== 0 &&
          <List bordered>
            { as_producer.map((movie, i) => {
              return (
                <List.Item key={i}>
                  <List.Item.Meta
                    avatar={<img style={{height: 30}} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt='logo' />}
                    title={<a href='https://ant.design'>ID: {movie.id}</a>}
                    description={movie.title}
                  />
                </List.Item>
              )
            })}
          </List>
        }

        <br></br>
        <span>Actors / Actresses:</span>
        { as_actor.length !== 0 &&
          <List bordered>
            {
              as_actor.map((movie, i) => {
                return (
                  <List.Item key={i}>
                    <List.Item.Meta
                      avatar={<img style={{height: 30}} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt='logo' />}
                      title={<a href='https://ant.design'>ID: {movie.id}</a>}
                      description={movie.title}
                    />
                  </List.Item>
                )
              })
            }
          </List>
        }


      </StyledCard>
    </div>
  )
}

export default PersonShowCard;
