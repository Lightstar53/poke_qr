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
    l_shiny_url.push('http://www.serebii.net/Shiny/SM/'+pokenum+'.png');

    var l_reg_url = [];
    l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'.png');

    if(sm_pokemon_name[index] == "Oricorio"){
      l_poke_name.push("Oricorio Baile");
      l_poke_name.push("Oricorio Pom-Pom");
      l_poke_name.push("Oricorio Pa'u");
      l_poke_name.push("Oricorio Sensu");
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-p.png');
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-pau.png');
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-s.png');
      l_shiny_url.push('http://www.serebii.net/Shiny/SM/'+pokenum+'-p.png');
      l_shiny_url.push('http://www.serebii.net/Shiny/SM/'+pokenum+'-pau.png');
      l_shiny_url.push('http://www.serebii.net/Shiny/SM/'+pokenum+'-s.png');
    }
    else if(sm_pokemon_name[index] == "Lycanroc")
    {
      l_poke_name.push("Lycanroc Midday");
      l_poke_name.push("Lycanroc MidNight");
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-m.png');
      l_shiny_url.push('http://www.serebii.net/Shiny/SM/'+pokenum+'-m.png');
    }
    else if(sm_pokemon_name[index] == "Wishiwashi")
    {
      l_poke_name.push("Wishiwashi Solo");
      l_poke_name.push("Wishiwashi School");
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-s.png');
      l_shiny_url.push('http://www.serebii.net/Shiny/SM/'+pokenum+'-s.png');
    }
    else if(sm_pokemon_name[index] == "Minior")
    {
      l_poke_name.push("Minior Core");
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-b.png');
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-g.png');
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-i.png');
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-o.png');
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-r.png');
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-v.png');
      l_reg_url.push('http://www.serebii.net/sunmoon/pokemon/'+pokenum+'-y.png');
      l_shiny_url.push('http://www.serebii.net/Shiny/SM/'+pokenum+'-i.png');
    }

    var types =sm_types[index].slice(1,sm_types[index].length-1);

    var regex = new RegExp(',', 'g');
    types = types.replace(regex, '\ ');
    types = types.split(" ");

    var egg_groups=[]
    egg_groups.push(egg_group1[index]);
    if(egg_group2[index] != "")
      egg_groups.push(egg_group2[index]);
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
      code: 'img/qr_new/qr_new ('+idnum+').png'
    });
    idnum++;
    pokenum++;
  }


  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
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

})

.factory('Codes', function() {

  var codes=[];
  var idnum =1;

  // Number of qr codes
  for (var index=0; index<472; index++){
    codes.push({
    id: idnum,
    img: 'img/QR/qr ('+idnum+').png'
  });
    idnum++;
  }
  return {
    all: function() {
      return codes;
    },
    get: function(codeID) {
      for (var i = 0; i < codes.length; i++) {
        if (codes[i].id === parseInt(codeID)) {
          return codes[i];
        }
      }
      return null;
    }
  };

})

.factory('Alolan', function() {

  var alolans=[];
  var idnum =1;

  var alolan_poke="Rowlet Dartrix Decidueye Litten Torracat Incineroar Popplio Brionne Primarina Pikipek Trumbeak Toucannon Yungoos Gumshoos Rattata-Alolan Raticate-Alolan Caterpie Metapod Butterfree Ledyba Ledian Spinarak Ariados Pichu Pikachu Raichu-Alolan Grubbin Charjabug Vikavolt Bonsly Sudowoodo Happiny Chansey Blissey Munchlax Snorlax Slowpoke Slowbro Slowking Wingull Pelipper Abra Kadabra Alakazam Meowth-Alolan Persian-Alolan Magnemite Magneton Magnezone Grimer-Alolan Muk-Alolan Growlithe Arcanine Drowzee Hypno Makuhita Hariyama Smeargle Crabrawler Crabominable Gastly Haunter Gengar Drifloon Drifblim Misdreavus Mismagius Zubat Golbat Crobat Diglett-Alolan Dugtrio-Alolan Spearow Fearow Rufflet Braviary Vullaby Mandibuzz Mankey Primeape Delibird Oricorio Cutiefly Ribombee Petilil Lilligant Cottonee Whimsicott Psyduck Golduck Magikarp Gyarados Barboach Whiscash Machop Machoke Machamp Roggenrola Boldore Gigalith Carbink Sableye Rockruff Lycanroc Spinda Tentacool Tentacruel Finneon Lumineon Wishiwashi Luvdisc Corsola Mareanie Toxapex Shellder Cloyster Bagon Shelgon Salamence Lillipup Herdier Stoutland Eevee Vaporeon Jolteon Flareon Espeon Umbreon Leafeon Glaceon Sylveon Mudbray Mudsdale Igglybuff Jigglypuff Wigglytuff Tauros Miltank Surskit Masquerain Dewpider Araquanid Fomantis Lurantis Morelull Shiinotic Paras Parasect Poliwag Poliwhirl Poliwrath Politoed Goldeen Seaking Feebas Milotic Alomomola Fletchling Fletchinder Talonflame Salandit Salazzle Cubone Marowak-Alolan Kangaskhan Magby Magmar Magmortar Stufful Bewear Bounsweet Steenee Tsareena Comfey Pinsir Oranguru Passimian Goomy Sliggoo Goodra Castform Wimpod Golisopod Staryu Starmie Sandygast Palossand Cranidos Rampardos Shieldon Bastiodon Archen Archeops Tirtouga Carracosta Phantump Trevenant Nosepass Probopass Pyukumuku Chinchou Lanturn Type-Null Silvally Zygarde Trubbish Garbodor Skarmory Ditto Cleffa Clefairy Clefable Minior Beldum Metang Metagross Porygon Porygon2 Porygon-Z Pancham Pangoro Komala Torkoal Turtonator Togedemaru Elekid Electabuzz Electivire Geodude-Alolan Graveler-Alolan Golem-Alolan Sandile Krokorok Krookodile Trapinch Vibrava Flygon Gible Gabite Garchomp Klefki Mimikyu Bruxish Drampa Absol Snorunt Glalie Froslass Sneasel Weavile Sandshrew-Alolan Sandslash-Alolan Vulpix-Alolan Ninetales-Alolan Vanillite Vanillish Vanilluxe Snubbull Granbull Shellos Gastrodon Relicanth Dhelmise Carvanha Sharpedo Wailmer Wailord Lapras Exeggcute Exeggutor-Alolan Jangmo-o Hakamo-o Kommo-o Emolga Scyther Scizor Murkrow Honchkrow Riolu Lucario Dratini Dragonair Dragonite Aerodactyl Tapu-Koko Tapu-Lele Tapu-Bulu Tapu-Fini Cosmog Cosmoem Solgaleo Lunala Nihilego Buzzwole Pheromosa Xurkitree Celesteela Kartana Guzzlord Necrozma Magearna Marshadow".split(" ");
  

  // Number of qr codes
  for (var index=0; index<alolan_poke.length; index++){

    var name_url = alolan_poke[index].toLowerCase();

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

    alolans.push({
    id: idnum,
    icon: icon_url,
    name: alolan_poke[index]
  });
    idnum++;
  }
  return {
    all: function() {
      return alolans;
    },
    get: function(alolanID) {
      for (var i = 0; i < alolans.length; i++) {
        if (alolans[i].id === parseInt(alolanID)) {
          return alolans[i];
        }
      }
      return null;
    }
  };

});
