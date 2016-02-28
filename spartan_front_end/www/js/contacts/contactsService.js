(function(){

var contactsService = function() {
    var contactModel = {};
    var contactsBank = [];
    return {
        getContact: function(){
            return contactModel;
        },

        setContact: function(contact){
            contactModel = contact;
        },

        flushContact: function(){
            contactModel = {};
        },
        pushContact: function(contact){
            contactsBank.push(contact);
        },
        getList: function(){
            return contactsBank;
        }
    }
};
contactsService.$inject = [];

angular.module('org').service('contactsService', contactsService);

})();
