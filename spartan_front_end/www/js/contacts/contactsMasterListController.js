(function(){

var contactsMasterListController = function($scope){
	vm = this;
	vm.contacts = ["Yo momma","Yo woman", "Yo side chick", "Yo ex" ];


	vm.login = function() {
	
	};
};
contactsMasterListController.$inject = ['$scope'];

angular.module('org').controller('contactsMasterListController', contactsMasterListController);
})();