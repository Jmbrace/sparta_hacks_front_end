(function(){

var contactsService = function() {
    var contactModel = {};

    return {
        getContact: function(){
            return contactModel;
        },

        setContact: function(contact){
            contactModel = contactModel;
        },

        flushContact: function(){
            contactModel = {};
        }
    }
};
contactsService.$inject = [];

angular.module('org').service('contactsService', contactsService);

})();
