(function(){

var loginController = function($scope, AuthService,$state){
	vm = this;
	vm.user = {};
	vm.user.username = undefined;
	vm.user.password = undefined;

	vm.login = function() {
		AuthService.logIn(vm.user.username, vm.user.password);
	};
	vm.logedIn = function() {
		AuthService.loggedIn();
	};
};
loginController.$inject = ['$scope', 'AuthService','$state'];

angular.module('org').controller('loginController', loginController);
})();
