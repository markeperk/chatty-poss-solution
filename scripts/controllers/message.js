(function() {
    'use strict';

    angular.module('chattyApp')
        .controller('MessageCtrl', function($scope, MessageService) {
            $scope.messages = [];
            $scope.getMessages = function() {
                MessageService.getMessages()
                    .then(function(data) {
                        $scope.messages = data;
                    });
            };
            $scope.getMessages();

            $scope.addMessage = function() {
                MessageService.postMessage($scope.newMessage)
                    .then(function(data) {
                        $scope.messages = data;
                        $scope.newMessage = '';
                    });
            };
        });
})();
