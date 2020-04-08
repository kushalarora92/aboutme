(function(){
	var app = angular.module("app", ['ui.router']);

	app.config(["$stateProvider", "$urlRouterProvider", 
		function($stateProvider, $urlRouterProvider){

			/*
			 * For any unmatched url, redirect to home
			 */ 
  			$urlRouterProvider.otherwise("/app/about");

  			/*
			 * Setup States
  			 */
  			 $stateProvider
  			 	.state("app", {
			      url: "/app",
			      templateUrl: "partials/app.html",
			      controller: "AppCtrl"
			    })
			    .state("app.about", {
			      url: "/about",
			      templateUrl: "partials/about.html",
			    })
			    .state("app.portfolio", {
			    	url: "/portfolio",
			    	templateUrl: "partials/portfolio.html",
			    	controller : "PortfolioCtrl"
			    })
			    .state("app.projects", {
			    	url: "/projects",
			    	templateUrl: "partials/projects.html",
			    	controller: "ProjectsCtrl"
			    })
			    .state("app.connect", {
			    	url: "/connect",
			    	templateUrl: "partials/connect.html",
			    });
			    
	}])
}())