

angular.module('starter.controllers', ['chart.js'])

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate) {
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
  $scope.showAbility1 = function(chat){
    return chat.type[0] === $scope.chat.type[1] ||
    chat.type[1] === $scope.chat.type[1];
  };

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
    $scope.showEggGroup = function(n) {
      if(n==0){
        if($scope.chat.egg1)
          $scope.showModal('templates/popovers/egg_group1.html');
      }
      else{
        if($scope.chat.egg2)
          $scope.showModal('templates/popovers/egg_group2.html');
      }
    }
    $scope.showTypeGroup = function(n) {
      if(n==0){
          $scope.showModal('templates/popovers/type_group1.html');
      }
      else{
          $scope.showModal('templates/popovers/type_group2.html');
      }
    }

    $scope.showAbilities = function() {
      $scope.showModal('templates/popovers/table_abilities.html');
    }
    $scope.showTypeCalc = function() {
      $scope.showModal('templates/popovers/type_calculator.html');
    }
    $scope.showAbility = function(n) {
      if(n==0)
        $scope.showModal('templates/popovers/ability_popover1.html');
      else if(n==1)
        $scope.showModal('templates/popovers/ability_popover2.html');
      else
        $scope.showModal('templates/popovers/ability_popover3.html');
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
 
  var all_ability_names="Stench' 'Drizzle' 'Speed Boost' 'Battle Armor' 'Sturdy' 'Damp' 'Limber' 'Sand Veil' 'Static' 'Volt Absorb' 'Water Absorb' 'Oblivious' 'Cloud Nine' 'Compound Eyes' 'Insomnia' 'Color Change' 'Immunity' 'Flash Fire' 'Shield Dust' 'Own Tempo' 'Suction Cups' 'Intimidate' 'Shadow Tag' 'Rough Skin' 'Wonder Guard' 'Levitate' 'Effect Spore' 'Synchronize' 'Clear Body' 'Natural Cure' 'Lightning Rod' 'Serene Grace' 'Swift Swim' 'Chlorophyll' 'Illuminate' 'Trace' 'Huge Power' 'Poison Point' 'Inner Focus' 'Magma Armor' 'Water Veil' 'Magnet Pull' 'Soundproof' 'Rain Dish' 'Sand Stream' 'Pressure' 'Thick Fat' 'Early Bird' 'Flame Body' 'Run Away' 'Keen Eye' 'Hyper Cutter' 'Pickup' 'Truant' 'Hustle' 'Cute Charm' 'Plus' 'Minus' 'Forecast' 'Sticky Hold' 'Shed Skin' 'Guts' 'Marvel Scale' 'Liquid Ooze' 'Overgrow' 'Blaze' 'Torrent' 'Swarm' 'Rock Head' 'Drought' 'Arena Trap' 'Vital Spirit' 'White Smoke' 'Pure Power' 'Shell Armor' 'Air Lock' 'Tangled Feet' 'Motor Drive' 'Rivalry' 'Steadfast' 'Snow Cloak' 'Gluttony' 'Anger Point' 'Unburden' 'Heatproof' 'Simple' 'Dry Skin' 'Download' 'Iron Fist' 'Poison Heal' 'Adaptability' 'Skill Link' 'Hydration' 'Solar Power' 'Quick Feet' 'Normalize' 'Sniper' 'Magic Guard' 'No Guard' 'Stall' 'Technician' 'Leaf Guard' 'Klutz' 'Mold Breaker' 'Super Luck' 'Aftermath' 'Anticipation' 'Forewarn' 'Unaware' 'Tinted Lens' 'Filter' 'Slow Start' 'Scrappy' 'Storm Drain' 'Ice Body' 'Solid Rock' 'Snow Warning' 'Honey Gather' 'Frisk' 'Reckless' 'Multitype' 'Flower Gift' 'Bad Dreams' 'Pickpocket' 'Sheer Force' 'Contrary' 'Unnerve' 'Defiant' 'Defeatist' 'Cursed Body' 'Healer' 'Friend Guard' 'Weak Armor' 'Heavy Metal' 'Light Metal' 'Multiscale' 'Toxic Boost' 'Flare Boost' 'Harvest' 'Telepathy' 'Moody' 'Overcoat' 'Poison Touch' 'Regenerator' 'Big Pecks' 'Sand Rush' 'Wonder Skin' 'Analytic' 'Illusion' 'Imposter' 'Infiltrator' 'Mummy' 'Moxie' 'Justified' 'Rattled' 'Magic Bounce' 'Sap Sipper' 'Prankster' 'Sand Force' 'Iron Barbs' 'Zen Mode' 'Victory Star' 'Turboblaze' 'Teravolt' 'Aroma Veil' 'Flower Veil' 'Cheek Pouch' 'Protean' 'Fur Coat' 'Magician' 'Bulletproof' 'Competitive' 'Strong Jaw' 'Refrigerate' 'Sweet Veil' 'Stance Change' 'Gale Wings' 'Mega Launcher' 'Grass Pelt' 'Symbiosis' 'Tough Claws' 'Pixilate' 'Gooey' 'Aerilate' 'Parental Bond' 'Dark Aura' 'Fairy Aura' 'Aura Break' 'Primordial Sea' 'Desolate Land' 'Delta Stream' 'Stamina' 'Wimp Out' 'Emergency Exit' 'Water Compaction' 'Merciless' 'Shields Down' 'Stakeout' 'Water Bubble' 'Steelworker' 'Berserk' 'Slush Rush' 'Long Reach' 'Liquid Voice' 'Triage' 'Galvanize' 'Surge Surfer' 'Schooling' 'Disguise' 'Battle Bond' 'Power Construct' 'Corrosion' 'Comatose' 'Queenly Majesty' 'Innards Out' 'Dancer' 'Battery' 'Fluffy' 'Dazzling' 'Soul-Heart' 'Tangling Hair' 'Receiver' 'Power of Alchemy' 'Beast Boost' 'RKS System' 'Electric Surge' 'Psychic Surge' 'Misty Surge' 'Grassy Surge' 'Full Metal Body' 'Shadow Shield' 'Prism Armor".split("' '");
  var all_ability_descriptions="By releasing stench when attacking, this Pokemon may cause the target to flinch.' 'The Pokemon makes it rain when it enters a battle.' 'Its Speed stat is boosted every turn.' 'Hard armor protects the Pokemon from critical hits.' 'It cannot be knocked out with one hit. One-hit KO moves cannot knock it out, either.' 'Prevents the use of explosive moves such as Self-Destruct by dampening its surroundings.' 'Its limber body protects the Pokemon from paralysis.' 'Boosts the Pokemon's evasion in a sandstorm.' 'The Pokemon is charged with static electricity, so contact with it may cause paralysis.' 'Restores HP if hit by an Electric-type move, instead of taking damage.' 'Restores HP if hit by a Water-type move, instead of taking damage.' 'The Pokemon is oblivious, and that keeps it from being infatuated or falling for taunts.' 'Eliminates the effects of weather.' 'The Pokemon's compound eyes boost its accuracy.' 'The Pokemon is suffering from insomnia and cannot fall asleep.' 'The Pokemon's type becomes the type of the move used on it.' 'The immune system of the Pokemon prevents it from getting poisoned.' 'Powers up the Pokemon's Fire-type moves if itâ€™s hit by one.' 'This Pokemon's dust blocks the additional effects of attacks taken.' 'This Pokemon has its own tempo, and that prevents it from becoming confused.' 'This Pokemon uses suction cups to stay in one spot to negate all moves and items that force switching out.' 'The Pokemon intimidates opposing Pokemon upon entering battle, lowering their Attack stat.' 'This Pokemon steps on the opposing Pokemon's shadow to prevent it from escaping.' 'This Pokemon inflicts damage with its rough skin to the attacker on contact.' 'Its mysterious power only lets supereffective moves hit the Pokemon.' 'By floating in the air, the Pokemon receives full immunity to all Ground-type moves.' 'Contact with the Pokemon may inflict poison, sleep, or paralysis on its attacker.' 'The attacker will receive the same status condition if it inflicts a burn, poison, or paralysis to the Pokemon.' 'Prevents other Pokemon's moves or Abilities from lowering the Pokemon's stats.' 'All status conditions heal when the Pokemon switches out.' 'The Pokemon draws in all Electric-type moves. Instead of being hit by Electric-type moves, it boosts its Sp. Atk.' 'Boosts the likelihood of additional effects occurring when attacking.' 'Boosts the Pokemon's Speed stat in rain.' 'Boosts the Pokemon's Speed stat in sunshine.' 'Raises the likelihood of meeting wild Pokemon by illuminating the surroundings.' 'When it enters a battle, the Pokemon copies an opposing Pokemon's Ability.' 'Doubles the Pokemon's Attack stat.' 'Contact with the Pokemon may poison the attacker.' 'The Pokemon's intensely focused, and that protects the Pokemon from flinching.' 'The Pokemon is covered with hot magma, which prevents the Pokemon from becoming frozen.' 'The Pokemon is covered with a water veil, which prevents the Pokemon from getting a burn.' 'Prevents Steel-type Pokemon from escaping using its magnetic force.' 'Soundproofing of the Pokemon itself gives full immunity to all sound-based moves.' 'The Pokemon gradually regains HP in rain.' 'The Pokemon summons a sandstorm when it enters a battle.' 'By putting pressure on the opposing Pokemon, it raises their PP usage.' 'The Pokemon is protected by a layer of thick fat, which halves the damage taken from Fire- and Ice-type moves.' 'The Pokemon awakens twice as fast as other Pokemon from sleep.' 'Contact with the Pokemon may burn the attacker.' 'Enables a sure getaway from wild Pokemon.' 'Keen eyes prevent other Pokemon from lowering this Pokemon's accuracy.' 'The Pokemon's proud of its powerful pincers. They prevent other Pokemon from lowering its Attack stat.' 'The Pokemon may pick up the item an opposing Pokemon used during a battle. It may pick up items outside of battle, too.' 'The Pokemon canâ€™t use a move the following turn if it uses one.' 'Boosts the Attack stat, but lowers accuracy.' 'Contact with the Pokemon may cause infatuation.' 'Boosts the Sp. Atk stat of the Pokemon if an ally with the Plus or Minus Ability is also in battle.' 'Boosts the Sp. Atk stat of the Pokemon if an ally with the Plus or Minus Ability is also in battle.' 'The Pokemon transforms with the weather to change its type to Water, Fire, or Ice.' 'Items held by the Pokemon are stuck fast and cannot be removed by other Pokemon.' 'The Pokemon may heal its own status conditions by shedding its skin.' 'Itâ€™s so gutsy that having a status condition boosts the Pokemon's Attack stat.' 'The Pokemon's marvelous scales boost the Defense stat if it has a status condition.' 'Oozed liquid has strong stench, which damages attackers using any draining move.' 'Powers up Grass-type moves when the Pokemon's HP is low.' 'Powers up Fire-type moves when the Pokemon's HP is low.' 'Powers up Water-type moves when the Pokemon's HP is low.' 'Powers up Bug-type moves when the Pokemon's HP is low.' 'Protects the Pokemon from recoil damage.' 'Turns the sunlight harsh when the Pokemon enters a battle.' 'Prevents opposing Pokemon from fleeing.' 'The Pokemon is full of vitality, and that prevents it from falling asleep.' 'The Pokemon is protected by its white smoke, which prevents other Pokemon from lowering its stats.' 'Using its pure power, the Pokemon doubles its Attack stat.' 'A hard shell protects the Pokemon from critical hits.' 'Eliminates the effects of weather.' 'Raises evasion if the Pokemon is confused.' 'Boosts its Speed stat if hit by an Electric-type move, instead of taking damage.' 'Becomes competitive and deals more damage to Pokemon of the same gender, but deals less to Pokemon of the opposite gender.' 'The Pokemon's determination boosts the Speed stat each time the Pokemon flinches.' 'Boosts evasion in a hailstorm.' 'Makes the Pokemon eat a held Berry when its HP drops to half or less, which is sooner than usual.' 'The Pokemon is angered when it takes a critical hit, and that maxes its Attack stat.' 'Boosts the Speed stat if the Pokemon's held item is used or lost.' 'The heatproof body of the Pokemon halves the damage from Fire-type moves that hit it.' 'The stat changes the Pokemon receives are doubled.' 'Restores HP in rain or when hit by Water-type moves. Reduces HP in sunshine, and increases the damage received from Fire-type moves.' 'Compares an opposing Pokemon's Defense and Sp. Def stats before raising its own Attack or Sp. Atk stat0whichever will be more effective.' 'Powers up punching moves.' 'Restores HP if the Pokemon is poisoned, instead of losing HP.' 'Powers up moves of the same type as the Pokemon.' 'Maximizes the number of times multi-strike moves hit.' 'Heals status conditions if itâ€™s raining.' 'Boosts the Sp. Atk stat in sunny weather, but HP decreases every turn.' 'Boosts the Speed stat if the Pokemon has a status condition.' 'All the Pokemon's moves become Normal type. The power of those moves is boosted a little.' 'Powers up moves if they become critical hits when attacking.' 'The Pokemon only takes damage from attacks.' 'The Pokemon employs no-guard tactics to ensure incoming and outgoing attacks always land.' 'The Pokemon moves after all other Pokemon do.' 'Powers up the Pokemon's weaker moves.' 'Prevents status conditions in sunny weather.' 'The Pokemon canâ€™t use any held items.' 'Moves can be used on the target regardless of its Abilities.' 'The Pokemon is so lucky that the critical-hit ratios of its moves are boosted.' 'Damages the attacker if it contacts the Pokemon with a finishing hit.' 'The Pokemon can sense an opposing Pokemon's dangerous moves.' 'When it enters a battle, the Pokemon can tell one of the moves an opposing Pokemon has.' 'When attacking, the Pokemon ignores the target Pokemon's stat changes.' 'The Pokemon can use â€œnot very effectiveâ€ moves to deal regular damage.' 'Reduces the power of supereffective attacks taken.' 'For five turns, the Pokemon's Attack and Speed stats are halved.' 'The Pokemon can hit Ghost-type Pokemon with Normal- and Fighting-type moves.' 'Draws in all Water-type moves. Instead of being hit by Water-type moves, it boosts its Sp. Atk.' 'The Pokemon gradually regains HP in a hailstorm.' 'Reduces the power of supereffective attacks taken.' 'The Pokemon summons a hailstorm when it enters a battle.' 'The Pokemon may gather Honey after a battle.' 'When it enters a battle, the Pokemon can check an opposing Pokemon's held item.' 'Powers up moves that have recoil damage.' 'Changes the Pokemon's type to match the Plate or Z-Crystal it holds.' 'Boosts the Attack and Sp. Def stats of itself and allies when it is sunny.' 'Reduces the HP of sleeping opposing Pokemon.' 'Steals an item from an attacker that made direct contact.' 'Removes additional effects to increase the power of moves when attacking.' 'Makes stat changes have an opposite effect.' 'Unnerves opposing Pokemon and makes them unable to eat Berries.' 'Boosts the Pokemon's Attack stat sharply when its stats are lowered.' 'Halves the Pokemon's Attack and Sp. Atk stats when its HP becomes half or less.' 'May disable a move used on the Pokemon.' 'Sometimes heals an allyâ€™s status condition.' 'Reduces damage done to allies.' 'Physical attacks to the Pokemon lower its Defense stat but sharply raise its Speed stat.' 'Doubles the Pokemon's weight.' 'Halves the Pokemon's weight.' 'Reduces the amount of damage the Pokemon takes when its HP is full.' 'Powers up physical attacks when the Pokemon is poisoned.' 'Powers up special attacks when the Pokemon is burned.' 'May create another Berry after one is used.' 'Anticipates an allyâ€™s attack and dodges it.' 'Raises one stat sharply and lowers another every turn.' 'Protects the Pokemon from things like sand, hail, and powder.' 'May poison a target when the Pokemon makes contact.' 'Restores a little HP when withdrawn from battle.' 'Protects the Pokemon from Defense-lowering effects.' 'Boosts the Pokemon's Speed stat in a sandstorm.' 'Makes status moves more likely to miss.' 'Boosts move power when the Pokemon moves last.' 'Comes out disguised as the Pokemon in the partyâ€™s last spot.' 'The Pokemon transforms itself into the Pokemon itâ€™s facing.' 'Passes through the opposing Pokemon's barrier, substitute, and the like and strikes.' 'Contact with the Pokemon changes the attackerâ€™s Ability to Mummy.' 'The Pokemon shows moxie, and that boosts the Attack stat after knocking out any Pokemon.' 'Being hit by a Dark-type move boosts the Attack stat of the Pokemon, for justice.' 'Dark-, Ghost-, and Bug-type moves scare the Pokemon and boost its Speed stat.' 'Reflects status moves, instead of getting hit by them.' 'Boosts the Attack stat if hit by a Grass-type move, instead of taking damage.' 'Gives priority to a status move.' 'Boosts the power of Rock-, Ground-, and Steel-type moves in a sandstorm.' 'Inflicts damage to the attacker on contact with iron barbs.' 'Changes the Pokemon's shape when HP is half or less.' 'Boosts the accuracy of its allies and itself.' 'Moves can be used on the target regardless of its Abilities.' 'Moves can be used on the target regardless of its Abilities.' 'Protects itself and its allies from attacks that limit their move choices.' 'Ally Grass-type Pokemon are protected from status conditions and the lowering of their stats.' 'Restores HP as well when the Pokemon eats a Berry.' 'Changes the Pokemon's type to the type of the move itâ€™s about to use.' 'Halves the damage from physical moves.' 'The Pokemon steals the held item of a Pokemon it hits with a move.' 'Protects the Pokemon from some ball and bomb moves.' 'Boosts the Sp. Atk stat sharply when a stat is lowered.' 'The Pokemon's strong jaw boosts the power of its biting moves.' 'Normal-type moves become Ice-type moves. The power of those moves is boosted a little.' 'Prevents itself and ally Pokemon from falling asleep.' 'The Pokemon changes its form to Blade Forme when it uses an attack move, and changes to Shield Forme when it uses Kingâ€™s Shield.' 'Gives priority to Flying-type moves when the Pokemon's HP is full.' 'Powers up aura and pulse moves.' 'Boosts the Pokemon's Defense stat in Grassy Terrain.' 'The Pokemon passes its item to an ally that has used up an item.' 'Powers up moves that make direct contact.' 'Normal-type moves become Fairy-type moves. The power of those moves is boosted a little.' 'Contact with the Pokemon lowers the attackerâ€™s Speed stat.' 'Normal-type moves become Flying-type moves. The power of those moves is boosted a little.' 'Parent and child each attacks.' 'Powers up each Pokemon's Dark-type moves.' 'Powers up each Pokemon's Fairy-type moves.' 'The effects of â€œAuraâ€ Abilities are reversed to lower the power of affected moves.' 'The Pokemon changes the weather to nullify Fire-type attacks.' 'The Pokemon changes the weather to nullify Water-type attacks.' 'The Pokemon changes the weather to eliminate all of the Flying typeâ€™s weaknesses.' 'Boosts the Defense stat when hit by an attack.' 'The Pokemon cowardly switches out when its HP becomes half or less.' 'The Pokemon, sensing danger, switches out when its HP becomes half or less.' 'Boosts the Pokemon's Defense stat sharply when hit by a Water-type move.' 'The Pokemon's attacks become critical hits if the target is poisoned.' 'When its HP becomes half or less, the Pokemon's shell breaks and it becomes aggressive.' 'Doubles the damage dealt to the targetâ€™s replacement if the target switches out.' 'Lowers the power of Fire-type moves done to the Pokemon and prevents the Pokemon from getting a burn.' 'Powers up Steel-type moves.' 'Boosts the Pokemon's Sp. Atk stat when it takes a hit that causes its HP to become half or less.' 'Boosts the Pokemon's Speed stat in a hailstorm.' 'The Pokemon uses its moves without making contact with the target.' 'All sound-based moves become Water-type moves.' 'Gives priority to a healing move.' 'Normal-type moves become Electric-type moves. The power of those moves is boosted a little.' 'Doubles the Pokemon's Speed stat on Electric Terrain.' 'When it has a lot of HP, the Pokemon forms a powerful school. It stops schooling when its HP is low.' 'Once per battle, the shroud that covers the Pokemon can protect it from an attack.' 'Defeating an opposing Pokemon strengthens the Pokemon's bond with its Trainer, and it becomes Ash-Greninja. Water Shuriken gets more powerful.' 'Other Cells gather to aid when its HP becomes half or less. Then the Pokemon changes its form to Complete Forme.' 'The Pokemon can poison the target even if itâ€™s a Steel or Poison type.' 'Itâ€™s always drowsing and will never wake up. It can attack without waking up.' 'Its majesty pressures the opposing Pokemon, making it unable to attack using priority moves.' 'Damages the attacker landing the finishing hit by the amount equal to its last HP.' 'When another Pokemon uses a dance move, it can use a dance move following it regardless of its Speed.' 'Powers up ally Pokemon's special moves.' 'Halves the damage taken from moves that make direct contact, but doubles that of Fire-type moves.' 'Surprises the opposing Pokemon, making it unable to attack using priority moves.' 'Boosts its Sp. Atk stat every time a Pokemon faints.' 'Contact with the Pokemon lowers the attackerâ€™s Speed stat.' 'The Pokemon copies the Ability of a defeated ally.' 'The Pokemon copies the Ability of a defeated ally.' 'The Pokemon boosts its most proficient stat each time it knocks out a Pokemon.' 'Changes the Pokemon's type to match the memory disc it holds.' 'Turns the ground into Electric Terrain when the Pokemon enters a battle.' 'Turns the ground into Psychic Terrain when the Pokemon enters a battle.' 'Turns the ground into Misty Terrain when the Pokemon enters a battle.' 'Turns the ground into Grassy Terrain when the Pokemon enters a battle.' 'Prevents other Pokemon's moves or Abilities from lowering the Pokemon's stats.' 'Reduces the amount of damage the Pokemon takes while its HP is full.' 'Reduces the power of supereffective attacks taken".split("' '");
  $scope.abilities =[];


  var temp_pokemon=[];

  // Finds all pokemon with this ability
  for (var index=0; index<all_ability_names.length-1; index++){
    for(var i=0; i<$scope.chats.length-1; i++)
    {
      if($scope.chats[i].abil1== all_ability_names[index])
      {
        temp_pokemon.push($scope.chats[i].name[0]);
        //console.log(1,$scope.chats[i].name,all_ability_names[index]);
      }
      else if($scope.chats[i].abil2== all_ability_names[index])
      {
        temp_pokemon.push($scope.chats[i].name[0]);
        //console.log(2,$scope.chats[i].name,all_ability_names[index]);
      }
      else if($scope.chats[i].abil3== all_ability_names[index])
      {
        temp_pokemon.push($scope.chats[i].name[0]);
        //console.log(3,$scope.chats[i].name,all_ability_names[index]);
      }
    }
    // Ability table
    $scope.abilities.push({
      name: all_ability_names[index],
      description: all_ability_descriptions[index],
      poke_with_abil: temp_pokemon
    });

    temp_pokemon=[];
  }



})

.controller('ItemCtrl', function($scope, $ionicModal) {

  $scope.size=75;
  var pokeball_names=["Beast Ball","Cherish Ball","Dive Ball","Dusk Ball","Fast Ball","Friend Ball","Great Ball","Heal Ball","Heavy Ball","Level Ball","Love Ball","Lure Ball","Luxury Ball","Master Ball","Moon Ball","Nest Ball","Net Ball","Poke Ball","Premier Ball","Quick Ball","Repeat Ball","Timer Ball","Ultra Ball"];
  var poke_effect=["A special Poké Ball designed to catch Ultra Beasts. It has a low success rate for catching others.","A quite rare Poké Ball that has been crafted in order to commemorate a special occasion of some sort.","A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater.",,,,"A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.",,,,"A Poké Ball that makes it easier to catch Pokémon that are usually very quick to run away.","A strange Poké Ball that will make the wild Pokémon caught with it more friendly toward you immediately.","A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball.",,,,,"A remedial Poké Ball that restores the HP of a Pokémon caught with it and eliminates any status conditions.",,,,"A Poké Ball that is better than usual at catching very heavy Pokémon.","A Poké Ball that makes it easier to catch Pokémon that are at a lower level than your own Pokémon.","A Poké Ball that works best when catching a Pokémon that is of the opposite gender of your Pokémon.","A Poké Ball that is good for catching Pokémon that you reel in with a Rod while out fishing.","A particularly comfortable Poké Ball that makes a wild Pokémon quickly grow friendlier after being caught.",,,,"The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.",,"A Poké Ball that will make it easier to catch Pokémon that can evolve using a Moon Stone.","A somewhat different Poké Ball that becomes more effective the lower the level of the wild Pokémon.",,,,"A somewhat different Poké Ball that is more effective when attempting to catch Water- or Bug-type Pokémon.",,,,"A device for catching wild Pokémon. It’s thrown like a ball at a Pokémon, comfortably encapsulating its target.",,,,"A somewhat rare Poké Ball that was made as a commemorative item used to celebrate an event of some sort.","A somewhat different Poké Ball that has a more successful catch rate if used at the start of a wild encounter.",,,,"A somewhat different Poké Ball that works especially well on a Pokémon species that has been caught before.",,,,"A somewhat different Poké Ball that becomes progressively more effective the more turns that are taken in battle.",,,,"An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball."];
  var poke_locations=["Route 2, Route 8, Route 13, Aether Paradise, Seafolk Village",,"Route 8, Route 15, Brooklet Hill, Hano Beach, Kala'e Bay","Festival Plaza","Shop","Route 8","Route 14, Diglett's Tunnel, Memorial Hill, Vast Poni Canyon","Festival Plaza","Shop","Route 8","Mount Hokulani","Malie City","Route 1, Route 1, Route 4, Hau'oli Cemetery, Hau'oli City, Melemele Meadow, Ten Carat Hill, Verdant Cavern","Festival Plaza","PickUp Item","Shop","Route 1, Route 2, Route 5, Route 8, Route 16, Hau'oli City, Heahea City, Konikoni City, Malie City, Mount Hokulani, Paniola Town, Pokemon League, Royal Avenue, Royal Avenue, Seafolk Village, Tapu Village","Route 2, Route 3, Hau'oli City, Paniola Ranch, Seaward Cave","Festival Plaza","Shop","Route 2, Royal Avenue","Mount Hokulani","Mount Hokulani","Malie City","Blush Mountain","Route 15, Malie Garden","Festival Plaza","Shop","Route 2","Aether Paradise, Hau'oli City","Festival Plaza","Mount Hokulani","Route 1, Route 2, Route 3, Lush Jungle","Festival Plaza","Shop","Route 2, Royal Avenue","Route 7, Route 9, Brooklet Hill, Kala'e Bay, Melemele Meadow","Festival Plaza","Shop","Paniola Town","Route 1, Route 1, Hau'oli City","Festival Plaza","Shop","Route 1, Route 2, Route 5, Route 8, Route 16, Hau'oli City, Heahea City, Konikoni City, Malie City, Mount Hokulani, Paniola Town, Pokemon League, Royal Avenue, Royal Avenue, Seafolk Village, Tapu Village",,"Route 11, Paniola Town, Wela Volcano Park","Festival Plaza","Shop","Route 8","Poni Wilds, Ula'ula Meadow","Festival Plaza","Shop","Paniola Town","Blush Mountain","Festival Plaza","Shop","Paniola Town, Royal Avenue","Route 8, Hau'oli City, Royal Avenue, Tapu Village","Festival Plaza","PickUp Item","Shop","Route 1, Route 2, Route 5, Route 8, Route 16, Hau'oli City, Heahea City, Konikoni City, Malie City, Mount Hokulani, Paniola Town, Pokemon League, Royal Avenue, Seafolk Village, Tapu Village"];

  $scope.pokeballs =[];
  var reg = /^[a-z]+$/i;

  for (var index=0; index<pokeball_names.length; index++){
    var ball_name = pokeball_names[index].toLowerCase().replace(/ /g,'');
    //console.log(ball_name);

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