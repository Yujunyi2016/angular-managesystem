//requires
var express = require('express');
var api = express();
var bodyParse = require('body-parser');
var mongoose = require('mongoose');
var assert = require('assert');
var User = require('./user/user');

//use bodyparse
api.use(bodyParse.json());
//link to the front-end;
api.use(express.static('/Users/juyu/Documents/angular-managesystem'));
//database connection
mongoose.connect('mongodb://localhost/test',function (err,db){
  assert.equal(null,err);
  console.log("connect correctly to the database");
});



//Router and RESTful serveces
var router = express.Router();
//little teaser
router.get('/',function(req,res){
  res.send("Welcome");
});
//url: /uers  realize GET,POST serveces
router.route('/users')
.post(function(req,res){
  var user = new User();

  user.firstName  = " ";
  user.lastName  = " ";
  user.email  = " ";
  user.tag  = " ";
  user.user_id = " ";
  user.save(function(err){
    if(err)  res.send(err);
    res.json(user);
  });
})

.get(function(req,res){

  User.find(function(err,users){
    if(err) res.send(err);
    res.json(users);
  });
});

//url: /users/:_id   realize GET,PUT,DELETE serveces
router.route('/users/:_id')

.get(function(req,res){
  User.findById(req.params._id,function(err,user){
    if(err)  res.send(err);
    res.json(user);
  });
})

.put(function (req,res){
  User.findById(req.params._id,function (err,user){
    if (err) res.send(err);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.tag = req.body.tag;
    user.user_id = req.body.user_id;

    user.save(function (err){
      if (err) res.send(err);
      res.json(user);
    });
  });
})

.delete(function (req,res){
  User.remove({_id : req.params._id },function (err){
    if (err) res.send(err);
    res.json({message: "Delete successfully"});
  });
});

api.use('/',router);




//Port: 8080
api.listen('8080',function(){
  console.log('Magic happens');
});
