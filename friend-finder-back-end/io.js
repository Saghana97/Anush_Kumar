var io = require('socket.io')(); 
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");
const models = require('./models')


let users = []; 
const privateKey = "friendfinder";
const Thread = require('./models/MongoDB/Thread')

io.on('connection', function(socket) {
  socket.on('setUsername',async function(data) {
    console.log(data)
    let userId;
      try {
      decoded = await jwt.verify(data.key.toString(), privateKey);
      const currentUserDetails = await models.users.findAll({
          attributes: ['id'],
          where: {
              name: {
                  [Op.eq]: decoded.userData.toString()
              }
          },
          raw:true
      })
      // console.log([currentUserDetails[0].id.toString(),member.toString()]);
      await Thread.aggregate([
          {
              "$match":{
                  members:{"$all":[currentUserDetails[0].id.toString(),data.id.toString()]}
              }
          }
        ]).then(res=>{
            console.log(res)
            userId = res[0]['_id'];
        })
           
    } 
    catch(err){  
        console.log(err)  
    }

    console.log(users,userId)

    if(users.indexOf(userId.toString()) === -1) {
      console.log(users.indexOf(userId))
      users.push(userId.toString());
      socket.broadcast.emit('userSet',userId)
    } else {
      socket.broadcast.emit('userSet', userId + ' username is taken! Try some other username.');
    }
  })
});

 
 
io.listen(5000);   
  