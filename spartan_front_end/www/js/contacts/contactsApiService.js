(function(){

var contactsApiService = function($http) {

    return {
        getAllContacts: function(){
            //make api call to get list of all contacts relvant to the current suer and return them
        },

        getSingleContact: function(){
            //get a single contact and return
        }
    }
};
contactsApiService.$inject = ['$http'];

angular.module('org').service('contactsApiService', contactsApiService);

})();
