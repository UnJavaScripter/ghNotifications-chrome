'use strict';
(function(){
	function ghData_Factory($http, $q, $log){
		
		var ghData_Factory = {};

		ghData_Factory.notifications = function(userName, pass){
			var deferred = $q.defer();
			var authObj = 'Basic ' + window.btoa(userName+':'+pass);
			$http({
					method: 'GET',
					url: 'https://api.github.com/users/'+userName+'/received_events',
					headers: {
					   'Authorization': authObj
					 },
				})
				.success(function(data){
					deferred.resolve({
						response: data
					});
				})
				.error(function(msg, code){
					deferred.reject(msg);
					$log.error(msg, code);
				})
				return deferred.promise;
		}

		return ghData_Factory;
	}

	angular
		.module('ghNotifications')
			.factory('ghData_Factory', ghData_Factory);
})();
