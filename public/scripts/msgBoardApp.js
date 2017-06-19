/* ANGULARJS APP */
var myApp = angular.module('myApp', []);

// START CONTROLLER: MessageBoardController
myApp.controller('MessageBoardController', function(MessageBoardService) {

	var vm = this;

	vm.submit = function() {
		var message = {
			name: vm.userName,
			msg: vm.txtMsg
		};
		MessageBoardService.postMsg(message);
		vm.dispMsgs;
	};


}); // END CONTROLLER: MessageBoardController
