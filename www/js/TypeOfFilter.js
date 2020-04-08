(function(){
	var app = angular.module("app");

	app.filter('getType', function() {
	  return function(obj) {
	    return typeof obj
	  };
	});
}())