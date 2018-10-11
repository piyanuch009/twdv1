const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Room = require('../models/room');


const db = "mongodb://localhost/tanavadeedb";
mongoose.Promise = global.Promise;
mongoose.connect(db, {useNewUrlParser: true} , (err) => {
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/', (req, res) => {
    console.log('Get request for root');
    res.send('api work');
});

router.get('/rooms', (req, res) => {
    console.log('Get request for all room');
    Room.find({})
    .exec((err, rooms)=>{
        if (err){
            console.log("Error retrieving rooms");
        }else {
            res.json(rooms);
        }
    });
});

router.get('/rooms/:id', (req, res) => {
    console.log('Get request for a single room');
    Room.findById(req.params.id)
    .exec((err, room)=>{
        if (err){
            console.log("Error retrieving room");
        }else {
            res.json(room);
        }
    });
});

router.get('/roomsByPrice/:price', (req, res) => {
    console.log('Get request for a single video');
    Room.find({'price': req.params.price})
    .exec((err, rooms)=>{
        if (err){
            console.log("Error retrieving room");
        }else {
            res.json(rooms);
        }
    });
});

module.exports = router;