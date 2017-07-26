myApp.service('VocabService', function($http){
  var sv = this;

sv.postToVocabulary = function(newWords){
  console.log('in service sending:', newWords);
  return $http({
    method: 'POST',
    url: '/vocabulary',
    data: newWords
  }).then(function(response){
    console.log('back from postToVocabulary:', response);
  }); // end http
}; // end postToVocabulary


sv.getVocabulary = function(){
  console.log('in service, getVocabulary');
  return $http({
    method:'GET',
    url:'/vocabulary'
  }).then(function(response){
console.log('in service back from server with:', response);
sv.data = response.data;
  }); // end http
}; // end getVocabulary






});
