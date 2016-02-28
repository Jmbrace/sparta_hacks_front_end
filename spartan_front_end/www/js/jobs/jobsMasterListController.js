(function(){

var jobsMasterListController = function($scope, $state, jobsService){
	vm = this;
	vm.jobs = ["Job 1","Job 2", "Job 3", "Job 4" ];

	vm.goToJob = function(job) {
		jobsService.setJob(job);
		$state.go('job');
	};
};
jobsMasterListController.$inject = ['$scope', '$state', 'jobsService'];

angular.module('org').controller('jobsMasterListController', jobsMasterListController);
})();