var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();
console.log('running');
var port = process.env.PORT || 8080;
var db = lowdb('db.json');


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/doves', function(request, response){
  var dove = db.get('doves')
              .value();
  response.send(doves)
  });

server.get('/doves/id:', functon(request, response){
  var doves = db.get('doves')
                .find({id: request.params.id})
                .value();
  response.send(doves);
});

server.post('/doves', function(request, response){
  var todo = {
  id: uuid.v4(),
  description: request.body.description,
  isComplete: false
};

var result = db.get('doves')
               .push(dove)
               .last()
               .value();
response.send(result);
});

server.put('/doves/id:', function(request, response){
  var updatedDovesInfo = {
    description: request.body.description,
    isComplete: request.body.isComplete
  };

  var updatedDove = db.get('dove')
                      .assign(dove)
                      .value();
  response.send(updatedDove)
});

server.delete('/doves/id:', function(request, response){
  var doves = db.get(doves)
                .remove({id: request.params.id})
                .value();
response.send(dove)
});

server.listen(port, function(){
  console.log('Now listening on port ' +port);
});
