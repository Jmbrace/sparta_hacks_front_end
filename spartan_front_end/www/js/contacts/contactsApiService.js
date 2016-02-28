(function(){

var contactsApiService = function($http) {

    return {
        getAllContacts: function(){
            //make api call to get list of all contacts relavant to the current user

        $http({
            withCredentials: true,
            method: 'GET',
            url: API_BASE_URL+"/me/contacts",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }
        })
        },

        getSingleContact: function(contactId){
            //get a single contact and return
        $http({
            withCredentials: true,
            method: 'GET',
            url: API_BASE_URL+"/me/contacts/" + ,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }
        })
        },
        addContact: function(){
            
        }

    }
};
contactsApiService.$inject = ['$http'];

angular.module('org').service('contactsApiService', contactsApiService);

})();
