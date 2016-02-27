// Ionic org App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'org' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var spartaApp = angular.module('org', ['ionic','ui.router'])

spartaApp.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise("/login");

$stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "js/login/loginPartial.html",
      controller: "loginController as loginctrl"
    })
    .state('register', {
      url: "/register",
      templateUrl: "js/register/registrationPartial.html",
      controller: "registrationController as regisctrl"
    })
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

