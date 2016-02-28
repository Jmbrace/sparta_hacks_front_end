(function(){

var splashService = function($http, $window, $state,  $http) {
var API_BASE_URL = "https://project-organize-jmitch0901.c9users.io/api";


    var splashServe =  {
      checkIfSignedIn:   function (){$http({
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
      $window.sessionStorage.showNav = true;
      //$state.go('search');
    }).error(function (response){
      $window.sessionStorage.showNav  = false;
      //$state.go('login');
    })
    },
    showNav: $window.sessionStorage.showNav
}


    return splashServe;
};
splashService.$inject = ['$http','$window', '$state', '$http'];

angular.module('org').service('splashService', splashService);

})();
