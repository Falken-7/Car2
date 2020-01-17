class Form{
 constructor(){

 }
 display(){
     var title = createElement('h1');
        title.html("Car Racing Game");
            title.position(260,140);
var input = createInput("");
var button = createButton("Sign Up");
var greeting = createElement('h3');
input.position(260,220);
button.position(260,250);
button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount += 1;
player.update(name);
player.updateCount(playerCount);
greeting.html("Hello " + name)
greeting.position(260,250);
});


}
 }
