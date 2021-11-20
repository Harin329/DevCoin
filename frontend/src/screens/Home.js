import logo from '../logo.svg';
import '../App.css';
import React, { useState } from "react";
import { Row, Col, Typography, Space } from 'antd';

function Home() {
  const { Title } = Typography;
  const [user, setUser] = useState(null);

  return (
    <Space className="App">
        <Title style={{color: 'white'}}>
          Home
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
          Login with Github
        </a>
    </Space>
  );
}

export default Home;
