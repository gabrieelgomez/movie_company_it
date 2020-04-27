import React from 'react';
import { Descriptions, Icon, List, Button } from 'antd';
import { StyledCard } from '../../styled';
import FormCast from './FormCast'
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

const MovieShowCard = (props) => {
  moment.locale('es')

  var {
    id,
    title,
    release_year,
    release_roman,
    casting = {
      actors: [],
      actresses: []
    },
    directors = [],
    producers = []
  } = props.movie;

  var {
    actor = [],
    director = [],
    producer = []
  } = props.roles

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
          <Descriptions.Item label='Release Roman Year'>{release_roman}</Descriptions.Item>
        </Descriptions>
        <br></br>
        <span>Directors:</span>

        <FormCast
          role={director}
          movie={props.movie}
          people={props.people}
          handleSelectCasting={props.handleSelectCasting}
          handleSubmitCast={props.handleSubmitCast}
        />

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
                  <Link to={`/admin/person/${person.id}`}>See Person</Link>
                </List.Item>
              )
            })}
          </List>
        }

        <br></br>
        <span>Producers:</span>

        <FormCast
          role={producer}
          movie={props.movie}
          people={props.people}
          handleSelectCasting={props.handleSelectCasting}
          handleSubmitCast={props.handleSubmitCast}
        />

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
                  <Link to={`/admin/person/${person.id}`}>See Person</Link>
                </List.Item>
              )
            })}
          </List>
        }

        <br></br>
        <span>Actors / Actresses:</span>
        <FormCast
          role={actor}
          movie={props.movie}
          people={props.people}
          handleSelectCasting={props.handleSelectCasting}
          handleSubmitCast={props.handleSubmitCast}
        />

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
                    <Link to={`/admin/person/${person.id}`}>See Person</Link>
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
