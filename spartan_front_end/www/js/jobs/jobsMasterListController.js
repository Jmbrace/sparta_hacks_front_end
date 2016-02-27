(function(){

var jobsMasterListController = function($scope){
	vm = this;
	vm.jobs = ["Google Dev","Buttlicker", "vaginal infections", "booty" ];


	vm.login = function() {
		
	};
};
jobsMasterListController.$inject = ['$scope'];

angular.module('org').controller('jobsMasterListController', jobsMasterListController);
})();