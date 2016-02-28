(function(){

var AuthService = function($http, $window, $state) {
var API_BASE_URL = "https://project-organize-jmitch0901.c9users.io/api";

    return {
        logIn: function(username, password) {
        console.log("signing in");

        $http({
            withCredentials: true,
            method: 'POST',
            url: API_BASE_URL+"/login",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {username: username, password: password}
        }).success(function (response, status, header){
                $window.sessionStorage.showNav  = true;
      			$state.go('home');
        }).error(function (response){
            //console.log("error");
        });
    },

        logOut: function() {

        console.log("signing out");
        $http({
            withCredentials: true,
            method: 'GET',
            url: API_BASE_URL+"/logout",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {username: username, password: password}
        }).success(function (response){
            $window.sessionStorage.showNav  = false;
            console.log("success")
        }).error(function (response){
            console.log("error");
        })
        },

        loggedIn: function(callback) {

        }
    }
};
AuthService.$inject = ['$http', '$window', '$state'];

angular.module('org').service('AuthService', AuthService);

})();
