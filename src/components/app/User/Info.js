import React from 'react';
import { Avatar, List } from 'antd';
import { connect } from 'react-redux';
import { StyledCard } from '../../styled';
import LinkButton from '../../common/ui/LinkButton';

class Info extends React.Component {
  render() {
    const {currentUser} = this.props;
    const { email, nickname, avatar } = currentUser;

    return (
      <StyledCard>
        <div className='feed-profile-header'>
          <Avatar size={30} src={avatar ? avatar : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} />
          <span className='nickname'>{ nickname }</span>
        </div>
        <List>
          <List.Item><strong>Email:</strong> {email}</List.Item>
        </List>
        <LinkButton action='/my-profile' name='Ver perfil'/>
      </StyledCard>
    );
  }
}

const mapStateToProps = (state) => {
  const { tokens, currentUser } = state.session;
  return { tokens, currentUser };
}

export default connect(mapStateToProps)(Info);
