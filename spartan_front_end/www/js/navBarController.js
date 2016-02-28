(function(){

var navBarController = function($scope, splashService){
  var API_BASE_URL = "https://project-organize-jmitch0901.c9users.io/api";
	vm = this;
    vm.showNav = splashService.showNav;
    vm.searchClicked = true;
    vm.jobsClicked = false;
    vm.contactsClicked = false;
};
navBarController.$inject = ['$scope','splashService'];

angular.module('org').controller('navBarController', navBarController);
})();
