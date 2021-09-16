var ballen = [];
var superballen = [];

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  for (var i = 0; i < 25; i++) {
    var randomx = random(50, 1230);
    var randomy = random(50, 670);
    var randomSpeedX = random (-5, 5);
    var randomSpeedY = random (-5, 5);

    var bal = new Bal(randomx, randomy, randomSpeedX, randomSpeedY);

    ballen.push(bal);
  }

    for (var i = 0; i < 1; i++) {
    var randomx = random(50, 1230);
    var randomy = random(50, 670);
    var randomSpeedX = random (-5, 5);
    var randomSpeedY = random (-5, 5);
    var randomKleurR = random(0,255);
    var randomKleurG = random(0,255);
    var randomKleurB = random(0,255);

    var superbal = new Superbal(randomx, randomy, randomSpeedX, randomSpeedY, randomKleurR, randomKleurG, randomKleurB);

    superballen.push(bal);
  }
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  for(var i = 0; i < ballen.length; i++) {
    ballen[i].show();
    ballen[i].update();
  }

  for(var i = 0;i < superballen.length;i++) {
    superballen[i].show();
    superballen[i].update();
  }
}