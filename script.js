var quoteObject = {
  Abel: "Street fighting is all about analysis, predictions and reaction Thats it.",

  Adon: "Muay Thai is the single most powerful art on the face of the planet!",

  Akuma: "The true fighter can stare death in the face and lash out in rage against it!",

  Balrog: "Nothin' feels as satisyin' as knockin' chumps out with these here fists!",

  Bison: "My psycho power feeds on hatred and death!",

  Blanka: "The king of the Jungle is the King of the world",

  Cammy: "Size and strength are no use if you can't hit me",

  "Chun Li": "Keep an eye on my father, I wont let you down",

  Cody: "Fighting like this brings back lots of memories",

  "C.Viper": "You were awfully reckless back there. Are you looking to get hazard pay?",

  Dan: "Keep an eye on my father, I won't let the Saikyo arts down!"
};

var arr = Object.keys(quoteObject);

function buildQuotes() {
    var count = Math.floor(Math.random()*(arr.length));
    document.getElementById("quote").innerHTML = '"' + quoteObject[arr[count]] + '"';
    document.getElementById("author").innerHTML = arr[count];

  }

function click(){
  var b = document.getElementById('but');
  b.onclick = buildQuotes();
}
