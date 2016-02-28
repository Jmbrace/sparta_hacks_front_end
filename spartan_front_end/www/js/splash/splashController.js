(function(){

var splashController = function($scope, splashService){
  var API_BASE_URL = "https://project-organize-jmitch0901.c9users.io/api";
	vm = this;
  splashService.checkIfSignedIn();
};
splashController.$inject = ['$scope','splashService'];

angular.module('org').controller('splashController', splashController);
})();
