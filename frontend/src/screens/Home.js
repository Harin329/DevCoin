import '../App.css';
import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Typography, Space, Button } from 'antd';
import QRCode from "react-qr-code";

import { SET_USER } from '../actions/globalActions';
import { useDispatch } from "react-redux";
import axios from 'axios';

function Home() {
  const { Title, Text } = Typography;
  const user = useSelector(state => state.global.user);
  const dispatch = useDispatch();

  async function logout() {
    try {
      await axios.get(`http://localhost:5000/api/logout`, {withCredentials: true})
      dispatch({ type: SET_USER, payload: { id: "", name: "", email: "" } });
    } catch (e) {
      console.log(e);
    }
  }

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
          <Text style={{marginBottom: 30, fontSize: 18}}>{user.id}</Text>
        </Row>
        <Row>
          <div style={{ border: '10px solid #1C2368', width: 329, height: 329, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 45 }}>
          <QRCode value={user.id}/>
          </div>
        </Row>
      </Col>
      <Col span={14}>
        <Space direction={'vertical'} style={{ width: '100%' }}>
          <Row>
            <Col span={24}>
              <div style={{ backgroundColor: '#1C2368', width: '100%', height: 370, display: 'flex', padding: 20, borderRadius: 45 }}>
              <Text style={{color: 'white'}}>Exchanges</Text>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ backgroundColor: '#1C2368', width: '100%', height: 370, display: 'flex', padding: 20, borderRadius: 45 }}>
              <Text style={{color: 'white'}}>Stat Graph</Text>
              </div>
            </Col>
          </Row>
          <Row>
            <Button onClick={()=> logout()}> 
              Logout
            </Button>
          </Row>
        </Space>
      </Col>
    </Row>

  );
}

export default Home;
