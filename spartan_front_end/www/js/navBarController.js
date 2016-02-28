(function(){

var navBarController = function($scope, splashService, $state){
  var API_BASE_URL = "https://project-organize-jmitch0901.c9users.io/api";
	vm = this;
    vm.showNav = splashService.showNav;
    vm.searchClicked = true;
    vm.jobsClicked = false;
    vm.contactsClicked = false;

    vm.clickSearch = function(){
    vm.searchClicked = true;
    vm.jobsClicked = false;
    vm.contactsClicked = false;
    	$state.go('search');
    };
    vm.clickContacts  = function(){
    vm.searchClicked = false;
    vm.jobsClicked = false;
    vm.contactsClicked = true;
    	$state.go('contacts');
    };
    vm.clickJobs = function(){
    vm.searchClicked = false;
    vm.jobsClicked = true;
    vm.contactsClicked = false;
    	$state.go('jobs');
    };
};
navBarController.$inject = ['$scope','splashService', '$state'];

angular.module('org').controller('navBarController', navBarController);
})();
