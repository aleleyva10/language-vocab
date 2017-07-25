var myApp = angular.module('myApp', []);


myApp.controller('VocabularyController', function(VocabService){
var vm = this;


vm.getVocabulary = function(){
  console.log('in controller, getVocabulary');
  VocabService.getVocabulary().then(function(){
    vm.vocabulary = VocabService.data;
    console.log('back in controller with:', vm.vocabulary);
  });
}; // end getVocabulary







});
