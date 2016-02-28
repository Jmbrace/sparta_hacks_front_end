(function(){

var jobsApiService = function($http) {
var API_BASE_URL = "https://project-organize-jmitch0901.c9users.io/api";

    return {
        getAllJobs: function(){
            $http({
            withCredentials: true,
            method: 'GET',
            url: API_BASE_URL+"/me/jobs"
        })
        },

        getSingleJob: function(){
            //make 
        },

        createAJob: function(title , companyName, location, status){
        	company = {
        		"name": companyName
        	};
        $http({
            withCredentials: true,
            method: 'POST',
            url: API_BASE_URL+"/me/jobs",
            data: {"title": title, "company":company, "location": location, "status":status}
        })

        }
    }
};
jobsApiService.$inject = ['$http'];

angular.module('org').service('jobsApiService', jobsApiService);

})();
