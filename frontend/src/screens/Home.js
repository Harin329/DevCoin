import logo from '../logo.svg';
import '../App.css';
import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Typography, Space } from 'antd';

function Home() {
  const { Title } = Typography;
  const user = useSelector(state => state.global.user);

  return (
    <Space className="App">
      <Title style={{ color: 'white' }}>
        Welcome {user.name},
      </Title>
      <Row>
        <Col span={8}><img src={logo} className="App-logo" alt="logo" /></Col>
        <Col span={8}><img src={logo} className="App-logo" alt="logo" /></Col>
        <Col span={8}><img src={logo} className="App-logo" alt="logo" /></Col>
      </Row>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Space>
  );
}

export default Home;
