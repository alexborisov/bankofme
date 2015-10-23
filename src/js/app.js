'use strict';

(function (angular) {
  angular
    .module('app', [
      'ui.router'
    ])
    .config(routes)
  ;

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routes($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "html/home.html"
      })
      .state('chat', {
        url: "/chat",
        templateUrl: "html/chat.html"
      })
    ;
  }
}(angular));