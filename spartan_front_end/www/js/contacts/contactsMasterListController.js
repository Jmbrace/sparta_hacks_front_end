(function(){

var contactsMasterListController = function($scope){
	vm = this;
	vm.contacts = ["contact 1","contact 2", "contact 3", "contact 4" ];


	vm.login = function() {
	
	};
};
contactsMasterListController.$inject = ['$scope'];

angular.module('org').controller('contactsMasterListController', contactsMasterListController);
})();