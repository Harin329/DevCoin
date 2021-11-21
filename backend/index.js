require('dotenv').config();
const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const passport = require('passport');
const cors = require('cors');
require('./passport')
const axios = require('axios');
const isLoggedIn = require('./Middleware/auth')

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true 
};

app.use(cors(corsOptions))

app.use(cookieSession({
  name: 'github-auth-session',
  keys: ['secretkey1', 'secretkey2'],
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`Hello world`)
})

app.get('/api/user', isLoggedIn, (req,res)=>{
    console.log(req.user);
    // res.send(`Hello world ${req.user.displayName}`)
    res.send(req.user);
})

app.get('/api/logout', (req, res) => {
    console.log('Logging out')
    req.session = null;
    req.logout();
    res.redirect('http://localhost:3000/');
})

app.post('/api/address/create', async (req, res) => {

    const {github_id, network_address} = req.body;
    try {
    const data = await axios({
        method: 'post',
        url: 'http://localhost:7000/updateUser',
        data: {
          github_id,
          network_address
        }
    });
    res.send(data.data);
    } catch(e) {
        console.log(e)
    } 
});

app.get('/api/userMapping', async (req,res) => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:7000/userMapping',
    });
    res.send(data.data);
})

app.get('/api/auth/error', (req, res) => res.send('Unknown Error'))

app.get('/api/auth/github', passport.authenticate('github',{ scope: [ 'user:email' ] }));

app.get('/api/auth/github/callback', passport.authenticate('github', { failureRedirect: 'http://localhost:3000' }),
    (req, res) => {
        res.redirect('http://localhost:3000/');
    }
);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
  console.log(`Server is up and running at the port ${PORT}`)
})
