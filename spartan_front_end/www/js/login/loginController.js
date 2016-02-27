(function(){

var loginController = function($scope, AuthService){
	vm = this;
	vm.user = {};
	vm.user.username = undefined;
	vm.user.password = undefined;

	vm.login = function() {
		AuthService.logIn(vm.user.username, vm.user.password);
	};
};
loginController.$inject = ['$scope', 'AuthService'];

angular.module('org').controller('loginController', loginController);
})();