var theApp = angular.module("FWFApplication", []);
theApp.controller("Control", function($scope){
	
	$scope.plantArray = [];
	$scope.plant = {};

	$scope.onFormSubmit = function(){
		$scope.plantArray.push($scope.plant);
		$scope.plant = {};
		console.log($scope.plantArray);
	}
	$scope.removeItemAt = function(pIdx){
		$scope.plantArray.splice(pIdx, 1);

	}
});