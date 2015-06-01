'use strict';
(function(){
	function main_Ctrl($rootScope, $filter, ghData_Factory){
		var vm = this;
		vm.loading = false;
		
		//temp
		vm.showLogin = true;

		vm.doLogin = function(data){
			vm.loading = true;
			var notificationsRequest = ghData_Factory.notifications(data.name, data.pass);
			notificationsRequest.then(function(response){

				console.log(response.response)
				vm.events = response.response;
				vm.loading = false;

				//temp
				vm.showLogin = false;
			})
			.catch(function(){
				vm.loading = false;	

				//temp
				vm.showLogin = true;
			})
		}

		vm.open = function(url){
			window.open($filter('urlFixer')(url),'_blank')
		}

		


	}

	angular
		.module('ghNotifications')
			.controller('main_Ctrl', main_Ctrl);
})();

