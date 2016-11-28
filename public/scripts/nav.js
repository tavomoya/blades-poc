'use strict';

angular.module('blades-poc')
.controller('NavCtrl', function ($scope) {

    $scope.blades = [];

    $scope.launchBlade = function () {
        $scope.blades = [];
        $scope.blades.push({});
    };

});