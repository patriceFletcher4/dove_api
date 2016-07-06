var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();
console.log('running');
var port = process.env.PORT || 8080;
var db = lowdb('db.json');
