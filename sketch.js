var backgroundImage;
var canvas;
var GAMESTATE = 0;
var database,playerCount,form,player,game;
function setup(){
  database = firebase.database();
  console.log(database);
  canavs = createCanvas(500,500);
  game  = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  //background("white");
  
   
   // drawSprites();
  
}


