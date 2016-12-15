

angular.module('starter.controllers', ['chart.js'])

.controller('DashCtrl', function($scope, $ionicLoading) {
})

.controller('ChatsCtrl', function($scope, Chats, $ionicLoading) {
  $scope.chats = Chats.all();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicLoading, $ionicPopover, $ionicPopup,  $ionicModal) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.chats = Chats.all();

  // Filter Eggs
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
      '<p class = "title">{{chat.egg1}} Egg Group</p>' +
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
      scope: $scope,
      animation: $scope.animation
   });
   $scope.type2_popover = $ionicPopover.fromTemplate(type_template_2, {
      scope: $scope,
      animation: $scope.animation
   });
   $scope.egg1_popover = $ionicPopover.fromTemplate(egg_template_1, {
      scope: $scope,
      animation: $scope.animation
   });
   $scope.egg2_popover = $ionicPopover.fromTemplate(egg_template_2, {
      scope: $scope,
      animation: $scope.animation
   });

   $scope.animation='slide-in-up';

   $scope.openTypePopover = function(n,$event) {

      if(n==0){
        if($scope.chat.type[0])
          $scope.type1_popover.show($event);
      }
      else{
        if($scope.chat.type[1])
          $scope.type2_popover.show($event);
      }
   };

   $scope.closeTypePopover = function($event) {
      $scope.type1_popover.hide($event);
      $scope.type2_popover.hide($event);
   };

   $scope.openEggPopover = function(n,$event) {
      if(n==0){
        if($scope.chat.egg1)
          $scope.egg1_popover.show($event);
      }
      else{
        if($scope.chat.egg2)
          $scope.egg2_popover.show($event);
      }
   };

   $scope.closeTypePopover = function($event) {
      $scope.egg1_popover.hide($event);
      $scope.egg1_popover.hide($event);
   };

   $scope.openNaturePopover = function($event) {
      $scope.nature_popover.show($event);
   };

   $scope.closeNaturePopover = function($event) {
      $scope.nature_popover.hide($event);
   };
   $scope.openEggGroupPopover = function($event) {
      $scope.egg_groups_popover.show($event);
   };

   $scope.closeEggGroupPopover = function($event) {
      $scope.egg_groups_popover.hide($event);
   };

    $scope.showInfoEggGroups = function() {
      $scope.showModal('templates/popovers/egg_groups.html');
    }
   
    $scope.showInfoTypes = function() {
      $scope.showModal('templates/popovers/type_chart.html');
    }

    $scope.showNatures = function() {
      $scope.showModal('templates/popovers/table_natures.html');
    }

    $scope.showBarGraph = function() {
      $scope.showModal('templates/popovers/graph_popover.html');
    }
    $scope.showIcon = function() {
      $scope.showModal('templates/popovers/icon_popover.html');
    }

    $scope.showModal = function(templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
    }
   
    // Close the modal
    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.modal.remove()
    };
   // Graph stuff
   $scope.graph = {};
  $scope.graph.data = [
    //Stats
    [$scope.chat.hp, $scope.chat.attack, $scope.chat.defense, $scope.chat.sp_a, $scope.chat.sp_d, $scope.chat.speed]
  ];
  $scope.graph.labels = ['HP', 'Attack', 'Defense', 'Sp.Attack', 'Sp.Defense','Speed'];
  $scope.graph.series = ['Stats'];

  // Natures
  $scope.natures = [];

  var l_name= "Adamant Bashful Bold Brave Calm Careful Docile Gentle Hardy Hasty Impish Jolly Lax Lonely Mild Modest Naive Naughty Quiet Quirky Rash Relaxed Sassy Serious Timid".split(" ");
  var l_increases ="Attack Sp.Attack Defense Attack Sp.Defense Sp.Defense Defense Sp.Defense Attack Speed Defense Speed Defense Attack Sp.Attack Sp.Attack Speed Attack Sp.Attack Sp.Defense Sp.Attack Defense Sp.Defense Speed Speed".split(" ");
  var l_decreases ="Sp.Attack Sp.Attack Attack Speed Attack Sp.Attack Defense Defense Attack Defense Sp.Attack Sp.Attack Sp.Defense Defense Defense Attack Sp.Defense Sp.Defense Speed Sp.Defense Sp.Defense Speed Speed Speed Attack".split(" ");
  
  // Nature table
  for (var index=0; index<l_name.length; index++){
    $scope.natures.push({
      name: l_name[index],
      increases: l_increases[index],
      decreases: l_decreases[index]
    });
  }
 
})

.controller('ItemCtrl', function($scope, $ionicModal) {

  var pokeball_names=["Beast Ball","Cherish Ball","Dive Ball","Dusk Ball","Fast Ball","Friend Ball","Great Ball","Heal Ball","Heavy Ball","Level Ball","Love Ball","Lure Ball","Luxury Ball","Master Ball","Moon Ball","Nest Ball","Net Ball","Poke Ball","Premier Ball","Quick Ball","Repeat Ball","Timer Ball","Ultra Ball"];
  var poke_effect=["A special Poké Ball designed to catch Ultra Beasts. It has a low success rate for catching others.","A quite rare Poké Ball that has been crafted in order to commemorate a special occasion of some sort.","A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater.",,,,"A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.",,,,"A Poké Ball that makes it easier to catch Pokémon that are usually very quick to run away.","A strange Poké Ball that will make the wild Pokémon caught with it more friendly toward you immediately.","A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball.",,,,,"A remedial Poké Ball that restores the HP of a Pokémon caught with it and eliminates any status conditions.",,,,"A Poké Ball that is better than usual at catching very heavy Pokémon.","A Poké Ball that makes it easier to catch Pokémon that are at a lower level than your own Pokémon.","A Poké Ball that works best when catching a Pokémon that is of the opposite gender of your Pokémon.","A Poké Ball that is good for catching Pokémon that you reel in with a Rod while out fishing.","A particularly comfortable Poké Ball that makes a wild Pokémon quickly grow friendlier after being caught.",,,,"The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.",,"A Poké Ball that will make it easier to catch Pokémon that can evolve using a Moon Stone.","A somewhat different Poké Ball that becomes more effective the lower the level of the wild Pokémon.",,,,"A somewhat different Poké Ball that is more effective when attempting to catch Water- or Bug-type Pokémon.",,,,"A device for catching wild Pokémon. It’s thrown like a ball at a Pokémon, comfortably encapsulating its target.",,,,"A somewhat rare Poké Ball that was made as a commemorative item used to celebrate an event of some sort.","A somewhat different Poké Ball that has a more successful catch rate if used at the start of a wild encounter.",,,,"A somewhat different Poké Ball that works especially well on a Pokémon species that has been caught before.",,,,"A somewhat different Poké Ball that becomes progressively more effective the more turns that are taken in battle.",,,,"An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball."];
  var poke_locations=["Route 2, Route 8, Route 13, Aether Paradise, Seafolk Village",,"Route 8, Route 15, Brooklet Hill, Hano Beach, Kala'e Bay","Festival Plaza","Shop","Route 8","Route 14, Diglett's Tunnel, Memorial Hill, Vast Poni Canyon","Festival Plaza","Shop","Route 8","Mount Hokulani","Malie City","Route 1, Route 1, Route 4, Hau'oli Cemetery, Hau'oli City, Melemele Meadow, Ten Carat Hill, Verdant Cavern","Festival Plaza","PickUp Item","Shop","Route 1, Route 2, Route 5, Route 8, Route 16, Hau'oli City, Heahea City, Konikoni City, Malie City, Mount Hokulani, Paniola Town, Pokemon League, Royal Avenue, Royal Avenue, Seafolk Village, Tapu Village","Route 2, Route 3, Hau'oli City, Paniola Ranch, Seaward Cave","Festival Plaza","Shop","Route 2, Royal Avenue","Mount Hokulani","Mount Hokulani","Malie City","Blush Mountain","Route 15, Malie Garden","Festival Plaza","Shop","Route 2","Aether Paradise, Hau'oli City","Festival Plaza","Mount Hokulani","Route 1, Route 2, Route 3, Lush Jungle","Festival Plaza","Shop","Route 2, Royal Avenue","Route 7, Route 9, Brooklet Hill, Kala'e Bay, Melemele Meadow","Festival Plaza","Shop","Paniola Town","Route 1, Route 1, Hau'oli City","Festival Plaza","Shop","Route 1, Route 2, Route 5, Route 8, Route 16, Hau'oli City, Heahea City, Konikoni City, Malie City, Mount Hokulani, Paniola Town, Pokemon League, Royal Avenue, Royal Avenue, Seafolk Village, Tapu Village",,"Route 11, Paniola Town, Wela Volcano Park","Festival Plaza","Shop","Route 8","Poni Wilds, Ula'ula Meadow","Festival Plaza","Shop","Paniola Town","Blush Mountain","Festival Plaza","Shop","Paniola Town, Royal Avenue","Route 8, Hau'oli City, Royal Avenue, Tapu Village","Festival Plaza","PickUp Item","Shop","Route 1, Route 2, Route 5, Route 8, Route 16, Hau'oli City, Heahea City, Konikoni City, Malie City, Mount Hokulani, Paniola Town, Pokemon League, Royal Avenue, Seafolk Village, Tapu Village"];

  $scope.pokeballs =[];
  var reg = /^[a-z]+$/i;

  for (var index=0; index<pokeball_names.length; index++){
    var ball_name = pokeball_names[index].toLowerCase().replace(/ /g,'');
    console.log(ball_name);

    $scope.pokeballs.push({
      name: pokeball_names[index],
      effect: poke_effect[index],
      location: poke_locations[index],
      icon: 'http://www.serebii.net/itemdex/sprites/'+ball_name+'.png'
    });
  }

});

//Manually imported the angular-chart.js library because no CDN hosted it.
!function(t){"use strict";"function"==typeof define&&define.amd?define(["angular","chart.js"],t):"object"==typeof exports?module.exports=t(require("angular"),require("chart.js")):t(angular,Chart)}(function(t,e){"use strict";function n(){var n={},r={Chart:e,getOptions:function(e){var r=e&&n[e]||{};return t.extend({},n,r)}};this.setOptions=function(e,r){return r?(n[e]=t.extend(n[e]||{},r),void 0):(r=e,n=t.extend(n,r),void 0)},this.$get=function(){return r}}function r(n){function r(t,e){return t&&e&&t.length&&e.length?Array.isArray(t[0])?t.length===e.length&&t[0].length===e[0].length:e.reduce(a,0)>0?t.length===e.length:!1:!1}function a(t,e){return t+e}function o(e,r,a){if(r.data&&r.data.length){r.getColour="function"==typeof r.getColour?r.getColour:l,r.colours=c(e,r);var o=a[0],u=o.getContext("2d"),s=Array.isArray(r.data[0])?g(r.labels,r.data,r.series||[],r.colours):p(r.labels,r.data,r.colours),f=t.extend({},n.getOptions(e),r.options),h=new n.Chart(u)[e](s,f);return r.$emit("create",h),["hover","click"].forEach(function(t){r[t]&&(o["click"===t?"onclick":"onmousemove"]=i(r,h,t))}),r.legend&&"false"!==r.legend&&v(a,h),h}}function i(t,e,n){return function(r){var a=e.getPointsAtEvent||e.getBarsAtEvent||e.getSegmentsAtEvent;if(a){var o=a.call(e,r);t[n](o,r),t.$apply()}}}function c(r,a){for(var o=t.copy(a.colours||n.getOptions(r).colours||e.defaults.global.colours);o.length<a.data.length;)o.push(a.getColour());return o.map(u)}function u(t){return"object"==typeof t&&null!==t?t:"string"==typeof t&&"#"===t[0]?s(d(t.substr(1))):l()}function l(){var t=[f(0,255),f(0,255),f(0,255)];return s(t)}function s(t){return{fillColor:h(t,.2),strokeColor:h(t,1),pointColor:h(t,1),pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:h(t,.8)}}function f(t,e){return Math.floor(Math.random()*(e-t+1))+t}function h(t,e){return"rgba("+t.concat(e).join(",")+")"}function d(t){var e=parseInt(t,16),n=e>>16&255,r=e>>8&255,a=255&e;return[n,r,a]}function g(e,n,r,a){return{labels:e,datasets:n.map(function(e,n){var o=t.copy(a[n]);return o.label=r[n],o.data=e,o})}}function p(t,e,n){return t.map(function(t,r){return{label:t,value:e[r],color:n[r].strokeColor,highlight:n[r].pointHighlightStroke}})}function v(t,e){var n=t.parent(),r=n.find("chart-legend"),a="<chart-legend>"+e.generateLegend()+"</chart-legend>";r.length?r.replaceWith(a):n.append(a)}function y(t,e,n){Array.isArray(n.data[0])?t.datasets.forEach(function(t,n){(t.points||t.bars).forEach(function(t,r){t.value=e[n][r]})}):t.segments.forEach(function(t,n){t.value=e[n]}),t.update(),n.$emit("update",t)}function C(t){return!t||Array.isArray(t)&&!t.length||"object"==typeof t&&!Object.keys(t).length}return function(e){return{restrict:"CA",scope:{data:"=",labels:"=",options:"=",series:"=",colours:"=?",getColour:"=?",chartType:"=",legend:"@",click:"=",hover:"="},link:function(n,a){function i(r,i){if(!C(r)&&!t.equals(r,i)){var u=e||n.chartType;u&&(c&&c.destroy(),c=o(u,n,a))}}var c,u=document.createElement("div");u.className="chart-container",a.replaceWith(u),u.appendChild(a[0]),"object"==typeof window.G_vmlCanvasManager&&null!==window.G_vmlCanvasManager&&"function"==typeof window.G_vmlCanvasManager.initElement&&window.G_vmlCanvasManager.initElement(a[0]),n.$watch("data",function(t,i){if(t&&t.length&&(!Array.isArray(t[0])||t[0].length)){var u=e||n.chartType;if(u){if(c){if(r(t,i))return y(c,t,n);c.destroy()}c=o(u,n,a)}}},!0),n.$watch("series",i,!0),n.$watch("labels",i,!0),n.$watch("options",i,!0),n.$watch("colours",i,!0),n.$watch("chartType",function(e,r){C(e)||t.equals(e,r)||(c&&c.destroy(),c=o(e,n,a))}),n.$on("$destroy",function(){c&&c.destroy()})}}}}e.defaults.global.responsive=!0,e.defaults.global.multiTooltipTemplate="<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>",e.defaults.global.colours=["#97BBCD","#DCDCDC","#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360"],t.module("chart.js",[]).provider("ChartJs",n).factory("ChartJsFactory",["ChartJs",r]).directive("chartBase",["ChartJsFactory",function(t){return new t}]).directive("chartLine",["ChartJsFactory",function(t){return new t("Line")}]).directive("chartBar",["ChartJsFactory",function(t){return new t("Bar")}]).directive("chartRadar",["ChartJsFactory",function(t){return new t("Radar")}]).directive("chartDoughnut",["ChartJsFactory",function(t){return new t("Doughnut")}]).directive("chartPie",["ChartJsFactory",function(t){return new t("Pie")}]).directive("chartPolarArea",["ChartJsFactory",function(t){return new t("PolarArea")}])});
//# sourceMappingURL=angular-chart.min.js.map