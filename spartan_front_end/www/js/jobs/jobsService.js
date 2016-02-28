(function(){

var jobsService = function() {
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
jobsService.$inject = [];

angular.module('org').service('jobsService', jobsService);

})();
