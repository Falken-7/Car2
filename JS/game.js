class Game{
    constructor(){

    }
getState(){
    var gameStateRef = database.ref('GAMESTATE');
    gameStateRef.on("value",function(data){
       GAMESTATE = data.val();
    })
}
update(state){
    database.ref('/').update({GAMESTATE:state});
}
start(){
    if(GAMESTATE == 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}
}