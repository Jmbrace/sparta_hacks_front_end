(function(){

var JobsService = function() {
    var jobModel = {};

    return {
        getJob: function(){
            return jobModel;
        },

        setJob: function(job){
            jobModel = job;
        },

        flushJob: function(){
            jobModel = {};
        }
    }
};
JobsService.$inject = [];

angular.module('org').service('JobsService', JobsService);

})();
