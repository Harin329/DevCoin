import '../App.css';
import graph from '../assets/DummyGraph.png';
import transaction from '../assets/Transaction.png';
import flow from '../assets/Flow.png';
import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Typography, Space, Button, Input, Modal } from 'antd';
import QRCode from "react-qr-code";

import { SET_USER } from '../actions/globalActions';
import { useDispatch } from "react-redux";
import axios from 'axios';

function Home() {
  const [walletModal, setWalletModal] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const { Title, Text } = Typography;
  const user = useSelector(state => state.global.user);
  const dispatch = useDispatch();

  async function logout() {
    try {
      await axios.get(`http://localhost:5000/api/logout`, { withCredentials: true })
      dispatch({ type: SET_USER, payload: { id: "", name: "", email: "" } });
    } catch (e) {
      console.log(e);
    }
  }

  /* Send POST API with request body */
  async function test() {
    try {
      var config = {
        method: 'post',
        url: 'https://kovan.infura.io/v3/879bb70f3dc24051bc74e5fc5478379c',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: {
          "jsonrpc":"2.0",
          "method":"etchcall",
          "params": [{"to": "0xaf36436A41D254D64c26B90EBc112A0c966f2539", "from": "0xFd9472492EEd9e62C6eE30dcc595b7Af7bE0FF2d", "data": ""}, "latest"],
          "id":1
        },
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
    } catch (e) {
      console.log(e);
    }
  }

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setWalletModal(false);
      setConfirmLoading(false);
      dispatch({ type: SET_USER, payload: { id: address, name: user.name, email: user.email } });
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setWalletModal(false);
  };

  const onChange = e => {
    setAddress(e.target.value);
  };

  return (
    <Row className="Home">
      <Modal
        title="Link Wallet to GitHub"
        visible={walletModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input placeholder="Ethereum Wallet Address" onChange={onChange} />
      </Modal>
      <Col span={10}>
        <Row>
          <Title style={{ color: '#1C2368', textAlign: 'left', fontFamily: 'Gotham-Medium' }}>
            {user.id === "x0" ? `${user.name}, Welcome to the Ecosystem` : `Welcome ${user.name}`}
          </Title>
        </Row>
        {user.id !== "x0" &&
          <div>
            <Row>
              <Text style={{ fontFamily: 'Gotham-Book', color: '#1C2368', }}>Your current balance is </Text>
            </Row>
            <Row>
              <Text style={{ fontSize: 120, fontWeight: 'bold', fontFamily: 'Gotham-Medium', color: '#1C2368', }}>{balance} <Text style={{ color: '#1C2368', fontSize: 88, fontWeight: 'bold' }}>kcn</Text></Text>
            </Row>
            <Row>
              <Text style={{ fontFamily: 'Gotham-Book', color: '#1C2368', }}>Your wallet address</Text>
            </Row>
            <Row>
              <Text style={{ marginBottom: 30, fontSize: 18, fontFamily: 'Gotham-Book', color: '#1C2368', }}>{user.id}</Text>
            </Row>
            <Row>
              <div style={{ border: '10px solid #1C2368', width: 329, height: 329, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 45 }}>
                <QRCode value={user.id} />
              </div>
            </Row>
          </div>}
        {user.id === "x0" && <div>
          <Row>
            <Button
              size="medium"
              shape="round"
              block={true}
              onClick={() => setWalletModal(true)}
              style={{ width: '60%', height: '100%', fontSize: 24, fontWeight: 'bold', fontFamily: 'Gotham-Medium', backgroundColor: 'white', paddingTop: 10 }}>
              Link Wallet Address to Github
            </Button>
          </Row>
          <Row>
            <Button size="small"
              shape="round"
              style={{ backgroundColor: '#1C2368', color: 'white', width: '30%', height: '100%', fontSize: 24, fontWeight: 'bold', marginTop: 30, paddingBottom: 5, fontFamily: 'Gotham-Medium', paddingTop: 10 }}
              block={true} onClick={() => logout()}>
              Logout
            </Button>
          </Row>
          {/* <Row>
            <Button size="small"
              shape="round"
              style={{ backgroundColor: '#1C2368', color: 'white', width: '30%', height: '100%', fontSize: 24, fontWeight: 'bold', marginTop: 30, paddingBottom: 5, fontFamily: 'Gotham-Medium', paddingTop: 10 }}
              block={true} onClick={() => test()}>
              Test
            </Button>
          </Row> */}
        </div>}
      </Col>
      <Col span={12}>
        {user.id !== "x0" &&
          <Space direction={'vertical'} style={{ width: '100%' }}>
            <Row>
              <Col span={24}>
                <div style={{ backgroundColor: '#1C2368', width: '100%', height: 329, display: 'flex', borderRadius: 45 }}>
                  <img src={transaction} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="graph" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ backgroundColor: '#1C2368', width: '100%', height: 329, display: 'flex', borderRadius: 45, paddingTop: 10 }}>
                  <img src={graph} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="graph" />
                </div>
              </Col>
            </Row>
            <Row justify={'end'}>
              <Button size="small"
                shape="round"
                style={{ backgroundColor: '#1C2368', color: 'white', width: '30%', height: '100%', fontSize: 24, fontWeight: 'bold', paddingBottom: 5, fontFamily: 'Gotham-Medium', paddingTop: 10 }}
                block={true} onClick={() => logout()}>
                Logout
              </Button>
            </Row>
          </Space>}
        {user.id === "x0" &&
          <Space direction={'vertical'} style={{ width: '100%' }}>
            <Row>
              <img src={flow} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="flow" />
            </Row>
          </Space>}
      </Col>
    </Row>
  );
}

export default Home;
