import logo from '../logo.svg';
import '../App.css';
import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Typography, Space } from 'antd';

function Home() {
  const { Title, Text } = Typography;
  const user = useSelector(state => state.global.user);

  return (
    <Row className="Home">
      <Col span={10}>
        <Row>
          <Title style={{ color: '#1C2368', textAlign: 'left' }}>
            Welcome {user.name},
          </Title>
        </Row>
        <Row>
          <Text>Your current balance is </Text>
        </Row>
        <Row>
          <Text style={{ fontSize: 120, fontWeight: 'bold' }}>247 <Text style={{ fontSize: 88, fontWeight: 'bold' }}>kcn</Text></Text>
        </Row>
        <Row>
          <Text>Your wallet address</Text>
        </Row>
        <Row>
          <Text>xxxxxxxxxxxxxxxxxxxxxxx</Text>
        </Row>
        <Row>
          <div style={{ backgroundColor: '#1C2368', width: 329, height: 329, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 45 }}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Row>
      </Col>
      <Col span={14}>
        <Space direction={'vertical'} style={{ width: '100%' }}>
          <Row>
            <Col span={24}>
              <div style={{ backgroundColor: '#1C2368', width: '100%', height: 350, display: 'flex', padding: 20, borderRadius: 45 }}>
              <Text style={{color: 'white'}}>Exchanges</Text>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ backgroundColor: '#1C2368', width: '100%', height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 45 }}>
              </div>
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
}

export default Home;
