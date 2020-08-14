var canvas, backgroundImage;
var image1, image2, image3, image4;
var track, ground;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
function preload(){
  image1 = loadImage("images/car1.png");
  image2 = loadImage("images/car2.png");
  image3 = loadImage("images/car3.png");
  image4 = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  track = loadImage("images/track.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
