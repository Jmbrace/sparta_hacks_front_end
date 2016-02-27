(function(){

var registrationController = function($scope, RegistrationService){
	vm = this;
	vm.user = {};
	vm.user.username = undefined;
	vm.user.password = undefined;

	vm.createProfile = function() {
		console.log(vm.user.username);
		RegistrationService.create(vm.user.username, vm.user.password);
	};
};
registrationController.$inject = ['$scope', 'RegistrationService'];

angular.module('org').controller('registrationController', registrationController);
})();