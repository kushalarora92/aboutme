(function(){
	var app = angular.module("app");

	app.controller("PortfolioCtrl", ["$scope", "$http", function($scope, $http){
		function successCallback(response){
			$scope.data = response.data;
		}

		function failureCallback(error){
			console.error(error);
		}

		$http.get("./data/portfolio.json").then(successCallback, failureCallback);
	}])
}())