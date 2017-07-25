myApp.service('VocabService', function($http){
  var sv = this;

sv.getVocabulary = function(){
  console.log('in service, getVocabulary');
  return $http({
    method:'GET',
    url:'/vocabulary'
  }).then(function(response){
console.log('in service back from server with:', response);
sv.data = response;
  }); // end http
}; // end getVocabulary






});
