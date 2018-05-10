var app = angular.module('resume-app', ['ngRoute', 'ngResource', 'ui.router', 'ui.bootstrap']);

app.config( ['$stateProvider', '$urlRouterProvider' , function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('/', {
        abstract: true,
        url: '/',
        template: '<ui-view/>'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.view.html',
        controller: 'HomeCtrl'
      })
      .state('education', {
        url: '/education',
        templateUrl: 'views/education.view.html',
        controller: 'edusController'
      })
      .state('work', {
        url: '/work',
        templateUrl: 'views/work.view.html',
        controller: 'worksController'
      })
      .state('detail', {
        url: '/work/:workId',
        templateUrl: 'views/workDetails.view.html',
        controller: 'workDetailsController'
      })
      .state('skill', {
        url: '/skills',
        templateUrl: 'views/skills.view.html',
        controller: 'skillsController'
      })
      .state('other', {
        url: '/other',
        templateUrl: 'views/other.view.html',
        controller: 'othersController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.view.html',
        controller: 'ContactCtrl'
      })
      .state('frhome', {
        url: '/fr/home',
        templateUrl: 'views/fr.home.view.html',
        controller: 'HomeCtrl'
      })
      .state('freducation', {
        url: '/fr/education',
        templateUrl: 'views/fr.education.view.html',
        controller: 'edusController'
      })
      .state('frwork', {
        url: '/fr/work',
        templateUrl: 'views/fr.work.view.html',
        controller: 'worksController'
      })
      .state('frdetail', {
        url: '/fr/work/:workId',
        templateUrl: 'views/fr.workDetails.view.html',
        controller: 'workDetailsController'
      })
      .state('frskill', {
        url: '/fr/skills',
        templateUrl: 'views/fr.skills.view.html',
        controller: 'skillsController'
      })
      .state('frother', {
        url: '/fr/other',
        templateUrl: 'views/fr.other.view.html',
        controller: 'othersController'
      })
      .state('frcontact', {
        url: '/fr/contact',
        templateUrl: 'views/fr.contact.view.html',
        controller: 'ContactCtrl'
      });

      $urlRouterProvider.otherwise('/home');
  }]);

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://cs101.wvu.edu/**',
    'https://www.youtube.com/**',
    'https://drive.google.com/**',
  ]);
});