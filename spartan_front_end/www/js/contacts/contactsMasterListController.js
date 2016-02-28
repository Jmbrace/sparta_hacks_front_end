(function(){

var contactsMasterListController = function($scope, contactsService, $state,$http){
	vm = this;
	vm.contacts = [];
	vm.contactToAdd = {};
	vm.contactToAdd.name = undefined;
	vm.contactToAdd.companyName = undefined;
	vm.contactToAdd.relavantJobId = undefined;
	vm.contactToAdd.phone = undefined;
	vm.contactToAdd.email = undefined;
	vm.contactToAdd.position = undefined;

	vm.init = function(){
		$http({
            withCredentials: true,
            method: 'GET',
            url: "https://project-organize-jmitch0901.c9users.io/api/me/contacts"
        }).success(function(response){
        	console.log(response);
        	vm.contacts = {}
			vm.contacts = response ;
	});
	}
vm.init();

	vm.getSelectedContact = function(){
		return contactsService.getContact();
	};

	vm.goToContact = function(contact){
		contactsService.setContact(contact);
		$state.go('home.contacts-single');
	}

	vm.seeContacts = function(){
		$state.go('home.contacts');
	}

	vm.newContact = function(){
		vm.contactToAdd = {};
		$state.go('home.addContact');
	}
	vm.submitContact = function(){
		company = {"name": vm.contactToAdd.companyName};
		  $http({
            withCredentials: true,
            method: 'POST',
            url: "https://project-organize-jmitch0901.c9users.io/api/me/contacts",
            data: {"name": vm.contactToAdd.name, "position":vm.contactToAdd.position, "companyName": company, "relevantJobName":vm.contactToAdd.relavantJobId, "email": vm.contactToAdd.email, "phone":vm.contactToAdd.phone}
        }).success(function(){
		contactsService.setContact(vm.contactToAdd);
		contactsService.pushContact(vm.contactToAdd);//the push should only happen in a success promise
		$state.go('home.contacts-single');
        });

		//Make call to create contact
		//set contact in contact service, route to single contact entry
	}
};
contactsMasterListController.$inject = ['$scope', 'contactsService','$state','$http'];

angular.module('org').controller('contactsMasterListController', contactsMasterListController);
})();
