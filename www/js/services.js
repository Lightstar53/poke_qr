angular.module('starter.services', [])

.factory('Chats', function() {

  var pokenum = 722;
  var idnum =0;
  var name_text=['Rowlet',
'Dartrix',
'Decidueye',
'Litten',
'Torracat',
'Incineroar',
'Popplio',
'Brionne',
'Primarina',
'Pikipek',
'Trumbeak',
'Toucannon',
'Yungoos',
'Gumshoos',
'Grubbin',
'Charjabug',
'Vikavolt',
'Crabrawler',
'Crabominable',
'Oricorio',
'Cutiefly',
'Ribombee',
'Rockruff',
'Lycanroc',
'Wishiwashi',
'Mareanie',
'Toxapex',
'Mudbray',
'Mudsdale',
'Dewpider',
'Araquanid',
'Fomantis',
'Lurantis',
'Morelull',
'Shiinotic',
'Salandit',
'Salazzle',
'Stufful',
'Bewear',
'Bounsweet',
'Steenee',
'Tsareena',
'Comfey',
'Oranguru',
'Passimian',
'Wimpod',
'Golisopod',
'Sandygast',
'Palossand',
'Pyukumuku',
'Type: Null',
'Silvally',
'Minior',
'Komala',
'Turtonator',
'Togedemaru',
'Mimikyu',
'Bruxish',
'Drampa',
'Dhelmise',
'Jangmo-o',
'Hakamo-o',
'Kommo-o',
'Tapu Koko',
'Tapu Lele',
'Tapu Bulu',
'Tapu Fini',
'Cosmog',
'Cosmoem',
'Solgaleo',
'Lunala',
'Nihilego',
'Buzzwole',
'Pheromosa',
'Xurkitree',
'Celesteela',
'Kartana',
'Guzzlord',
'Necrozma',
'Magearna',
'Marshadow'
];

  var chats=[];

  // Number of new pokemon
  for (var index=0; index<81; index++){

    var name_url = name_text[index].toLowerCase();
    
    /*
    // Special cases
    switch(name_text[index]) {
    case "Wishiwashi:
        name_url = name_text[index].toLowerCase()+'-'+"solo";
        break;
    case n:
        code block
        break;
    default:
        default name_url = name_url;
        */
    var icon_url = 'https://img.pokemondb.net/artwork/'+name_url+'.jpg';
    

    if(name_url == name_text[index].toLowerCase())

    chats.push({
    id: idnum,
    name: name_text[index],
    lastText: '#'+pokenum,
    face: 'http://www.serebii.net/Shiny/SM/'+pokenum+'.png',
    reg_face: 'http://www.serebii.net/sunmoon/pokemon/'+pokenum+'.png',
    icon: icon_url
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

  // Number of new pokemon
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

});

