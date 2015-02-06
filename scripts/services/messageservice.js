(function() {
    'use strict';

    angular.module('chattyApp')
        .factory('MessageService', function MessageService($http) {
            return {
                getMessages: function() {
                    return $http.get('http://localhost:9901')
                        .then(function(response) {
                            return response.data;
                        });
                },
                postMessage: function(message){
                	return $http.post('http://localhost:9901', {text: message})
                		.then(function(response){
                			return response.data;
                		});
                }
            };
        });

})();
