(function(){

var jobsMasterListController = function($scope, $state, jobsService){
	vm = this;
	vm.jobs = ["Google Dev","Buttlicker", "vaginal infections", "booty" ];

	vm.goToJob(job) = function() {
		jobsService.setJob(job);
		$state.go('job');
	};
};
jobsMasterListController.$inject = ['$scope', '$state', 'jobsService'];

angular.module('org').controller('jobsMasterListController', jobsMasterListController);
})();