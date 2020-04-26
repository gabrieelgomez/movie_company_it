import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,.2);
`
class AdminSider extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const currentPath = this.props.path.pathname;
    return (
      <StyledSider
        breakpoint='lg'
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className='logo'>
          <Link to='/'>
            <img src={'https://itcrowdarg.com/wp/wp-content/uploads/2017/10/logoit-crowd.png'} alt='logo' />
          </Link>
        </div>
        <Menu
          mode='inline'
          activeKey={currentPath}
          selectedKeys={currentPath}
        >
          <Menu.Item key='/admin/dashboard'>
            <Icon type='appstore' />
            <NavLink to='/admin'>Dashboard</NavLink>
          </Menu.Item>

          <Menu.Item key='/admin/people'>
            <Icon type='user' />
            <NavLink to='/admin/people'>People</NavLink>
          </Menu.Item>

          <Menu.Item key='/admin/movies'>
            <Icon type='user' />
            <NavLink to='/admin/movies'>Movies</NavLink>
          </Menu.Item>

        </Menu>
      </StyledSider>
    )
  }
};

export default AdminSider;
