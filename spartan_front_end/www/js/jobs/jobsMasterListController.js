(function(){

var jobsMasterListController = function($scope, $state, jobsService, contactsService,jobsApiService, $http){
	vm = this;
	vm.jobToAdd = {};
	vm.jobToAdd.name = undefined;
	vm.jobToAdd.companyName = undefined;
	vm.jobToAdd.location = undefined;
	vm.jobToAdd.status = undefined;
	vm.jobToAdd.contacts = [];
	vm.jobs = [{
		"name": "There seems to be nothing here!"
	}];

	vm.init = function(){
		$http({
            withCredentials: true,
            method: 'GET',
            url: "https://project-organize-jmitch0901.c9users.io/api/me/jobs"
        }).success(function(response){
        	console.log(response);
        	vm.jobs = {}
			vm.jobs = response.jobs ;
	});
	}
vm.init();



	vm.goToJob = function(job) {
		jobsService.setJob(job);
		$state.go('home.jobs-single');
	};

	vm.seeJobs = function(){
		$state.go('home.jobs')
	};

	vm.getSelectedJob = function(){
		return jobsService.getJob();
	}

	vm.submitManual = function(){

    ///make api call to add job,
    	   company = {
        		"name": vm.jobToAdd.companyName
        	};
        $http({
            withCredentials: true,
            method: 'POST',
            url: "https://project-organize-jmitch0901.c9users.io/api/me/jobs",
            data: {"title": vm.jobToAdd.name, "company":company, "location": vm.jobToAdd.location, "status":vm.jobToAdd.status}
        }).success(function(){
   			jobsService.pushJob(vm.jobToAdd);
			jobsService.setJob(vm.jobToAdd);
    		$state.go('home.jobs-single');
    	});
	   //;
	};

	vm.goToContact = function(contact){
		contactsService.setContact(contact);

		$state.go('home.contacts-single');
	}

	
};
jobsMasterListController.$inject = ['$scope', '$state', 'jobsService' , 'contactsService', 'jobsApiService','$http'];

angular.module('org').controller('jobsMasterListController', jobsMasterListController);
})();
