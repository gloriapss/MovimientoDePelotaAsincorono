//var ball;
var hypnoticBall, database;
var position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    //ball = createSprite(250,250,30,30);
    //ball.shapeColor = "red";

    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "blue";

    var hypnoticBallPosition = database.ref('pelota/posición')
    hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
    background("pink");
    //if (position !== undefined) 
    //{ 
        if(keyDown(LEFT_ARROW))
        {
            writePosition(-1, 0);
            //changePosition(-1,0);
        }    
        else if(keyDown(RIGHT_ARROW))
        {
            writePosition(1, 0);
            //changePosition(1,0);
        }
        else if(keyDown(UP_ARROW))
        {
            writePosition(0, -1);
            //changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW))
        {
            writePosition(0, +1);
            //changePosition(0,+1);
        }
        drawSprites();
    //}   
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function readPosition(data) {
    position = data.val();
    //console.log(position);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}

function writePosition(x, y) {
    database.ref('pelota/posición').set({
        'x': position.x + x, 
        'y': position.y + y
    });
}

function showError(){
    console.log("Error al escribir en la database");
  }