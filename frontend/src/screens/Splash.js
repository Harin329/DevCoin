import github from '../assets/Github.png';
import '../App.css';
import React from "react";
import { Row, Col, Typography, Space, Button } from 'antd';
import { useDispatch } from "react-redux";
import { SET_USER } from '../actions/globalActions';

function Splash() {
  const { Title } = Typography;
  const dispatch = useDispatch();

  return (
    <Space className="App">
      <Title style={{ color: 'white', fontFamily: 'Gotham-Medium' }}>
        KudoCoin
      </Title>
      <Row>
        <Col span={8}><img src={github} className="App-logo" alt="logo" /></Col>
        <Col span={8}><img src={github} className="App-logo" alt="logo" /></Col>
        <Col span={8}><img src={github} className="App-logo" alt="logo" /></Col>
      </Row>
      <Row style={{width: 329, height: 70}}>
      <Button
        type="ghost"
        size="large"
        shape="round"
        block={true}
        onClick={() => {
          dispatch({ type: SET_USER, payload: { id: "123", name: "Harin", email: "" } });
        }}
        style={{height: '100%', fontSize: 24, fontWeight: 'bold', fontFamily: 'Gotham-Medium', backgroundColor: 'white', paddingTop: 10}}
        icon={<img src={github} style={{width: 40, height: 40, marginRight: 20, marginBottom: 5}}/>}>
        Login with GitHub
      </Button>
      </Row>
    </Space>
  );
}

export default Splash;
