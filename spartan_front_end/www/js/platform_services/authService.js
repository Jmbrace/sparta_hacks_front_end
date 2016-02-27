(function(){

var AuthService = function($http) {
    return {
        logIn: function(username, password) {
        console.log("signing in");
            //make app call
            //set api key
        },
 
        logOut: function() {

        console.log("signing out");
 		//Make api call
 		//delete cookie
        },

        loggedIn: function() {

        	//if cookie == undefined 
        	// return false
        	// else return true
        }
    }
};
AuthService.$inject = ['$http'];

angular.module('org').service('AuthService', AuthService);

})();