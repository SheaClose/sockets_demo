angular.module('app', []).controller('ctrl', function($scope, $timeout) {
  var socket = io();
  $scope.messages = [];

  $scope.submit = function(msg, user) {
    socket.emit('chat message', msg, user);
    $scope.inputMessage = '';
  };
  socket.on('chat message', function(msg, user) {
    $timeout(function() {
      $scope.messages.push({ msg, user });
    });
  });
});
