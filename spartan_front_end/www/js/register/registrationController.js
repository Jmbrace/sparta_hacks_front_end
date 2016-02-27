(function(){

var registrationController = function($scope, regiService){
	vm = this;
	vm.user = {};
	vm.user.username = undefined;
	vm.user.password = undefined;
	vm.user.name = undefined;

	vm.createProfile = function() {
		regiService.create(vm.user.username, vm.user.password);
	};
};
registrationController.$inject = ['$scope', 'AuthService'];

angular.module('org').controller('registrationController', registrationController);
})();