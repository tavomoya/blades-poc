'use strict';

var app = angular.module('blades-poc', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
]);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            redirectTo: '/dashboard'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});