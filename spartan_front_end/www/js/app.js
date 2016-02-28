// Ionic org App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'org' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var spartaApp = angular.module('org', ['ionic','ui.router']);

spartaApp.config(function($stateProvider, $urlRouterProvider, $httpProvider){

$stateProvider
    .state('splash', {
      url: "/splash",
      templateUrl: "js/splash/splashPartial.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "js/login/loginPartial.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "js/register/registrationPartial.html"
    })
    .state('home',{
      url:"/home",
      templateUrl:'js/home.html'
    })
    .state('home.search',{
      url:'/search',
      views:{
        'search':{
          templateUrl:'js/searchPage/searchPagePartial.html'
        }
      }
    })
    .state('home.addJob',{
      url:'/addjob',
      views:{
        'search':{
          templateUrl:'js/jobs/addJobPartial.html'
        }
      }
    })
    .state('home.jobs',{
      url:'/jobs',
      views:{
        'jobs':{
          templateUrl:'js/jobs/jobsMasterListPartial.html'
        }
      }
    })
    .state('home.jobs-single',{
      url:'/jobs/:id',
      views:{
        'jobs':{
          templateUrl:'js/jobs/jobPartial.html'
        }
      }
    })
    .state('home.contacts',{
      url:'/contacts',
      views:{
        'contacts':{
          templateUrl:'js/contacts/contactsMasterListPartial.html'
        }
      }
    });


    $urlRouterProvider.otherwise("/home");
    // .state('search', {
    //   url: "/search",
    //   views:{
    //     'home':{
    //         templateUrl: "js/searchPage/searchPagePartial.html"
    //     }
    //   }
    // })
    // .state('jobs', {
    //   url: "/jobs",
    //   views:{
    //     'home':{
    //         templateUrl: "js/jobs/jobsMasterListPartial.html"
    //     }
    //   }
    // })
    // .state('job', {
    //   url: "/job",
    //   views:{
    //     'home':{
    //       templateUrl: "js/jobs/jobPartial.html"
    //     }
    //   }
    // })
    // .state('contacts', {
    //   url: "/contacts",
    //   views:{
    //     'home':{
    //       templateUrl: "js/contacts/contactsMasterListPartial.html"
    //     }
    //   }
    // });
});


spartaApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

 })
