'use strict'

var app = angular.module('AppChamados', ['ui.router'])

app.config(myConfig)

function myConfig($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/home',
    views: {
      '': {
        templateUrl: './views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      },
      'menu': {
        templateUrl: './views/menu.html'
      }
    }
  })

  .state('cnsUsuario', {
    url: '/usuario',
    views: {
      '': {
        templateUrl: './views/cnsUsuario.html',
        controller: 'UsuarioController',
        controllerAs: 'vm'
      },
      'menu': {
        templateUrl: './views/menu.html'
      }
    }
  })

  .state('login', {
    url: '/login',
    views: {
      '': {
        templateUrl: './views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      }
    }
  })





  $urlRouterProvider.otherwise('/home')

}