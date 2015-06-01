'use strict';
(function(){
	function issueComment(){
		return function(input){
			return input.match(/.+/i).toString();

		}
	}

	angular
		.module('ghNotifications')
			.filter('issueComment', issueComment);
})();

