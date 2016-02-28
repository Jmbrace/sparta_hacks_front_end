(function(){

var contactsMasterListController = function($scope, contactsService){
	vm = this;
	vm.contacts = ["contact 1","contact 2", "contact 3", "contact 4" ];
	
};
contactsMasterListController.$inject = ['$scope', 'contactsService'];

angular.module('org').controller('contactsMasterListController', contactsMasterListController);
})();