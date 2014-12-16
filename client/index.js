(function(){
  'use strict';

  angular.module('mosh', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',     {url:'/',          templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
        .state('register', {url:'/register',  templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
        .state('login',    {url:'/login',     templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
        .state('dashboard',{url:'/dashboard', templateUrl:'/views/dash/dash.html', controller:'DashCtrl'});
      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
