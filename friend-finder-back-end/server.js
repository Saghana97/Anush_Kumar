
const express = require('express');
const { Client } = require('pg');
const cors = require('cors')
const connectionString = 'postgres://anush:anush@localhost:5432/test';
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.use(cors());
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.set('port', process.env.PORT || 4000);
const models = require('./models')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('friendFinder', 'anush', 'anush', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

//global variables
const saltRounds = 10;
const privateKey = "friendfinder";

//init sequelize
sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});

app.get('/',async function(req,res,next){
    let result = await models.users.findAll({
        include:{
            model:models.friendRequests,
            where:{
              requestId:1
            }
        },
        raw:true
    })
    res.status(200).send(result)
})

app.use('/log-in',require('./Routes/login'));
app.use('/sign-up',require('./Routes/SignUp'))
app.use('/log-in/check-login',require('./Routes/login'))
app.use('/send-friend-request',require('./Routes/Friends'))

app.listen(4000, async function () {
    console.log('Server is running.. on Port 4000');
});
