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
}); // end router get


router.post('/', function(req, res) {
  console.log('vocabularyObjects url hit', req.body);
  var wordsToAdd = {
    word1: req.body.word1,
    word2: req.body.word2,
  };
  var newWords = vocabularyModel(wordsToAdd);
  newWords.save();
  res.send('hello!!');
}); // end router post


router.delete('/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  vocabularyModel.remove({
    _id: id
  }).then(function() {
    res.send(200);
  });
}); // end router delete


router.put('/:id', function(req, res) {

  var id = req.params.id;
  var wordsToAdd = {
    word1: req.body.word1,
    word2: req.body.word2,
  };
  console.log(id);
  vocabularyModel.findByIdAndUpdate(id, { $set:
    {word1: req.body.word1,
    word2: req.body.word2}
  }).then(function() {
    res.sendStatus(200);
  }).catch(function(err){
    console.log(err);
    res.sendStatus(500);
  });
}); // end router put

module.exports = router;
