var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/languagesVocab');

module.exports = router;
