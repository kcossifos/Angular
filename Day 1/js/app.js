var app = angular.module("MyFirstApp", [])
	   app.controller("MyController", function($scope){

	   	$scope.marklar = "Hello There";
	   	$scope.counter = 0;
	   	$scope.incrementIt = function(){
	   		$scope.counter++;
	   	}

	   })