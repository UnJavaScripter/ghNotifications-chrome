'use strict';
(function(){
	function urlFixer(){
		return function(input){
			var noApi = input.replace(/api\./g,'');
			var url = noApi;
			url = url.replace(/\/users\//g,'/')
			url = url.replace(/\/repos\//g,'/');
			return url;
		}
	}

	angular
		.module('ghNotifications')
			.filter('urlFixer', urlFixer);
})();

