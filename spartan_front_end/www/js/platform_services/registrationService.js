(function(){

var RegistrationService = function($http) {
var API_BASE_URL = "https://project-organize-jmitch0901.c9users.io/api";
    return {
        create: function(username, password) {
        console.log("creating");

        $http({
            withCredentials: true,
            method: 'POST',
            url: API_BASE_URL+"/register",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {username: username, password: password}
        }).success(function (response){
            console.log("success")
        }).error(function (response){
            console.log("error");
        })
        }
    }
};
RegistrationService.$inject = ['$http'];

angular.module('org').service('RegistrationService', RegistrationService);

})();