const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

const models = require('../models')
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


//global variable
const privateKey = "friendfinder";

router.post('/',async function(req,res){
    var decoded = ""
    const details = req.body;
    console.log(details)
    try {
        decoded = await jwt.verify(details.requestFrom.toString(), privateKey);
        const currentUserDetails = await models.users.findAll({
            attributes: ['id'],
            where: {
                name: {
                    [Op.eq]: decoded.userData.toString()
                }
            },
            include:{
                model:models.friendRequests,
            },
            raw:true
        })
        // console.log(currentUserDetails[0].id)
        const friendRequest = await models.friendRequests.create({ requestId:currentUserDetails[0].id, requestToId:parseInt(details.requestTo), status:"waiting" });
        // console.log(friendRequest)
        res.status(200).send("user created");
    }
    catch(err){
        console.log(err)
    }
    
})

router.post('/accept',async function(req,res){
    console.log(req.body)
    models.friendRequests.update({
        status: 'accepted',
        }, {
        where: {
            [Op.and]:{
                id:{
                    [Op.eq]:req.body.id
                },
                status:{
                    [Op.eq]:'waiting'
                }
            }
        }
    });
})

module.exports = router