(function(){

var searchPageController = function($scope){
	vm = this;
	vm.keyword = undefined;
	vm.location = undefined;

	vm.query = function() {
		console.log("")
	};
};
searchPageController.$inject = ['$scope'];

angular.module('org').controller('searchPageController', searchPageController);
})();