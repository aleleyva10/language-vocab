var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/languagesVocab');
var vocabularySchema = new mongoose.Schema({
  word1: String,
  word2: String,
});
var vocabularyModel = mongoose.model('vocabularyModel', vocabularySchema);

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('vocabularyObjects get call');
  vocabularyModel.find().then(function(results) {
    res.send(results);
  });
}); // end vocabulary get call


router.post('/', function(req, res) {
  console.log('vocabularyObjects url hit', req.body);
  var wordsToAdd = {
    word1: req.body.word1,
    word2: req.body.word2,
  };
var newWords = vocabularyModel(wordsToAdd);
newWords.save();
res.send('hello!!');
}); // end post

module.exports = router;
