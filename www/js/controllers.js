

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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicLoading, $ionicPopover) {
  $scope.chat = Chats.get($stateParams.chatId);
  $ionicLoading.show({
      template: 'Loading '+$scope.chat.name+'...</p><ion-spinner icon="android"></ion-spinner>',
      duration: 1000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  $scope.chats = Chats.all();

  $scope.showEggs = function(chat){
    if($scope.chat.egg1 != 'Undiscovered')
    {
      if($scope.chat.egg2!= '')
      {
        return chat.egg1 === $scope.chat.egg1 || 
        chat.egg1 === $scope.chat.egg2 || 
        chat.egg2 === $scope.chat.egg1 ||
        chat.egg2 === $scope.chat.egg2  ;
      }
      else{
        return chat.egg1 === $scope.chat.egg1 ||
        chat.egg2 === $scope.chat.egg1;
      }
    }
  };
  $scope.showEgg1 = function(chat){
    return chat.egg1 === $scope.chat.egg1 ||
    chat.egg2 === $scope.chat.egg1;
  };
  $scope.showEgg2 = function(chat){
    return chat.egg1 === $scope.chat.egg2 ||
    chat.egg2 === $scope.chat.egg2;
  };
  $scope.showType1 = function(chat){
    return chat.type[0] === $scope.chat.type[0] ||
    chat.type[1] === $scope.chat.type[0];
  };
  $scope.showType2 = function(chat){
    return chat.type[0] === $scope.chat.type[1] ||
    chat.type[1] === $scope.chat.type[1];
  };

   var egg_template_1 = '<ion-popover-view>' + '<ion-header-bar>' +
      '<h1 class = "title">{{chat.egg1}} Egg Group</h1>' +
      '</ion-header-bar>'+ '<ion-content>' +
      '<img class = "padding" ng-src="{{chet.reg_sprite[0]}}" ng-repeat="chet in chats | filter: showEgg1">'+
      '</ion-content>' + '</ion-popover-view>';
   var egg_template_2 = '<ion-popover-view>' + '<ion-header-bar>' +
      '<h1 class = "title">{{chat.egg2}} Egg Group</h1>' +
      '</ion-header-bar>'+ '<ion-content>' +
      '<img class = "padding" ng-src="{{chet.reg_sprite[0]}}" ng-repeat="chet in chats | filter: showEgg2">'+
      '</ion-content>' + '</ion-popover-view>';
   var type_template_1 = '<ion-popover-view>' + '<ion-header-bar>' +
      '<h1 class = "capitalize title">{{chat.type[0]}} types</h1>' +
      '</ion-header-bar>'+ '<ion-content>' +
      '<img class = "padding" ng-src="{{chet.reg_sprite[0]}}" ng-repeat="chet in chats | filter: showType1">'+
      '</ion-content>' + '</ion-popover-view>';
   var type_template_2 = '<ion-popover-view>' + '<ion-header-bar>' +
      '<h1 class = "capitalize title">{{chat.type[1]}} types</h1>' +
      '</ion-header-bar>'+ '<ion-content>' +
      '<img class = "padding" ng-src="{{chet.reg_sprite[0]}}" ng-repeat="chet in chats | filter: showType2">'+
      '</ion-content>' + '</ion-popover-view>';

   $scope.type1_popover = $ionicPopover.fromTemplate(type_template_1, {
      scope: $scope
   });
   $scope.type2_popover = $ionicPopover.fromTemplate(type_template_2, {
      scope: $scope
   });
   $scope.egg1_popover = $ionicPopover.fromTemplate(egg_template_1, {
      scope: $scope
   });
   $scope.egg2_popover = $ionicPopover.fromTemplate(egg_template_2, {
      scope: $scope
   });

   $scope.openTypePopover = function(n, $event) {
      if(n==0)
        $scope.type1_popover.show($event);
      else
        $scope.type2_popover.show($event);
   };

   $scope.closeTypePopover = function() {
      $scope.type1_popover.hide();
      $scope.type2_popover.hide();
   };

   $scope.openEggPopover = function(n, $event) {
      if(n==0)
        $scope.egg1_popover.show($event);
      else
        $scope.egg2_popover.show($event);
   };

   $scope.closeTypePopover = function() {
      $scope.egg1_popover.hide();
      $scope.egg1_popover.hide();
   };

   $scope.$on('$destroy', function() {
      $scope.type1_popover.remove();
   });
   $scope.$on('$destroy', function() {
      $scope.type2_popover.remove();
   });
   $scope.$on('$destroy', function() {
      $scope.egg1_popover.remove();
   });
   $scope.$on('$destroy', function() {
      $scope.egg2_popover.remove();
   });

   $scope.$on('type1_popover.hidden', function() {
      // Execute action
   });

   $scope.$on('type1_popover.removed', function() {
      // Execute action
   });
   $scope.$on('type2_popover.hidden', function() {
      // Execute action
   });

   $scope.$on('type2_popover.removed', function() {
      // Execute action
   });
   $scope.$on('egg1_popover.hidden', function() {
      // Execute action
   });

   $scope.$on('egg1_popover.removed', function() {
      // Execute action
   });
   $scope.$on('egg2_popover.hidden', function() {
      // Execute action
   });

   $scope.$on('egg2_popover.removed', function() {
      // Execute action
   });
  
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