(function(){

var jobsApiService = function($http) {

    return {
        getAllJobs: function(){
            //make api call and return a list
        },

        getSingleJob: function(){
            //make 
        }
    }
};
jobsApiService.$inject = ['$http'];

angular.module('org').service('jobsApiService', jobsApiService);

})();
