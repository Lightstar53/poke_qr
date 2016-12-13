

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading) {
  $ionicLoading.show({
      template: 'Home...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 1000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
})

.controller('ChatsCtrl', function($scope, Chats, $ionicLoading) {
  $ionicLoading.show({
      template: 'Loading Gen 7 Pokemon...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 1000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  $scope.chats = Chats.all();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicLoading) {
  $scope.chat = Chats.get($stateParams.chatId);
  $ionicLoading.show({
      template: 'Loading '+$scope.chat.name+'...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 1000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  $scope.chats = Chats.all();
  
})

.controller('ItemCtrl', function($scope, $ionicLoading) {
   $ionicLoading.show({
      template: 'Loading Items...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 2000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

})

.controller('AlolanCtrl', function($scope, Alolan, $ionicLoading) {
   $ionicLoading.show({
      template: 'Loading Alolan Pokemon...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 1000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
	$scope.alolans = Alolan.all();
})

.controller('AlolanDetailCtrl', function($scope, $stateParams, Alolan, $ionicLoading) {
  $scope.alolan = Alolan.get($stateParams.alolanId);
   $ionicLoading.show({
      template: 'Loading '+$scope.alolan.name+'...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 700
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

})

.controller('NationalCtrl', function($scope, National, $ionicLoading) {
  $ionicLoading.show({
      template: 'Loading National Pokedex...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 2000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
	$scope.nationals = National.all();
})

.controller('NationalDetailCtrl', function($scope, $stateParams, National, $ionicLoading) {
  $scope.national = National.get($stateParams.nationalId);

  $ionicLoading.show({
      template: 'Loading '+$scope.national.name+'...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 700
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  $scope.nationals = National.all();
});