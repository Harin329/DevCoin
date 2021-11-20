import logo from '../logo.svg';
import '../App.css';
import React from "react";
import { Row, Col, Typography, Space } from 'antd';
import { useDispatch } from "react-redux";
import { SET_USER } from '../actions/globalActions';

function Splash() {
  const { Title } = Typography;
  const dispatch = useDispatch();

  return (
    <Space className="App">
      <Title style={{ color: 'white' }}>
        KudoCoin
      </Title>
      <Row>
        <Col span={8}><img src={logo} className="App-logo" alt="logo" /></Col>
        <Col span={8}><img src={logo} className="App-logo" alt="logo" /></Col>
        <Col span={8}><img src={logo} className="App-logo" alt="logo" /></Col>
      </Row>
      <a
        onClick={() => {
          dispatch({ type: SET_USER, payload: { id: "123", name: "Harin", email: "" } });
        }}
      >
        Login with Github
      </a>
    </Space>
  );
}

export default Splash;
