(function(){

var splashController = function($scope, $http,$state){
  var API_BASE_URL = "https://project-organize-jmitch0901.c9users.io/api";
	vm = this;


  $http({
      withCredentials: true,
      method: 'GET',
      url: API_BASE_URL+"/me",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
      }
  }).success(function (response, status, header){
      //console.log($cookies.get('connect.sid'));
      $state.go('search');
  }).error(function (response){
      //console.log("error");
      $state.go('login');
  });
};
splashController.$inject = ['$scope', '$http','$state' ];

angular.module('org').controller('splashController', splashController);
})();
