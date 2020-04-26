import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import CustomModal from '../../common/ui/Modal';
import LoginForm from '../../common/Session/LoginForm';
import LogOutButton from '../../common/Session/LogOutButton';
import { connect } from 'react-redux';
import { DROP_CURRENT_USER } from '../../../actions/session';

class Navbar extends React.Component {
  state = {
    visible: false,
  };

  showForm = (formType) => {
    let config = {
      visible: true
    }

    this.setState(config);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      currentUser
    } = this.props;

    return (
      <div className='header'>
        <nav>
          <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
          </ul>
          { currentUser ? (
              <ul>
                <li className='currentUser'>
                  <Link to={`/my-profile`}>{currentUser.email}</Link>
                </li>
                <li>
                  <Link to='/admin'>
                    <Icon type='appstore'/>
                  </Link>
                </li>
                <li>
                  <LogOutButton removeUser={this.props.dropCurrentUser}/>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <span style={{cursor : 'pointer'}} onClick={() => this.showForm('Login')}><Icon type='user'/>Entrar</span>
                </li>
              </ul>
            )
          }
        </nav>
        <CustomModal
          visible={this.state.visible}
          handleClose={this.handleCancel}
          footer={false}
        >
          <LoginForm cb={this.handleCancel} history={this.props.history} />
        </CustomModal>
      </div>
    );
  }
}

const mapDispatchToProps = { dropCurrentUser: DROP_CURRENT_USER }

export default connect(null, mapDispatchToProps)(Navbar);
