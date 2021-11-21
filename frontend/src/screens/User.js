import '../App.css';
import graph from '../assets/DummyGraph.png';
import transaction from '../assets/Transaction.png';
import flow from '../assets/Flow.png';
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Typography, Space, Button, Input, Modal } from 'antd';
import QRCode from "react-qr-code";

import { SET_USER } from '../actions/globalActions';
import { useDispatch } from "react-redux";
import axios from 'axios';

function User() {
  const [walletModal, setWalletModal] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const { Title, Text } = Typography;
  const user = useSelector(state => state.global.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(window.location.hash.split("/"));
  }, []);


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
            <Row>
              <Text style={{ fontFamily: 'Gotham-Book', color: '#1C2368', }}>Your current balance is </Text>
            </Row>
            <Row>
              <Text style={{ fontSize: 120, fontWeight: 'bold', fontFamily: 'Gotham-Medium', color: '#1C2368', }}>829 <Text style={{ color: '#1C2368', fontSize: 88, fontWeight: 'bold' }}>kcn</Text></Text>
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
      </Col>
      <Col span={12}>
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
          </Space>
      </Col>
    </Row>
  );
}

export default User;
