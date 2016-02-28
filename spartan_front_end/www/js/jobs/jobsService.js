(function(){

var jobsService = function() {
    var jobModel = {};
    var jobStore = [];

    return {
        getJob: function(){
            return jobModel;
        },

        setJob: function(job){
            jobModel = job;
        },

        flushJob: function(){
            jobModel = {};
        },
        pushJob: function(job){
            jobStore.push(job);
        },
        getJobList: function(){
            return jobStore;
        }
    }
};
jobsService.$inject = [];

angular.module('org').service('jobsService', jobsService);

})();
