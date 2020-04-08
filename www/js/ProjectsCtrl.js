(function(){
	var app = angular.module("app");

	app.controller("ProjectsCtrl", ["$scope", "$http", function($scope, $http){
		function successCallback(response){
			$scope.data = response.data;
		}

		function failureCallback(error){
			console.error(error);
		}

		$http.get("./data/projects.json").then(successCallback, failureCallback);
	}])
}())