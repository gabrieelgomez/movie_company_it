import React from 'react';
import UserInfo from '../../components/app/User/Info';
import Banner from '../../components/app/Banner';
import { Row, Col, Affix } from 'antd';
import { connect } from 'react-redux';
import { api } from '../../services/api';

class Home extends React.Component {

  render() {
    const {currentUser} = this.props;

    return (
      <div>
        { currentUser ? (
          <div className='page'>
            <Row gutter={16}>
              <Col span={6} lg={{span: 6, offset: 1}} md={{span: 8, offset: 1}} xs={0}>
                <Affix offsetTop={15}>
                  <UserInfo />
                </Affix>
              </Col>
              <Col span={6}></Col>
            </Row>
          </div>
        ): (
          <Banner />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { tokens, currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
