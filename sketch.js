var carlo,carloimage;
var andy,andyimage;
var mountain,mountainimage;
var bg,bgimage;
var ground;
var volcano,volcanoimage;
var dragon,dragonImage;
var coin,coinImage;

function preload(){
 carloimage=loadAnimation("carlo.gif")   
 bgimage=loadImage("bg2.jpg") 
 mountainimage=loadImage("mountain3.png")      
 volcanoImage=loadAnimation("volcano2.gif")  
 //dragonImage=loadAnimation("0.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","11.gif","12.gif","13.gif","14.gif","15.gif","16.gif","17.gif","18.gif","19.gif")        
 dragonImage=loadAnimation("dino2.gif")
 coinImage=loadImage("Coin.png")
}

function setup() {
  createCanvas(800,400);
  bg=createSprite(400,200)
  bg.addImage(bgimage)
  bg.scale=1.5
carlo=createSprite(150,270)
carlo.scale=0.40
carlo.addAnimation("running",carloimage)
ground=createSprite(400,350,800,20)



}





function draw() {
  
  background(0);
  
  
  fill ("white")
 text(mouseX+","+mouseY,mouseX,mouseY)
 if(keyDown("space") && carlo.y >= 159) {
  carlo.velocityY = -12;}
  carlo.velocityY = carlo.velocityY + 0.8
  carlo.collide(ground)
  //if(carlo.isTouching(coin)){
  //score+=1
  //}
  spawnmountains()
  spawnDragon()
  spwanCoins()
  drawSprites(); 
}

function spawnmountains(){
if(frameCount%350===0){
mountain=createSprite(800,320,10,10)
var r=Math.round(random(1,2))
if(r===1){
mountain.addImage(mountainimage)
mountain.scale=0.15
mountain.y=380
}
if(r===2){
mountain.addAnimation("moving", volcanoImage )
mountain.scale=1
}
mountain.velocityX=-3


}

}
function spawnDragon(){
if(frameCount%300===0){
 dragon=createSprite(800,270,10,10) 
 dragon.addAnimation("flying",dragonImage)
dragon.velocityX=-6
dragon.scale=0.5
}
}

function spwanCoins(){
if(frameCount%237===0){
 coin=createSprite(800,100,10,10)
 coin.addImage(coinImage) 
 coin.velocityX=-4
 coin.scale=0.05
 

} 

}





