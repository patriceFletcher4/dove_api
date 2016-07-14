var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

//import my model
var Dove = require('./models/dove.js');

var port = process.env.PORT || 8080;
var db = lowdb('db.json');


db.defaults({doves: []})
  .value();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/doves', function(request, response){
  var doves = db.get('doves')
              .value();
  response.send(doves)
  });

server.get('/doves/:id', function(request, response){
  var doves = db.get('doves')
                .find({id: request.params.id})
                .value();
  response.send(doves);
});

server.post('/doves', function(request, response){
  var dove = new Dove(request.body.type, request.body.canFly, request.body.hasNest, request.body.color);
  var result = db.get('doves')
               .push(dove)
               .last()
               .value();
  response.send(result);
});

server.put('/doves/:id', function(request, response){
  var dove = new Dove(request.body.type, request.body.canFly, request.body.hasNest, request.body.color, request.params.id);
  var updatedDove = db.get('dove')
                      .assign(dove)
                      .value();
  response.send(updatedDove);
});
server.delete('/doves/:id', function(request, response){
  var doves = db.get(doves)
                .remove({id: request.params.id})
                .value();
response.send(dove)
});

server.listen(port, function(){
  console.log('Now listening on port ' +port);
});
