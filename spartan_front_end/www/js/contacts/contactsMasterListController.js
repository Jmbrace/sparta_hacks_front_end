(function(){

var contactsMasterListController = function($scope, contactsService){
	vm = this;
	vm.contacts = ["contact 1","contact 2", "contact 3", "contact 4" ];
	vm.contactToAdd = {};
	vm.contactToAdd.firstName = undefined;
	vm.contactToAdd.lastName = undefined;
	vm.contactToAdd.companyName = undefined;
	vm.contactToAdd.relavantJob = undefined;
	vm.contactToAdd.number = undefined;
	vm.contactToAdd.email = undefined;


	vm.submitContact = function(){
		//Make call to create contact
		//set contact in contact service, route to single contact entry
	}
};
contactsMasterListController.$inject = ['$scope', 'contactsService'];

angular.module('org').controller('contactsMasterListController', contactsMasterListController);
})();
