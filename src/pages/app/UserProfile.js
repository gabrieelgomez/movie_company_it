import React from 'react';
import swal from 'sweetalert';
import ProfileForm from '../../components/app/User/ProfileForm';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { StyledCard } from '../../components/styled';
import { SET_CURRENT_USER, SET_TOKENS } from '../../actions/session';
import { api } from '../../services/api';

class UserProfile extends React.Component {
  state = {
    user: {},
  }

  componentDidMount() {
    const { id, email, name, nickname } = this.props.currentUser;

    this.setState({
      user: {
        id,
        email,
        name,
        nickname
      }
    })

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.updateUser(this.state.user);
  }

  updateUser = async (user) => {
    const { uid, client, access_token } = this.props.session.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `/v1/auth?`,
      payload: {
        user
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Datos actualizados exitosamente', '', 'success')
      }
    })

    const data = res.data.data
    const headers = {
      access_token: res.headers['access-token'],
      client: res.headers.client,
      uid: res.headers.uid
    }
    this.props.setTokens(headers);
    this.props.setCurrentUser({id: data.id, ...data.attributes})
  }

  render() {
    return (
      <div className='container'>
        <Row>
          <Col span={16} offset={4}>
            <StyledCard>
              <ProfileForm
                user={this.state.user}
                updateUser={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </StyledCard>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tokens, currentUser } = state.session;
  return {
    currentUser: currentUser,
    session: { tokens }
  }
}

const mapDispatchToProps = {
  setTokens: SET_TOKENS,
  setCurrentUser: SET_CURRENT_USER,
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
