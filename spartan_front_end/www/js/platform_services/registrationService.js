(function(){

var RegistrationService = function($http) {
    return {
        create: function(username, password,name) {
        console.log("creating");
            //make app call
            //set api key
        }
    }
};
RegistrationService.$inject = ['$http'];

angular.module('org').service('RegistrationService', RegistrationService);

})();