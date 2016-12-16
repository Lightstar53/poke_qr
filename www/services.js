angular.module('starter.services', [])

.factory('Chats', function() {

  /*
  *  Only newest pokemon filter
  */ 
  
  // National pokedex number
  var idnum = 1;
  var pokenum = 722;

  // All new sun and moon 
  var sm_pokemon_name = "Rowlet Dartrix Decidueye Litten Torracat Incineroar Popplio Brionne Primarina Pikipek Trumbeak Toucannon Yungoos Gumshoos Grubbin Charjabug Vikavolt Crabrawler Crabominable Oricorio Cutiefly Ribombee Rockruff Lycanroc Wishiwashi Mareanie Toxapex Mudbray Mudsdale Dewpider Araquanid Fomantis Lurantis Morelull Shiinotic Salandit Salazzle Stufful Bewear Bounsweet Steenee Tsareena Comfey Oranguru Passimian Wimpod Golisopod Sandygast Palossand Pyukumuku Type-Null Silvally Minior Komala Turtonator Togedemaru Mimikyu Bruxish Drampa Dhelmise Jangmo-o Hakamo-o Kommo-o Tapu-Koko Tapu-Lele Tapu-Bulu Tapu-Fini Cosmog Cosmoem Solgaleo Lunala Nihilego Buzzwole Pheromosa Xurkitree Celesteela Kartana Guzzlord Necrozma Magearna Marshadow".split(" ");
  var sm_types = "{grass,flying} {grass,flying} {grass,ghost} {fire} {fire} {fire,dark} {water} {water} {water,fairy} {normal,flying} {normal,flying} {normal,flying} {normal} {normal} {bug} {bug,electric} {bug,electric} {fighting} {fighting,ice} {fire,flying} {bug,fairy} {bug,fairy} {rock} {rock} {water} {poison} {poison,water} {ground} {ground} {water,bug} {water,bug} {grass} {grass} {grass,fairy} {grass,fairy} {poison,fire} {poison,fire} {normal,fighting} {normal,fighting} {grass} {grass} {grass} {fairy} {normal,psychic} {fighting} {bug,water} {bug,water} {ghost,ground} {ghost,ground} {water} {normal} {normal} {rock,flying} {normal} {fire,dragon} {electric,steel} {ghost,fairy} {water,psychic} {normal,dragon} {ghost,grass} {dragon} {dragon,fighting} {dragon,fighting} {electric,fairy} {psychic,fairy} {grass,fairy} {water,fairy} {psychic} {psychic} {psychic,steel} {psychic,ghost} {rock,poison} {bug,fighting} {bug,fighting} {electric} {steel,flying} {grass,steel} {dark,dragon} {psychic} {steel,fairy} {fighting,ghost}".split(" ");
  var egg_group1 = "Flying Flying Flying Field Field Field Water_1 Water_1 Water_2 Flying Flying Flying Field Field Bug Bug Bug Water_3 Water_4 Flying Bug Bug Field Field Water_2 Water_1 Water_2 Field Field Water_1 Water_2 Grass Grass Grass Grass Monster Monster Field Field Grass Grass Grass Grass Field Field Bug Bug Amorphous Amorphous Water_1 Undiscovered Undiscovered Mineral Field Monster Field Amorphous Water_2 Monster Mineral Dragon Dragon Dragon Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered".split(" ");
  var egg_group2 = "      Field Field Field            Fairy Fairy        Bug Bug     Dragon Dragon         Water_3 Water_3        Dragon Fairy   Dragon ".split(" ");
  var pre_evo =" Rowlet Dartrix  Litten Torracat  Popplio Brionne  Pipipek Trumbeak  Yungoos  Grubbin Charjabug  Crabrawler   Cutiefly  Rockruff   Mareanie  Mudbray  Dewpider  Fomantis  Morelull  Sandalit  Stufful  Bounsweet Steenee     Wimpod  Sandygast   Type: Null          Jangmo-o Hakamo-o      Cosmog Cosmoem Cosmoem".split(" ");
  var hp_stat ="68 78 78 45 65 95 50 60 80 35 55 80 48 88 47 57 77 47 97 75 40 60 45 75 45 50 50 70 100 38 68 40 70 40 60 48 68 70 120 42 52 72 51 90 100 25 75 55 85 55 95 95 60 65 60 65 55 68 78 70 45 55 75 70 70 70 70 43 43 137 137 109 107 71 83 97 59 223 97 80 90".split(" ");
  var attack_stat ="55 75 107 65 85 115 54 69 74 75 85 120 70 110 62 82 70 82 132 70 45 55 65 115 20 53 63 100 125 40 70 55 105 35 45 44 64 75 125 30 40 120 52 60 120 35 125 55 75 60 95 95 60 115 78 98 90 105 60 131 55 75 110 115 85 130 75 29 29 137 113 53 139 137 89 101 181 101 107 95 125".split(" ");
  var defense_stat ="55 75 75 40 50 90 54 69 74 30 50 75 30 60 45 95 90 57 77 70 40 60 40 65 20 62 152 70 100 52 92 35 90 55 80 40 60 50 80 38 48 98 90 80 90 40 140 80 110 130 95 95 100 65 135 63 80 70 85 100 65 90 125 85 75 115 115 31 131 107 89 47 139 37 71 103 131 53 101 115 80".split(" ");
  var sp_a_stat ="50 70 100 60 80 80 66 91 126 30 40 75 30 55 55 55 145 42 62 98 55 95 30 55 25 43 53 45 55 40 50 50 80 65 90 71 111 45 55 30 40 50 82 90 40 20 60 70 100 30 95 95 60 75 91 40 50 70 135 86 45 65 100 95 130 85 95 29 29 113 137 127 53 137 173 107 59 97 127 130 90".split(" ");
  var sp_d_stat ="50 70 100 40 50 90 56 81 116 30 50 75 30 60 45 75 75 47 67 70 40 70 40 65 25 52 142 55 85 72 132 35 90 75 100 40 60 50 60 38 48 98 110 110 60 30 90 45 75 130 95 95 100 95 85 73 105 70 91 90 45 70 105 75 115 95 130 31 131 89 107 131 53 37 71 101 31 53 89 115 90".split(" ");
  var speed_stat ="42 52 70 70 90 60 40 50 60 65 75 60 45 45 46 36 43 63 43 93 84 124 60 112 40 45 35 45 35 27 42 35 45 15 30 77 117 50 60 32 62 72 100 60 80 80 40 15 35 5 59 95 60 65 36 96 96 92 36 40 45 65 85 130 95 75 85 37 37 97 97 103 79 151 83 61 109 43 79 65 125".split(" ");
  var total_stat ="320 420 530 320 420 530 320 420 530 265 355 485 253 418 300 400 500 338 478 476 304 464 280 487 175 305 495 385 500 269 454 250 480 285 405 320 480 340 500 210 290 510 485 490 490 230 530 320 480 410 534 570 440 480 485 435 476 475 485 517 300 420 600 570 570 570 570 200 400 680 680 570 570 570 570 570 570 570 600 600 600".split(" ");
  var male_perc ="87.50% 87.50% 87.50% 87.50% 87.50% 87.50% 87.50% 87.50% 87.50% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 25.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 87.50% 0.00% 50.00% 50.00% 0.00% 0.00% 0.00% 25.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00%    50.00% 50.00% 50.00% 50.00% 50.00% 50.00%  50.00% 50.00% 50.00%".split(" ");
  var female_perc="12.50% 12.50% 12.50% 12.50% 12.50% 12.50% 12.50% 12.50% 12.50% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 75.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 12.50% 100.00% 50.00% 50.00% 100.00% 100.00% 100.00% 75.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00% 50.00%    50.00% 50.00% 50.00% 50.00% 50.00% 50.00%  50.00% 50.00% 50.00%".split(" ");
  var ability1="Overgrow' 'Overgrow' 'Overgrow' 'Blaze' 'Blaze' 'Blaze' 'Torrent' 'Torrent' 'Torrent' 'Keen Eye' 'Keen Eye' 'Keen Eye' 'Stakeout' 'Stakeout' 'Swarm' 'Battery' 'Levitate' 'Hyper Cutter' 'Hyper Cutter' 'Dancer' 'Honey Gather' 'Honey Gather' 'Keen Eye' 'Keen Eye' 'Schooling' 'Merciless' 'Merciless' 'Own Tempo' 'Own Tempo' 'Water Bubble' 'Water Bubble' 'Leaf Guard' 'Leaf Guard' 'Illuminate' 'Illuminate' 'Corrosion' 'Corrosion' 'Fluffy' 'Fluffy' 'Leaf Guard' 'Leaf Guard' 'Leaf Guard' 'Flower Veil' 'Inner Focus' 'Receiver' 'Wimp Out' 'Emergency Exit' 'Water Compaction' 'Water Compaction' 'Innards Out' 'Battle Armor' 'RKS System' 'Shields Down' 'Comatose' 'Shell Armor' 'Iron Barbs' 'Disguise' 'Dazzling' 'Berserk' 'Steelworker' 'Bulletproof' 'Bulletproof' 'Bulletproof' 'Electric Surge' 'Psychic Surge' 'Grassy Surge' 'Misty Surge' 'Unaware' 'Sturdy' 'Full Metal Body' 'Shadow Shield' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Prism Armor' 'Soul-Heart' 'Technician".split("' '");
  var ability2="Overgrow' 'Overgrow' 'Overgrow' 'Blaze' 'Blaze' 'Blaze' 'Torrent' 'Torrent' 'Torrent' 'Skill Link' 'Skill Link' 'Skill Link' 'Strong Jaw' 'Strong Jaw' 'Swarm' 'Battery' 'Levitate' 'Iron Fist' 'Iron Fist' 'Dancer' 'Shield Dust' 'Shield Dust' 'Vital spirit' 'Sand Rush' 'Schooling' 'Limber' 'Limber' 'Stamina' 'Stamina' 'Water Bubble' 'Water Bubble' 'Leaf Guard' 'Leaf Guard' 'Effect Spore' 'Effect Spore' 'Corrosion' 'Corrosion' 'Klutz' 'Klutz' 'Oblivious' 'Oblivious' 'Queenly Majesty' 'Triage' 'Telepahty' 'Receiver' 'Wimp Out' 'Emergency Exit' 'Water Compaction' 'Water Compaction' 'Innards Out' 'Battle Armor' 'RKS System' 'Shields Down' 'Comatose' 'Shell Armor' 'Lightning Rod' 'Disguise' 'Strong Jaw' 'Sap Sipper' 'Steelworker' 'Soundproof' 'Soundproof' 'Soundproof' 'Electric Surge' 'Psychic Surge' 'Grassy Surge' 'Misty Surge' 'Unaware' 'Sturdy' 'Full Metal Body' 'Shadow Shield' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Prism Armor' 'Soul-Heart' 'Technician".split("' '");
  var ability3="Long Reach' 'Long Reach' 'Long Reach' 'Intimidate' 'Intimidate' 'Intimidate' 'Liquid Voice' 'Liquid Voice' 'Liquid Voice' 'Pickup' 'Pickup' 'Sheer Force' 'Adaptability' 'Adaptability' 'Swarm' 'Battery' 'Levitate' 'Anger Point' 'Anger Point' 'Dancer' 'Sweet Veil' 'Sweet Veil' 'Steadfast' 'Steadfast' 'Schooling' 'Regenerator' 'Regenerator' 'Inner Focus' 'Inner Focus' 'Water Absorb' 'Water Absorb' 'Contrary' 'Contrary' 'Rain Dish' 'Rain Dish' 'Oblivious' 'Oblivious' 'Cute Charm' 'Unnerve' 'Sweet Veil' 'Sweet Veil' 'Sweet Veil' 'Natural Cure' 'Symbiosis' 'Defiant' 'Wimp Out' 'Emergency Exit' 'Sand Veil' 'Sand Veil' 'Unaware' 'Battle Armor' 'RKS System' 'Shields Down' 'Comatose' 'Shell Armor' 'Sturdy' 'Disguise' 'Wonder Skin' 'Cloud Nine' 'Steelworker' 'Overcoat' 'Overcoat' 'Overcoat' 'Telepathy' 'Telepathy' 'Telepathy' 'Telepathy' 'Unaware' 'Sturdy' 'Full Metal Body' 'Shadow Shield' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Beast Boost' 'Prism Armor' 'Soul-Heart' 'Technician".split("' '");

  var chats=[];

  for (var index=0; index<sm_pokemon_name.length; index++){

    var name_url = sm_pokemon_name[index].toLowerCase();
    if(name_url == "oricorio")
      name_url+="-baile";
    else if (name_url == "lycanroc")
      name_url+="-midday";
    else if (name_url == "wishiwashi")
      name_url+="-solo";
    else if (name_url == "cosmoem")
      name_url = "tmp/790";
    else if (name_url == "marshadow")
      name_url = "tmp/802";

    if(!name_url.includes("tmp"))
      var icon_url = 'https://img.pokemondb.net/artwork/'+name_url+'.jpg';
    else
      var icon_url = 'https://img.pokemondb.net/artwork/'+name_url+'.png';

    var l_poke_name = [];
    l_poke_name.push(sm_pokemon_name[index]);

    var l_shiny_url = [];
    //l_shiny_url.push('http://www.serebii.net/Shiny/SM/'+pokenum+'.png');

    var l_reg_url = [];
    //l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'.png');

    if(sm_pokemon_name[index] == "Oricorio"){

      l_poke_name.push("Oricorio Baile");
      l_poke_name.push("Oricorio Pom-Pom");
      l_poke_name.push("Oricorio Pa'u");
      l_poke_name.push("Oricorio Sensu");
      name_url = "oricorio";
      pushSprites(name_url);
      name_url = "oricorio-pompom";
      pushSprites(name_url);
      name_url = "oricorio-pau";
      pushSprites(name_url);
      name_url = "oricorio-sensu";
    }
    else if(sm_pokemon_name[index] == "Lycanroc")
    {
      l_poke_name.push("Lycanroc Midday");
      l_poke_name.push("Lycanroc MidNight");
      name_url = "lycanroc";
      pushSprites(name_url);
      name_url = "lycanroc-midnight";
    }
    else if(sm_pokemon_name[index] == "Wishiwashi")
    {
      l_poke_name.push("Wishiwashi Solo");
      l_poke_name.push("Wishiwashi School");
      name_url = "wishiwashi";
      pushSprites(name_url);
      name_url = "wishiwashi-school";
    }
    else if(sm_pokemon_name[index] == "Minior")
    {
      l_poke_name.push("Minior Core");
      name_url = "minior-meteor";
      pushSprites(name_url);
      name_url = "minior";
    }
    else if(sm_pokemon_name[index].includes("Type")){
      name_url = "typenull";
    }
    else if(sm_pokemon_name[index].includes("Mars")){
      name_url = "marshadow";
    }
    else if(name_url.includes("tapu")){
      name_url = name_url.replace(name_url.substring(4,5),"");
    }
    else if(name_url == "jangmo-o"){
      name_url = "jangmoo";
    }
    else if(name_url == "kommo-o"){
      name_url = "kommoo";
    }
    else if(name_url == "hakamo-o"){
      name_url = "hakamoo";
    }
    else if(name_url == "tmp/790")
      name_url = "cosmoem";

    pushSprites(name_url);
    function pushSprites(name_url)
    {
      l_shiny_url.push('http://play.pokemonshowdown.com/sprites/xyani-shiny/'+name_url+'.gif');
      l_reg_url.push('http://play.pokemonshowdown.com/sprites/xyani/'+name_url+'.gif');
    }
    var types =sm_types[index].slice(1,sm_types[index].length-1);

    var regex = new RegExp(',', 'g');
    types = types.replace(regex, '\ ');
    types = types.split(" ");

    var egg_groups=[]
    egg_groups.push(egg_group1[index]);
    if(egg_group2[index] != "")
      egg_groups.push(egg_group2[index]);

    // Copy data, parse into ints
    var copy_data = [attack_stat[index],defense_stat[index],sp_a_stat[index],sp_d_stat[index],speed_stat[index]].map(function(item) {return parseInt(item, 10);});
  
    // Keep track of indicies from highest to smallest numbers
    var len = copy_data.length;
    var indices = new Array(len);
    for (var i = 0; i < len; ++i) indices[i] = i;
    indices.sort(function (a, b) { return copy_data[a] < copy_data[b] ? -1 : copy_data[a] > copy_data[b] ? 1 : 0; });
    indices.reverse();
    //console.log(indices);

    var suggestions=[];
    // Logic for calcuating nature

    // Pushing suggestions
    for(var i=0; i<4; i++)
      pushSuggestions(i);

    function pushSuggestions(n)
    {
      // Attack
      if(indices[n] == 0){
        if(attack_stat[index]-sp_a_stat[index]>6)
          suggestions.push("Adamant");
        if(attack_stat[index]-sp_a_stat[index]<6 || 
          attack_stat[index]-speed_stat[index]>6)
          suggestions.push("Brave");
      }
      // Defense
      else if(indices[n] ==1){
        if(defense_stat[index]-attack_stat[index]>6)
          suggestions.push("Bold");
        if(defense_stat[index]-sp_a_stat[index]>6)
          suggestions.push("Impish");
        if(attack_stat[index]-speed_stat[index]>6)
          suggestions.push("Relaxed");
      }
      // Sp Attack
      else if(indices[n] ==2){
        if(sp_a_stat[index]-attack_stat[index]>6)
          suggestions.push("Modest");
        if(sp_a_stat[index]-attack_stat[index]<6 ||
          sp_a_stat[index]-speed_stat[index]>6)
          suggestions.push("Quiet");
      }
      // Sp Defense
      else if(indices[n] ==3){
        if(sp_d_stat[index]-attack_stat[index]>6)
          suggestions.push("Calm");
        if(sp_d_stat[index]-sp_a_stat[index]>6)
          suggestions.push("Careful");
        if(sp_d_stat[index]-speed_stat[index]>6)
          suggestions.push("Sassy");
      }
      // Speed
      else if(indices[n] ==4){
        if(speed_stat[index]-sp_a_stat[index]>6)
          suggestions.push("Jolly");
        if(speed_stat[index]-attack_stat[index]>6)
          suggestions.push("Timid");
      }
    }
    
    var abilities=[];
    abilities.push(ability1[index]);
    if(ability1[index] != ability2[index])
      abilities.push(ability2[index]);

    var temp_m= parseInt(male_perc[index]);
    if(temp_m <20 && temp_m>0)
      temp_m = 20;
    else if(temp_m <80 && temp_m >40)
      temp_m = 50;
    else if(temp_m >80 && temp_m<100)
      temp_m =80;
    else if(temp_m == 100)
      temp_m = 100;
    else if(temp_m == 0)
      temp_m = 0;

        var types_l = new Array(
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1],// Normal
[1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1],// Fire
[1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],// Water
[1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],// Electric
[1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1],// Grass
[1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1],// Ice
[2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1],// Fighting
[1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1],// Poison
[1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1],// Ground
[1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1],// Flying
[1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1],// Psychic
[1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1],// Bug
[1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1],// Rock
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1],// Ghost
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1],// Dragon
[1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1],// Dark
[1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1],// Steel
[1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1],// Fairy
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);// None

var type_name = new Array("normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy");

var abilities_l = new Array(
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// None
[1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Thick Fat
[1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Heatproof
[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Levitate
[1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Volt Absorb
[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Water Absorb
[1, 1.25, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Dry Skin
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Flash Fire
[1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Sap Sipper
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],// Filter
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);// Wonder Guard

var ability_name = ["None","Thick Fat","Heatproof","Levitate","Volt Absorb","Water Absorb","Dry Skin","Flash Fire","Sap Sipper","Filter","Wonder Guard"];
    var type1 = type_name.indexOf(types[0]);
    var type2 = type_name.indexOf(types[1]);

    if(type2 == -1)
      type2 = types_l.length-1;
    
    var ability = 0;

    for(var x=0; x<ability_name.length-1; x++)
    {
      if((ability_name[x] == ability1[index]) ||
        (ability_name[x] == ability2[index]) ||
        (ability_name[x] == ability3[index]))
        ability=x;
    }
    var color = new Array();
    var result = new Array();
    var output;
    var i;
    
  for (i=0; i<=18; i++)
  {
    result[i] = ((types_l[i][type1] * types_l[i][type2]) * abilities_l[ability][i]) 
    if((types_l[i][type1] * types_l[i][type2]) < 2 && ability == 10){result[i] = 0};
    if((types_l[i][type1] * types_l[i][type2]) >= 2 && ability == 9){result[i] = result[i] * 0.75};
    if(result[i] == 1){color[i] = "dmg_normal"};
    if(result[i] < 1){color[i] = "dmg_resist"};
    if(result[i] < 0.5){color[i] = "dmg_resist2"};
    if(result[i] == 0){color[i] = "dmg_immune"};
    if(result[i] > 1){color[i] = "dmg_weak"};
    if(result[i] > 2){color[i] = "dmg_weak2"};
  }

  var weakTo =[];
  var resTo =[];
  var imTo =[];
  var normTo =[];
  for(var x=0; x<result.length-1; x++)
  {
    
    if(result[x]>1)
      weakTo.push( [result[x],type_name[x]] );
    else if(result[x] == 0)
      imTo.push( [result[x],type_name[x]] );
    else if(result[x]==1)
      normTo.push( [result[x],type_name[x]] );
    else if(result[x]<1 )
      resTo.push( [result[x],type_name[x]] );
  }

    chats.push({
      id: pokenum,
      name: l_poke_name,
      poke_num: '#'+pokenum,
      shiny_sprite: l_shiny_url,
      reg_sprite: l_reg_url,
      icon: icon_url,
      type: types,
      egg1: egg_group1[index],
      egg2: egg_group2[index],
      eggs: egg_groups,
      code: 'img/qr_new/qr_new ('+idnum+').png',
      hp: hp_stat[index],
      attack: attack_stat[index],
      defense: defense_stat[index],
      sp_a: sp_a_stat[index],
      sp_d: sp_d_stat[index],
      speed: speed_stat[index],
      total: total_stat[index],
      suggestion: suggestions,
      male: male_perc[index],
      female: female_perc[index],
      male_int: temp_m,
      abil1: ability1[index],
      abil2: ability2[index],
      abil3: ability3[index],
      abilities: abilities,
      weak: weakTo,
      immune: imTo,
      norm: normTo,
      resist: resTo
    });
    idnum++;
    pokenum++;
  }

  var items =[];
  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };

});

/*
.factory('Alolan', function() {

  var alolans=[];
  var idnum =1;

  var alolan_poke="Rowlet Dartrix Decidueye Litten Torracat Incineroar Popplio Brionne Primarina Pikipek Trumbeak Toucannon Yungoos Gumshoos Rattata-Alolan Raticate-Alolan Caterpie Metapod Butterfree Ledyba Ledian Spinarak Ariados Pichu Pikachu Raichu-Alolan Grubbin Charjabug Vikavolt Bonsly Sudowoodo Happiny Chansey Blissey Munchlax Snorlax Slowpoke Slowbro Slowking Wingull Pelipper Abra Kadabra Alakazam Meowth-Alolan Persian-Alolan Magnemite Magneton Magnezone Grimer-Alolan Muk-Alolan Growlithe Arcanine Drowzee Hypno Makuhita Hariyama Smeargle Crabrawler Crabominable Gastly Haunter Gengar Drifloon Drifblim Misdreavus Mismagius Zubat Golbat Crobat Diglett-Alolan Dugtrio-Alolan Spearow Fearow Rufflet Braviary Vullaby Mandibuzz Mankey Primeape Delibird Oricorio Cutiefly Ribombee Petilil Lilligant Cottonee Whimsicott Psyduck Golduck Magikarp Gyarados Barboach Whiscash Machop Machoke Machamp Roggenrola Boldore Gigalith Carbink Sableye Rockruff Lycanroc Spinda Tentacool Tentacruel Finneon Lumineon Wishiwashi Luvdisc Corsola Mareanie Toxapex Shellder Cloyster Bagon Shelgon Salamence Lillipup Herdier Stoutland Eevee Vaporeon Jolteon Flareon Espeon Umbreon Leafeon Glaceon Sylveon Mudbray Mudsdale Igglybuff Jigglypuff Wigglytuff Tauros Miltank Surskit Masquerain Dewpider Araquanid Fomantis Lurantis Morelull Shiinotic Paras Parasect Poliwag Poliwhirl Poliwrath Politoed Goldeen Seaking Feebas Milotic Alomomola Fletchling Fletchinder Talonflame Salandit Salazzle Cubone Marowak-Alolan Kangaskhan Magby Magmar Magmortar Stufful Bewear Bounsweet Steenee Tsareena Comfey Pinsir Oranguru Passimian Goomy Sliggoo Goodra Castform Wimpod Golisopod Staryu Starmie Sandygast Palossand Cranidos Rampardos Shieldon Bastiodon Archen Archeops Tirtouga Carracosta Phantump Trevenant Nosepass Probopass Pyukumuku Chinchou Lanturn Type-Null Silvally Zygarde Trubbish Garbodor Skarmory Ditto Cleffa Clefairy Clefable Minior Beldum Metang Metagross Porygon Porygon2 Porygon-Z Pancham Pangoro Komala Torkoal Turtonator Togedemaru Elekid Electabuzz Electivire Geodude-Alolan Graveler-Alolan Golem-Alolan Sandile Krokorok Krookodile Trapinch Vibrava Flygon Gible Gabite Garchomp Klefki Mimikyu Bruxish Drampa Absol Snorunt Glalie Froslass Sneasel Weavile Sandshrew-Alolan Sandslash-Alolan Vulpix-Alolan Ninetales-Alolan Vanillite Vanillish Vanilluxe Snubbull Granbull Shellos Gastrodon Relicanth Dhelmise Carvanha Sharpedo Wailmer Wailord Lapras Exeggcute Exeggutor-Alolan Jangmo-o Hakamo-o Kommo-o Emolga Scyther Scizor Murkrow Honchkrow Riolu Lucario Dratini Dragonair Dragonite Aerodactyl Tapu-Koko Tapu-Lele Tapu-Bulu Tapu-Fini Cosmog Cosmoem Solgaleo Lunala Nihilego Buzzwole Pheromosa Xurkitree Celesteela Kartana Guzzlord Necrozma Magearna Marshadow".split(" ");
  

  // Number of qr codes
  for (var index=0; index<alolan_poke.length; index++){

    var name_url = alolan_poke[index].toLowerCase();

    var code_url = 'img/QR_alolan/alolan ('+idnum+').png';

    if(name_url == "oricorio")
      name_url+="-baile";
    else if (name_url == "lycanroc")
      name_url+="-midday";
    else if (name_url == "wishiwashi")
      name_url+="-solo";
    else if (name_url == "cosmoem")
      name_url = "tmp/790";
    else if (name_url == "marshadow")
      name_url = "tmp/802";
    if(!name_url.includes("tmp"))
      var icon_url = 'https://img.pokemondb.net/artwork/'+name_url+'.jpg';
    else
      var icon_url = 'https://img.pokemondb.net/artwork/'+name_url+'.png';

    if(name_url.includes("alolan"))
      name_url = name_url.slice(0,name_url.length-1);
    else if(name_url.includes("tapu")){
      name_url = name_url.replace(name_url.substring(4,5),"");
    }

    var l_shiny_url = [];
    l_shiny_url.push('http://play.pokemonshowdown.com/sprites/xyani-shiny/'+name_url+'.gif');
    
    var l_reg_url = [];
    l_reg_url.push('http://play.pokemonshowdown.com/sprites/xyani/'+name_url+'.gif');

    code_url = 
    alolans.push({
    id: idnum,
    icon: icon_url,
    name: alolan_poke[index],
    shiny_sprite: l_shiny_url,
    reg_sprite: l_reg_url,
    code: code_url
  });
    idnum++;
  }
  return {
    all: function() {
      return alolans;
    },
    get: function(alolanId) {
      for (var i = 0; i < alolans.length; i++) {
        if (alolans[i].id === parseInt(alolanId)) {
          return alolans[i];
        }
      }
      return null;
    }
  };

})

.factory('National', function() {

  var nationals=[];
  var idnum =1;

  var national_poke="Bulbasaur Ivysaur Venusaur Charmander Charmeleon Charizard Squirtle Wartortle Blastoise Caterpie Metapod Butterfree Weedle Kakuna Beedrill Pidgey Pidgeotto Pidgeot Rattata Raticate Spearow Fearow Ekans Arbok Pikachu Raichu Sandshrew Sandslash Nidoran-f Nidorina Nidoqueen Nidoran-m Nidorino Nidoking Clefairy Clefable Vulpix Ninetales Jigglypuff Wigglytuff Zubat Golbat Oddish Gloom Vileplume Paras Parasect Venonat Venomoth Diglett Dugtrio Meowth Persian Psyduck Golduck Mankey Primeape Growlithe Arcanine Poliwag Poliwhirl Poliwrath Abra Kadabra Alakazam Machop Machoke Machamp Bellsprout Weepinbell Victreebel Tentacool Tentacruel Geodude Graveler Golem Ponyta Rapidash Slowpoke Slowbro Magnemite Magneton Farfetchd Doduo Dodrio Seel Dewgong Grimer Muk Shellder Cloyster Gastly Haunter Gengar Onix Drowzee Hypno Krabby Kingler Voltorb Electrode Exeggcute Exeggutor Cubone Marowak Hitmonlee Hitmonchan Lickitung Koffing Weezing Rhyhorn Rhydon Chansey Tangela Kangaskhan Horsea Seadra Goldeen Seaking Staryu Starmie Mr-Mime Scyther Jynx Electabuzz Magmar Pinsir Tauros Magikarp Gyarados Lapras Ditto Eevee Vaporeon Jolteon Flareon Porygon Omanyte Omastar Kabuto Kabutops Aerodactyl Snorlax Articuno Zapdos Moltres Dratini Dragonair Dragonite Mewtwo Mew Chikorita Bayleef Meganium Cyndaquil Quilava Typhlosion Totodile Croconaw Feraligatr Sentret Furret Hoothoot Noctowl Ledyba Ledian Spinarak Ariados Crobat Chinchou Lanturn Pichu Cleffa Igglybuff Togepi Togetic Natu Xatu Mareep Flaaffy Ampharos Bellossom Marill Azumarill Sudowoodo Politoed Hoppip Skiploom Jumpluff Aipom Sunkern Sunflora Yanma Wooper Quagsire Espeon Umbreon Murkrow Slowking Misdreavus Unown Wobbuffet Girafarig Pineco Forretress Dunsparce Gligar Steelix Snubbull Granbull Qwilfish Scizor Shuckle Heracross Sneasel Teddiursa Ursaring Slugma Magcargo Swinub Piloswine Corsola Remoraid Octillery Delibird Mantine Skarmory Houndour Houndoom Kingdra Phanpy Donphan Porygon2 Stantler Smeargle Tyrogue Hitmontop Smoochum Elekid Magby Miltank Blissey Raikou Entei Suicune Larvitar Pupitar Tyranitar Lugia Ho-Oh Celebi Treecko Grovyle Sceptile Torchic Combusken Blaziken Mudkip Marshtomp Swampert Poochyena Mightyena Zigzagoon Linoone Wurmple Silcoon Beautifly Cascoon Dustox Lotad Lombre Ludicolo Seedot Nuzleaf Shiftry Taillow Swellow Wingull Pelipper Ralts Kirlia Gardevoir Surskit Masquerain Shroomish Breloom Slakoth Vigoroth Slaking Nincada Ninjask Shedinja Whismur Loudred Exploud Makuhita Hariyama Azurill Nosepass Skitty Delcatty Sableye Mawile Aron Lairon Aggron Meditite Medicham Electrike Manectric Plusle Minun Volbeat Illumise Roselia Gulpin Swalot Carvanha Sharpedo Wailmer Wailord Numel Camerupt Torkoal Spoink Grumpig Spinda Trapinch Vibrava Flygon Cacnea Cacturne Swablu Altaria Zangoose Seviper Lunatone Solrock Barboach Whiscash Corphish Crawdaunt Baltoy Claydol Lileep Cradily Anorith Armaldo Feebas Milotic Castform Kecleon Shuppet Banette Duskull Dusclops Tropius Chimecho Absol Wynaut Snorunt Glalie Spheal Sealeo Walrein Clamperl Huntail Gorebyss Relicanth Luvdisc Bagon Shelgon Salamence Beldum Metang Metagross Regirock Regice Registeel Latias Latios Kyogre Groudon Rayquaza Jirachi Deoxys Turtwig Grotle Torterra Chimchar Monferno Infernape Piplup Prinplup Empoleon Starly Staravia Staraptor Bidoof Bibarel Kricketot Kricketune Shinx Luxio Luxray Budew Roserade Cranidos Rampardos Shieldon Bastiodon Burmy Wormadam Mothim Combee Vespiquen Pachirisu Buizel Floatzel Cherubi Cherrim Shellos Gastrodon Ambipom Drifloon Drifblim Buneary Lopunny Mismagius Honchkrow Glameow Purugly Chingling Stunky Skuntank Bronzor Bronzong Bonsly Mime-Jr Happiny Chatot Spiritomb Gible Gabite Garchomp Munchlax Riolu Lucario Hippopotas Hippowdon Skorupi Drapion Croagunk Toxicroak Carnivine Finneon Lumineon Mantyke Snover Abomasnow Weavile Magnezone Lickilicky Rhyperior Tangrowth Electivire Magmortar Togekiss Yanmega Leafeon Glaceon Gliscor Mamoswine Porygon-Z Gallade Probopass Dusknoir Froslass Rotom Uxie Mesprit Azelf Dialga Palkia Heatran Regigigas Giratina Cresselia Phione Manaphy Darkrai Shaymin Arceus Victini Snivy Servine Serperior Tepig Pignite Emboar Oshawott Dewott Samurott Patrat Watchog Lillipup Herdier Stoutland Purrloin Liepard Pansage Simisage Pansear Simisear Panpour Simipour Munna Musharna Pidove Tranquill Unfezant Blitzle Zebstrika Roggenrola Boldore Gigalith Woobat Swoobat Drilbur Excadrill Audino Timburr Gurdurr Conkeldurr Tympole Palpitoad Seismitoad Throh Sawk Sewaddle Swadloon Leavanny Venipede Whirlipede Scolipede Cottonee Whimsicott Petilil Lilligant Basculin Sandile Krokorok Krookodile Darumaka Darmanitan Maractus Dwebble Crustle Scraggy Scrafty Sigilyph Yamask Cofagrigus Tirtouga Carracosta Archen Archeops Trubbish Garbodor Zorua Zoroark Minccino Cinccino Gothita Gothorita Gothitelle Solosis Duosion Reuniclus Ducklett Swanna Vanillite Vanillish Vanilluxe Deerling Sawsbuck Emolga Karrablast Escavalier Foongus Amoonguss Frillish Jellicent Alomomola Joltik Galvantula Ferroseed Ferrothorn Klink Klang Klinklang Tynamo Eelektrik Eelektross Elgyem Beheeyem Litwick Lampent Chandelure Axew Fraxure Haxorus Cubchoo Beartic Cryogonal Shelmet Accelgor Stunfisk Mienfoo Mienshao Druddigon Golett Golurk Pawniard Bisharp Bouffalant Rufflet Braviary Vullaby Mandibuzz Heatmor Durant Deino Zweilous Hydreigon Larvesta Volcarona Cobalion Terrakion Virizion Tornadus Thundurus Reshiram Zekrom Landorus Kyurem Keldeo Meloetta Genesect Chespin Quilladin Chesnaught Fennekin Braixen Delphox Froakie Frogadier Greninja Bunnelby Diggersby Fletchling Fletchinder Talonflame Scatterbug Spewpa Vivillon Litleo Pyroar Flabebe Floette Florges Skiddo Gogoat Pancham Pangoro Furfrou Espurr Meowstic Honedge Doublade Aegislash Spritzee Aromatisse Swirlix Slurpuff Inkay Malamar Binacle Barbaracle Skrelp Dragalge Clauncher Clawitzer Helioptile Heliolisk Tyrunt Tyrantrum Amaura Aurorus Sylveon Hawlucha Dedenne Carbink Goomy Sliggoo Goodra Klefki Phantump Trevenant Pumpkaboo Gourgeist Bergmite Avalugg Noibat Noivern Xerneas Yveltal Zygarde Diancie Hoopa Volcanion Rowlet Dartrix Decidueye Litten Torracat Incineroar Popplio Brionne Primarina Pikipek Trumbeak Toucannon Yungoos Gumshoos Grubbin Charjabug Vikavolt Crabrawler Crabominable Oricorio Cutiefly Ribombee Rockruff Lycanroc Wishiwashi Mareanie Toxapex Mudbray Mudsdale Dewpider Araquanid Fomantis Lurantis Morelull Shiinotic Salandit Salazzle Stufful Bewear Bounsweet Steenee Tsareena Comfey Oranguru Passimian Wimpod Golisopod Sandygast Palossand Pyukumuku Type-Null Silvally Minior Komala Turtonator Togedemaru Mimikyu Bruxish Drampa Dhelmise Jangmo-o Hakamo-o Kommo-o Tapu-Koko Tapu-Lele Tapu-Bulu Tapu-Fini Cosmog Cosmoem Solgaleo Lunala Nihilego Buzzwole Pheromosa Xurkitree Celesteela Kartana Guzzlord Necrozma Magearna Marshadow".split(" ");
  var type1="Grass Grass Grass Fire Fire Fire Water Water Water Bug Bug Bug Bug Bug Bug Normal Normal Normal Normal Normal Normal Normal Poison Poison Electric Electric Ground Ground Poison Poison Poison Poison Poison Poison Fairy Fairy Fire Fire Normal Normal Poison Poison Grass Grass Grass Bug Bug Bug Bug Ground Ground Normal Normal Water Water Fighting Fighting Fire Fire Water Water Water Psychic Psychic Psychic Fighting Fighting Fighting Grass Grass Grass Water Water Rock Rock Rock Fire Fire Water Water Electric Electric Normal Normal Normal Water Water Poison Poison Water Water Ghost Ghost Ghost Rock Psychic Psychic Water Water Electric Electric Grass Grass Ground Ground Fighting Fighting Normal Poison Poison Ground Ground Normal Grass Normal Water Water Water Water Water Water Psychic Bug Ice Electric Fire Bug Normal Water Water Water Normal Normal Water Electric Fire Normal Rock Rock Rock Rock Rock Normal Ice Electric Fire Dragon Dragon Dragon Psychic Psychic Grass Grass Grass Fire Fire Fire Water Water Water Normal Normal Normal Normal Bug Bug Bug Bug Poison Water Water Electric Fairy Normal Fairy Fairy Psychic Psychic Electric Electric Electric Grass Water Water Rock Water Grass Grass Grass Normal Grass Grass Bug Water Water Psychic Dark Dark Water Ghost Psychic Psychic Normal Bug Bug Normal Ground Steel Fairy Fairy Water Bug Bug Bug Dark Normal Normal Fire Fire Ice Ice Water Water Water Ice Water Steel Dark Dark Water Ground Ground Normal Normal Normal Fighting Fighting Ice Electric Fire Normal Normal Electric Fire Water Rock Rock Rock Psychic Fire Psychic Grass Grass Grass Fire Fire Fire Water Water Water Dark Dark Normal Normal Bug Bug Bug Bug Bug Water Water Water Grass Grass Grass Normal Normal Water Water Psychic Psychic Psychic Bug Bug Grass Grass Normal Normal Normal Bug Bug Bug Normal Normal Normal Fighting Fighting Normal Rock Normal Normal Dark Steel Steel Steel Steel Fighting Fighting Electric Electric Electric Electric Bug Bug Grass Poison Poison Water Water Water Water Fire Fire Fire Psychic Psychic Normal Ground Ground Ground Grass Grass Normal Dragon Normal Poison Rock Rock Water Water Water Water Ground Ground Rock Rock Rock Rock Water Water Normal Normal Ghost Ghost Ghost Ghost Grass Psychic Dark Psychic Ice Ice Ice Ice Ice Water Water Water Water Water Dragon Dragon Dragon Steel Steel Steel Rock Ice Steel Dragon Dragon Water Ground Dragon Steel Psychic Grass Grass Grass Fire Fire Fire Water Water Water Normal Normal Normal Normal Normal Bug Bug Electric Electric Electric Grass Grass Rock Rock Rock Rock Bug Bug Bug Bug Bug Electric Water Water Grass Grass Water Water Normal Ghost Ghost Normal Normal Ghost Dark Normal Normal Psychic Poison Poison Steel Steel Rock Psychic Normal Normal Ghost Dragon Dragon Dragon Normal Fighting Fighting Ground Ground Poison Poison Poison Poison Grass Water Water Water Grass Grass Dark Electric Normal Ground Grass Electric Fire Fairy Bug Grass Ice Ground Ice Normal Psychic Rock Ghost Ice Electric Psychic Psychic Psychic Steel Water Fire Normal Ghost Psychic Water Water Dark Grass Normal Psychic Grass Grass Grass Fire Fire Fire Water Water Water Normal Normal Normal Normal Normal Dark Dark Grass Grass Fire Fire Water Water Psychic Psychic Normal Normal Normal Electric Electric Rock Rock Rock Psychic Psychic Ground Ground Normal Fighting Fighting Fighting Water Water Water Fighting Fighting Bug Bug Bug Bug Bug Bug Grass Grass Grass Grass Water Ground Ground Ground Fire Fire Grass Bug Bug Dark Dark Psychic Ghost Ghost Water Water Rock Rock Poison Poison Dark Dark Normal Normal Psychic Psychic Psychic Psychic Psychic Psychic Water Water Ice Ice Ice Normal Normal Electric Bug Bug Grass Grass Water Water Water Bug Bug Grass Grass Steel Steel Steel Electric Electric Electric Psychic Psychic Ghost Ghost Ghost Dragon Dragon Dragon Ice Ice Ice Bug Bug Ground Fighting Fighting Dragon Ground Ground Dark Dark Normal Normal Normal Dark Dark Fire Bug Dark Dark Dark Bug Bug Steel Rock Grass Flying Electric Dragon Dragon Ground Dragon Water Normal Bug Grass Grass Grass Fire Fire Fire Water Water Water Normal Normal Normal Fire Fire Bug Bug Bug Fire Fire Fairy Fairy Fairy Grass Grass Dark Dark Normal Psychic Psychic Steel Steel Steel Fairy Fairy Fairy Fairy Dark Dark Rock Rock Poison Poison Water Water Electric Electric Rock Rock Rock Rock Fairy Fighting Electric Rock Dragon Dragon Dragon Steel Ghost Ghost Ghost Ghost Ice Ice Flying Flying Fairy Dark Dragon Rock Psychic Fire Grass Grass Grass Fire Fire Fire Water Water Water Normal Normal Normal Normal Normal Bug Bug Bug Fighting Fighting Fire Bug Bug Rock Rock Water Poison Poison Ground Ground Water Water Grass Grass Grass Grass Poison Poison Normal Normal Grass Grass Grass Fairy Normal Fighting Bug Bug Ghost Ghost Water Normal Normal Rock Normal Fire Electric Ghost Water Normal Ghost Dragon Dragon Dragon Electric Psychic Grass Water Psychic Psychic Psychic Psychic Rock Bug Bug Electric Steel Grass Dark Psychic Steel Fighting".split(" ");
  var type2="Poison Poison Poison   Flying      Flying Poison Poison Poison Flying Flying Flying   Flying Flying         Ground   Ground     Fairy Fairy Flying Flying Poison Poison Poison Grass Grass Poison Poison             Fighting       Poison Poison Poison Poison Poison Ground Ground Ground   Psychic Psychic Steel Steel Flying Flying Flying  Ice    Ice Poison Poison Poison Ground       Psychic Psychic        Rock Rock         Psychic Fairy Flying Psychic      Flying Ice       Water Water Water Water Flying  Flying Flying Flying   Flying              Flying Flying Flying Flying Poison Poison Flying Electric Electric   Fairy  Flying Flying Flying     Fairy Fairy   Flying Flying Flying    Flying Ground Ground   Flying Psychic    Psychic  Steel  Flying Ground   Poison Steel Rock Fighting Ice    Rock Ground Ground Rock   Flying Flying Flying Fire Fire Dragon        Psychic        Ground Ground Dark Flying Flying Grass     Fighting Fighting  Ground Ground       Flying  Poison Grass Grass Grass  Dark Dark Flying Flying Flying Flying Fairy Fairy Fairy Water Flying  Fighting    Ground Flying Ghost      Fairy    Ghost Fairy Rock Rock Rock Psychic Psychic       Poison   Dark Dark   Ground Ground      Dragon Dragon  Dark Flying Flying   Psychic Psychic Ground Ground  Dark Psychic Psychic Grass Grass Bug Bug         Flying      Water Water Water    Rock    Flying Psychic Psychic Psychic    Psychic Psychic   Flying Psychic    Ground  Fighting Fighting   Steel Flying Flying Flying  Water      Poison Poison   Steel Steel  Grass Flying Flying Flying       Ground  Flying Flying    Flying    Dark Dark Psychic Psychic  Fairy  Flying  Ground Ground Ground   Steel   Bug Dark Fighting Fighting    Flying Ice Ice Ice Steel  Rock    Flying Flying   Flying Ground  Fighting Steel  Ghost Ghost    Dragon Dragon Steel  Dragon       Fire     Fighting Fighting                   Flying Flying Flying      Flying Flying  Steel      Ground Ground   Grass Grass Grass Poison Poison Poison Fairy Fairy    Dark Dark Dark    Rock Rock Fighting Fighting Flying   Rock Rock Flying Flying             Flying Flying    Grass Grass Flying  Steel Poison Poison Ghost Ghost  Electric Electric Steel Steel         Fire Fire Fire         Electric    Ghost Ghost Steel Steel  Flying Flying Flying Flying  Steel Dragon Dragon Dragon Fire Fire Fighting Fighting Fighting  Flying Fire Electric Flying Ice Fighting Psychic Steel   Fighting   Psychic   Dark  Ground Flying Flying Flying   Flying Normal Normal       Fighting    Ghost Ghost Ghost     Psychic Psychic Water Water Water Dragon   Normal Normal Dragon Dragon Ice Ice  Flying Fairy Fairy    Fairy Grass Grass Grass Grass   Dragon Dragon  Flying Ground Fairy Ghost Water Flying Flying Ghost   Dark   Fairy Flying Flying Flying    Electric Electric  Ice Flying Fairy Fairy    Water Water   Bug Bug   Fairy Fairy Fire Fire Fighting Fighting     Psychic  Water Water Ground Ground    Flying  Dragon Steel Fairy Psychic Dragon Grass  Fighting Fighting Fairy Fairy Fairy Fairy   Steel Ghost Poison Fighting Fighting  Flying Steel Dragon  Fairy Ghost".split(" ");
  var egg_group1="Monster Monster Monster Monster Monster Monster Monster Monster Monster Bug Bug Bug Bug Bug Bug Flying Flying Flying Field Field Flying Flying Field Field Field Field Field Field Monster Undiscovered Undiscovered Monster Monster Monster Fairy Fairy Field Field Fairy Fairy Flying Flying Grass Grass Grass Bug Bug Bug Bug Field Field Field Field Water_1 Water_1 Field Field Field Field Water_1 Water_1 Water_1 Human-Like Human-Like Human-Like Human-Like Human-Like Human-Like Grass Grass Grass Water_3 Water_3 Mineral Mineral Mineral Field Field Monster Monster Mineral Mineral Flying Flying Flying Water_1 Water_1 Amorphous Amorphous Water_3 Water_3 Amorphous Amorphous Amorphous Mineral Human-Like Human-Like Water_3 Water_3 Mineral Mineral Grass Grass Monster Monster Human-Like Human-Like Monster Amorphous Amorphous Monster Monster Fairy Grass Monster Water_1 Water_1 Water_2 Water_2 Water_3 Water_3 Human-Like Bug Human-Like Human-Like Human-Like Bug Field Water_2 Water_2 Monster Ditto Field Field Field Field Mineral Water_1 Water_1 Water_1 Water_1 Flying Monster Undiscovered Undiscovered Undiscovered Water_1 Water_1 Water_1 Undiscovered Undiscovered Monster Monster Monster Field Field Field Monster Monster Monster Field Field Flying Flying Bug Bug Bug Bug Flying Water_2 Water_2 Undiscovered Undiscovered Undiscovered Undiscovered Flying Flying Flying Monster Monster Monster Grass Water_1 Water_1 Mineral Water_1 Fairy Fairy Fairy Field Grass Grass Bug Water_1 Water_1 Field Field Flying Monster Amorphous Undiscovered Amorphous Field Bug Bug Field Bug Mineral Field Field Water_2 Bug Bug Bug Field Field Field Amorphous Amorphous Field Field Water_1 Water_1 Water_1 Water_1 Water_1 Flying Field Field Water_1 Field Field Mineral Field Field Undiscovered Human-Like Undiscovered Undiscovered Undiscovered Field Fairy Undiscovered Undiscovered Undiscovered Monster Monster Monster Undiscovered Undiscovered Undiscovered Monster Monster Monster Field Field Field Monster Monster Monster Field Field Field Field Bug Bug Bug Bug Bug Water_1 Water_1 Water_1 Field Field Field Flying Flying Water_1 Water_1 Amorphous Amorphous Amorphous Water_1 Water_1 Fairy Fairy Field Field Field Bug Bug Mineral Monster Monster Monster Human-Like Human-Like Undiscovered Mineral Field Field Human-Like Field Monster Monster Monster Human-Like Human-Like Field Field Fairy Fairy Bug Bug Fairy Amorphous Amorphous Water_2 Water_2 Field Field Field Field Field Field Field Field Bug Bug Bug Grass Grass Flying Flying Field Field Mineral Mineral Water_2 Water_2 Water_1 Water_1 Mineral Mineral Water_3 Water_3 Water_3 Water_3 Water_1 Water_1 Fairy Field Amorphous Amorphous Amorphous Amorphous Monster Amorphous Field Undiscovered Fairy Fairy Water_1 Water_1 Water_1 Water_1 Water_1 Water_1 Water_1 Water_2 Dragon Dragon Dragon Mineral Mineral Mineral Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Monster Monster Monster Field Field Field Water_1 Water_1 Water_1 Flying Flying Flying Water_1 Water_1 Bug Bug Field Field Field Undiscovered Fairy Monster Monster Monster Monster Bug Bug Bug Bug Bug Field Water_1 Water_1 Fairy Fairy Water_1 Water_1 Field Amorphous Amorphous Field Field Amorphous Flying Field Field Undiscovered Field Field Mineral Mineral Undiscovered Undiscovered Undiscovered Flying Amorphous Monster Monster Monster Undiscovered Undiscovered Field Field Field Bug Bug Human-Like Human-Like Grass Water_2 Water_2 Undiscovered Monster Monster Field Mineral Monster Monster Grass Human-Like Human-Like Flying Bug Field Field Bug Field Mineral Amorphous Mineral Amorphous Fairy Amorphous Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Water_1 Water_1 Undiscovered Undiscovered Undiscovered Undiscovered Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Field Flying Flying Flying Field Field Mineral Mineral Mineral Field Field Field Field Fairy Human-Like Human-Like Human-Like Water_1 Water_1 Water_1 Human-Like Human-Like Bug Bug Bug Bug Bug Bug Grass Grass Grass Grass Water_2 Field Field Field Field Field Grass Bug Bug Field Field Flying Mineral Mineral Water_1 Water_1 Flying Flying Mineral Mineral Field Field Field Field Human-Like Human-Like Human-Like Amorphous Amorphous Amorphous Water_1 Water_1 Mineral Mineral Mineral Field Field Field Bug Bug Grass Grass Amorphous Amorphous Water_1 Bug Bug Grass Grass Mineral Mineral Mineral Amorphous Amorphous Amorphous Human-Like Human-Like Amorphous Amorphous Amorphous Monster Monster Monster Field Field Mineral Bug Bug Water_1 Field Field Dragon Mineral Mineral Human-Like Human-Like Field Flying Flying Flying Flying Field Bug Dragon Dragon Dragon Bug Bug Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Field Field Field Field Field Field Water_1 Water_1 Water_1 Field Field Flying Flying Flying Bug Bug Bug Field Field Fairy Fairy Fairy Field Field Field Field Field Field Field Mineral Mineral Mineral Fairy Fairy Fairy Fairy Water_1 Water_1 Water_3 Water_3 Water_1 Water_1 Water_1 Water_1 Monster Monster Monster Monster Monster Monster Field Human-Like Field Fairy Dragon Dragon Dragon Mineral Grass Grass Amorphous Amorphous Monster Monster Flying Flying Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Flying Flying Flying Field Field Field Water_1 Water_1 Water_2 Flying Flying Flying Field Field Bug Bug Bug Water_3 Water_4 Flying Bug Bug Field Field Water_2 Water_1 Water_2 Field Field Water_1 Water_2 Grass Grass Grass Grass Monster Monster Field Field Grass Grass Grass Grass Field Field Bug Bug Amorphous Amorphous Water_1 Undiscovered Undiscovered Mineral Field Monster Field Amorphous Water_2 Monster Mineral Dragon Dragon Dragon Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered Undiscovered".split(" ");
  var egg_group2="Grass Grass Grass Dragon Dragon Dragon Water_1 Water_1 Water_1              Dragon Dragon Fairy Fairy   Field   Field Field Field            Grass Grass       Field Field                        Water_1 Water_1   Field   Field Field                        Field Field    Dragon Dragon            Dragon Dragon Water_1       Water_3 Water_3 Water_3 Water_3      Dragon Dragon Dragon   Grass Grass Grass    Water_1 Water_1 Water_1                Fairy   Field Field Field  Fairy Fairy   Grass Grass Grass     Field Field    Water_1          Fairy Fairy            Water_3 Water_2 Water_2 Field     Dragon                      Dragon Dragon Dragon    Water_1 Water_1 Water_1          Grass Grass Grass Grass Grass Grass   Flying Flying    Bug Bug Grass Grass       Field Field Field     Fairy Fairy  Fairy          Human-Like Human-Like Grass     Water_2 Water_2      Human-Like    Human-Like Human-Like Dragon Dragon  Dragon     Water_3 Water_3       Dragon Dragon Amorphous      Grass    Mineral Mineral Field Field Field    Water_2                  Grass Grass Grass Human-Like Human-Like Human-Like Field Field Field    Field Field       Grass          Fairy Field Field Grass Grass Amorphous Amorphous    Human-Like Human-Like               Dragon Dragon Dragon   Human-Like   Water_3 Water_3       Grass Grass    Field    Fairy          Mineral           Fairy Fairy     Grass Grass Grass                              Flying Flying                  Fairy Fairy          Mineral Mineral Dragon Dragon  Amorphous Amorphous Water_3 Water_3 Water_3 Water_3             Flying Flying             Water_2   Mineral Mineral            Dragon Dragon Dragon      Amorphous Human-Like Human-Like Monster                                                     Human-Like Human-Like           Water_2 Water_2   Dragon Dragon Water_3 Water_3 Dragon Dragon Dragon Dragon     Fairy Mineral     Amorphous Amorphous                   Field Field Field            Fairy Fairy        Bug Bug     Dragon Dragon         Water_3 Water_3        Dragon Fairy   Dragon".split(" ");

  // Number of qr codes
  for (var index=0; index<national_poke.length; index++){

    var name_url = national_poke[index].toLowerCase();

    // Icon URL
    if(name_url == "oricorio")
      name_url+="-baile";
    else if(name_url == "deoxys")
      name_url+="-normal";
    else if(name_url == "rotom")
      name_url+="-normal";
    else if(name_url == "wormadam")
      name_url+="-plant";
    else if(name_url == "giratina")
      name_url+="-altered";
    else if(name_url == "shaymin")
      name_url+="-land";
    else if(name_url == "darmanitan")
      name_url+="-standard";
    else if(name_url == "meloetta")
      name_url+="-aria";
    else if(name_url == "meowstic")
      name_url+="-male";
    else if(name_url == "aegislash")
      name_url+="-blade";
    else if(name_url == "hoopa")
      name_url+="-confined";
    else if (name_url == "lycanroc")
      name_url+="-midday";
    else if (name_url == "wishiwashi")
      name_url+="-solo";
    else if (name_url == "cosmoem")
      name_url = "tmp/790";
    else if (name_url == "marshadow")
      name_url = "tmp/802";
    if(!name_url.includes("tmp"))
      var icon_url = 'https://img.pokemondb.net/artwork/'+name_url+'.jpg';
    else
      var icon_url = 'https://img.pokemondb.net/artwork/'+name_url+'.png';

    // Sprites URL
    var l_reg_url = [];
    var l_shiny_url = [];

    if(name_url.includes("alolan"))
      name_url = name_url.slice(0,name_url.length-1);
    else if(name_url.includes("tapu")){
      name_url = name_url.replace(name_url.substring(4,5),"");
    }
    else if(name_url.includes("deoxys")){
      name_url = "deoxys";
    }
    else if(name_url == "jangmo-o"){
      name_url = "jangmoo";
    }
    else if(name_url == "nidoran-m"){
      name_url = "nidoran";
    }
    else if(name_url == "mr-mime"){
      name_url = "mrmime";
    }
    else if(name_url == "lycanroc-midday"){
      name_url = "lycanroc";
      sprites(name_url);
      name_url = "lycanroc-midnight";
    }
    else if(name_url == "ho-oh"){
      name_url = "hooh";
    }
    else if(name_url.includes("rotom")){
      var rotom_list=["rotom-f","rotom-fan","rotom-frost","rotom-h","rotom-heat","rotom-m","rotom-mow","rotom-s","rotom-w","rotom-wash"];
      for(var i=0; i<rotom_list; i++)
        sprites(romom_list[i]);
      name_url = "rotom";
      console.log(l_reg_url.length);
    }

    sprites(name_url);
    
    function sprites(name_url)
    {
      console.log("hii")
      l_shiny_url.push('http://play.pokemonshowdown.com/sprites/xyani-shiny/'+name_url+'.gif');
      l_reg_url.push('http://play.pokemonshowdown.com/sprites/xyani/'+name_url+'.gif');
    }
    var types_list=[];
    types_list.push(type1[index]);
    if(type2!="")
      types_list.push(type2[index]);

    var egg_groups=[]
    egg_groups.push(egg_group1[index]);
    if(egg_group2[index] != "")
      egg_groups.push(egg_group2[index]);

    nationals.push({
      id: idnum,
      icon: icon_url,
      name: national_poke[index],
      shiny_sprite: l_shiny_url,
      reg_sprite: l_reg_url,
      type_1: type1[index],
      type_2: type2[index],
      types: types_list,
      egg1: egg_group1,
      egg2: egg_group2,
      eggs: egg_groups
    });
    idnum++;
  }
  return {
    all: function() {
      return nationals;
    },
    get: function(nationalId) {
      for (var i = 0; i < nationals.length; i++) {
        if (nationals[i].id === parseInt(nationalId)) {
          return nationals[i];
        }
      }
      return null;
    }
  };

});*/