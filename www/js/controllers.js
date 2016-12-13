angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.chats = Chats.all();
})

.controller('AccountCtrl', function($scope, Codes) {
  $scope.codes = Codes.all();
})

.controller('ItemCtrl', function($scope) {
})

.controller('AlolanCtrl', function($scope, Alolan) {
	$scope.alolans = Alolan.all();
})

.controller('AlolanDetailCtrl', function($scope, $stateParams, Alolan) {
  $scope.alolan = Alolan.get($stateParams.alolanId);
});