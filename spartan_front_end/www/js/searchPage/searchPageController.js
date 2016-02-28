(function(){

var searchPageController = function($scope,$state){
	vm = this;
	vm.keyword = undefined;
	vm.location = undefined;

	vm.query = function() {
		console.log("");
	};
	vm.addManual = function() {
		$state.go('home.addJob');
	};

};
searchPageController.$inject = ['$scope','$state'];

angular.module('org').controller('searchPageController', searchPageController);
})();
