(function(){
	var app = angular.module("app");

	app.controller("AppCtrl", ["$rootScope", "$state", function($rootScope, $state){
		$rootScope.currentState = $state.current;

		$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
		    $rootScope.loading = true;
		});

		$rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
		    $rootScope.currentState = toState;
		    $rootScope.loading = false;
		});

		$rootScope.$on('$stateNotFound', function(e, toState, toParams, fromState, fromParams) {
		    $rootScope.loading = false;
		});

		$rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams) {
		    $rootScope.loading = false;
		});
		
	}])
}())