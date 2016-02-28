(function(){

var jobsMasterListController = function($scope, $state, jobsService){
	vm = this;
	vm.jobToAdd = {};
	vm.jobToAdd.title = undefined;
	vm.jobToAdd.companyName = undefined;
	vm.jobToAdd.location = undefined;



	vm.jobs = [{"name": "job1",
							"id": 1
						},{"name": "job2",
							"id": 2
						}, {"name": "job3",
							"id": 3
						}, {"name": "job4",
							"id": 4
							} ];

	vm.goToJob = function(job) {
		jobsService.setJob(job);
		//$state.go('home.job');
	};

	vm.submitManual = function(){
    ///make api call to add job,
	//	$state.go() to the single job page =
	};
};
jobsMasterListController.$inject = ['$scope', '$state', 'jobsService'];

angular.module('org').controller('jobsMasterListController', jobsMasterListController);
})();
