'use strict';

angular.module('blades-poc')
.directive('blade', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/blades/blade.html',
        scope: {
            blades: '='
        },
        controller: function ($scope) {
            $scope.newBlade = function () {
                $scope.blades.push({});
            };

            $scope.submitForm = function (name) {
                if (name === '' || !name) {
                    throw new Error('Whoops!');
                } else {
                    alert(name);  
                }
            }
        }
    }
})