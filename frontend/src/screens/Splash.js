import github from '../assets/Github.png';
import coin from '../assets/Coin.png';
import '../App.css';
import React, { useEffect } from "react";
import { Row, Col, Typography, Space, Button } from 'antd';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { SET_USER } from '../actions/globalActions';
function Splash() {
  const { Title } = Typography;
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserData() {
      try {
        const user_data = await axios.get(`http://localhost:5000/api/user`, {withCredentials: true})
        if (user_data.data) {
          const data = user_data.data
          console.log(data);
          dispatch({ type: SET_USER, payload: { id: "x0xb", name: data.username, email: user_data.profileUrl } });
        } else {
          console.log('User data could not be retrieved')
        }
      } catch (e) {
        console.log(e);
      }
    }
    getUserData();
  }, [])

  return (
    <Space className="App">
      <Title style={{ color: 'white', fontFamily: 'Gotham-Medium' }}>
        KudoCoin
      </Title>
      <Row>
        <Col span={8}><img src={coin} className="App-logo" alt="logo" /></Col>
      </Row>
      <Row style={{width: 329, height: 70}}>
      <Button
        type="ghost"
        size="large"
        shape="round"
        block={true}
        href={'http://localhost:5000/api/auth/github/'}
        style={{height: '70%', fontSize: 24, fontWeight: 'bold', fontFamily: 'Gotham-Medium', backgroundColor: 'white', paddingTop:30}}
        icon={<img src={github} alt="Github" style={{width: 40, height: 40, marginRight: 20, marginBottom: 5}}/>}>
        Login with GitHub
      </Button>
      </Row>
    </Space>
  );
}

export default Splash;
