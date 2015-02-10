'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('BGColorSel', function($scope) {
  $scope.color = "#ffffff";
  $scope.secondColor = "#ffffff";
  $scope.thirdColor = "#ffffff";
});
