import React from 'react';
import { Descriptions, Icon, List } from 'antd';
import { StyledCard } from '../../styled';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

const MovieShowCard = (props) => {
  moment.locale('es')

  const {
    id,
    title,
    release_year,
    casting = {
      actors: [],
      actresses: []
    },
    directors = [],
    producers = []
  } = props.movie;

  const formatDueDateShow = moment.utc(release_year).format('L');

  return (
    <div className='admin-container'>
      <StyledCard>
        <div className='card-actions'>
          <Link to={`/admin/movie/${id}/update`}>Edit<Icon type='edit'/></Link>
          <span onClick={props.handleDelete}>Delete<Icon type='delete'/></span>
        </div>
        <Descriptions title='Movie Details' layout='vertical'>
          <Descriptions.Item label='Title'>{title}</Descriptions.Item>
          <Descriptions.Item label='Release Year'>{release_year ? formatDueDateShow : ''}</Descriptions.Item>
        </Descriptions>
        <br></br>
        <span>Directors:</span>
        { directors.length !== 0 &&
          <List bordered>
            { directors.map((person, i) => {
              return (
                <List.Item key={i}>
                  <List.Item.Meta
                    avatar={<img style={{height: 30}} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt='logo' />}
                    title={<a href='https://ant.design'>ID: {person.id}</a>}
                    description={person.first_name}
                  />
                </List.Item>
              )
            })}
          </List>
        }

        <br></br>
        <span>Producers:</span>
        { producers.length !== 0 &&
          <List bordered>
            { producers.map((person, i) => {
              return (
                <List.Item key={i}>
                  <List.Item.Meta
                    avatar={<img style={{height: 30}} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt='logo' />}
                    title={<a href='https://ant.design'>ID: {person.id}</a>}
                    description={person.first_name}
                  />
                </List.Item>
              )
            })}
          </List>
        }

        <br></br>
        <span>Actors / Actresses:</span>
        { casting.actors.length !== 0 &&
          <List bordered>
            {
              casting.actors.map((person, i) => {
                return (
                  <List.Item key={i}>
                    <List.Item.Meta
                      avatar={<img style={{height: 30}} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt='logo' />}
                      title={<a href='https://ant.design'>ID: {person.id}</a>}
                      description={person.first_name}
                    />
                  </List.Item>
                )
              })
            }
            {
              casting.actresses.map((person, i) => {
                return (
                  <List.Item key={i}>
                    <List.Item.Meta
                      avatar={<img style={{height: 30}} src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt='logo' />}
                      title={<a href='https://ant.design'>ID: {person.id}</a>}
                      description={person.first_name}
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

export default MovieShowCard;
