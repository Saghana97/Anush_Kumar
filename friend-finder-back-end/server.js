
const express = require('express');
const cors = require('cors')

var app = express();
app.use(cors());
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.set('port', process.env.PORT || 4000);
const io = require('socket.io')();
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

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
const populate = require('./elasticSearch/populate')();
const mongoose = require('./config/Database')

//global variables
const saltRounds = 10;
const privateKey = "friendfinder";
const Thread = require('./models/MongoDB/Thread')
const Message = require('./models/MongoDB/Message')

//init sequelize
sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});
var elaseticClient = require('./config/connection');

elaseticClient.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp.status);
});

const limit = 200;
app.get('/',async function(req,res,next){
    let result = await models.users.findAll({
        raw:true,
        limit:200
    })
    // populate.populate(result)
    res.status(200).send(result)
})

app.use('/log-in',require('./Routes/login'));
app.use('/sign-up',require('./Routes/SignUp'));
app.use('/log-in/check-login',require('./Routes/login'));
app.use('/send-friend-request',require('./Routes/Friends'));
app.use('/search-friends',require('./Routes/search'));  

// io.on('connection', (client) => {
//   client.on('initial_data', async (sample,fn) => {
//     var decoded = ""
//     let sendUser;
//     const {key,member,message} = sample
//     console.log("chat head server !!\n\n\n")
//     try {
//         decoded = await jwt.verify(key.toString(), privateKey);
//         const currentUserDetails = await models.users.findAll({
//             attributes: ['id'],
//             where: {
//                 name: {
//                     [Op.eq]: decoded.userData.toString()
//                 }
//             },
//             raw:true
//         })
//         // console.log([currentUserDetails[0].id.toString(),member.toString()]);
//         await Thread.aggregate([
//             {
//                 "$match":{
//                     members:{"$all":[currentUserDetails[0].id.toString(),member.toString()]}
//                 }
//             },
//             {
//                 "$lookup":{ 
//                     from: 'messages',
//                     localField: '_id',
//                     foreignField: 'thread', 
//                     as: 'threadMessages' 
//                 }
//             }
//           ]).then(res=>{
//               console.log(res)
//               sendUser = res[0]['_id'];
//           })
//           // console.log(new Date() === new Date().getTime())
       
//           Message.create({ 
//               thread: sendUser,
//               send: currentUserDetails[0].id.toString(),
//               message,
//               date:  new Date().getTime(), 
//               created_by: currentUserDetails[0].id.toString(),
//               is_deleted: []
//           }).then(res=>{
//               console.log(res)
//           })     
//         //abcdefghijlk

//         const allUserDetails = await models.users.findAll({
//           attributes: ['id','name','userName','profileImageUrl'],
//           where: {
//               name: {
//                   [Op.ne]: decoded.userData.toString()
//               }
//           },
//           raw:true
//         })
//         // console.log(currentUserDetails[0].id)
//         let threads;
//         Thread.aggregate([
//             {
//                 "$match":{
//                     members:{"$all":[currentUserDetails[0].id.toString()]}
//                 }
//             },
//             {
//                 "$lookup":{ 
//                     from: 'messages',
//                     localField: '_id',
//                     foreignField: 'thread', 
//                     as: 'threadMessages' 
//                 }
//             }
//         ]).then(resp=>{
//             console.log(resp[0].threadMessages)
//             threads = resp;

//             let threadAss = {}
//             let ThreadArr = [] 
//             threads.map(items=>{
//                 for(let i in allUserDetails){
//                     if(parseInt(items.members[0]) === allUserDetails[i].id){
//                         threadAss = { 
//                             threadDetails: allUserDetails[i],
//                             created_at: items['created_at'],
//                             messages: items['threadMessages']
//                         }
//                         // console.log("frist",threadAss)
//                         ThreadArr.push(threadAss)
//                     }
//                     if(parseInt(items.members[1]) === allUserDetails[i].id){
//                         threadAss = {
//                             threadDetails: allUserDetails[i],
//                             created_at: items['created_at'],
//                             messages: items['threadMessages']
//                         }
//                         // console.log("sexond",threadAss)
//                         ThreadArr.push(threadAss)
//                     }
//                 }
//             })
//           client.broadcast.emit('messageSet',ThreadArr)
//         })       
//       } 
//       catch(err){  
//           console.log(err)  
//       }
//   });
// })

 

 

// io.listen(5000);
app.listen(4000, async function () {
    console.log('Server is running.. on Port 4000');
});
