var myApp = angular.module('myApp', []);

myApp.controller('VocabularyController', function(VocabService) {
  var vm = this;
  vm.spanishWord = false;
  vm.englishWord = false;
  vm.allWord = false;

  vm.postToVocabulary = function() {
    var newWords = {
      word1: vm.word1,
      word2: vm.word2,
    };
    console.log('in controller sending:', newWords);
    VocabService.postToVocabulary(newWords).then(function() {
      console.log('back in controller after post');
      vm.getVocabulary();
    });
  }; // end postToVocabulary

  vm.getVocabulary = function() {
    console.log('in controller, getVocabulary');
    VocabService.getVocabulary().then(function() {
      vm.vocabulary = VocabService.data;
      console.log('back in controller with:', vm.vocabulary);
    });
  }; // end getVocabulary

  vm.deleteWords = function(words) {
    console.log('in delete', words);
    VocabService.deleteWords(words._id).then(function() {
      vm.getVocabulary();
    });
  }; // end deleteWords

  vm.updateWords = function(words) {
    console.log('in update', words);
    VocabService.updateWords(words).then(function() {
      vm.getVocabulary();
    });
  };

  vm.spanishWords = function() {
    vm.spanishWord = !vm.spanishWord;
    console.log('in spanishWord');
  };

  vm.englishWords = function() {
    vm.englishWord = !vm.englishWord;
    console.log('in englishWord');
  };

  vm.allWords = function() {
    vm.allWord = !vm.allWord;
    console.log('in  allWord');
  };

}); // end controller
