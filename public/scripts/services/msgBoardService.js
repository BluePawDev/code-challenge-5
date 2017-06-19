/* SERVICE: MessageBoardService*/
myApp.service('MessageBoardService', function($http) {

	var sv = this;

	// START displayMsgs
	sv.displayMsgs = function() {
		// START $http.get
		return $http.get('/').then(function(response) {
			sv.dispMsgs = response.data;
		}); // END $http.get
	}; // END displayMsgs

	// START postMsg
	sv.postMsg = function(message) {
		console.log('In postMsg function:', message);
		return $http.post('/msgs', message).then(function(response) {
			console.log('back from server');
		});
	}; // END postMsg
}); // END MessageBoardService
