var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "pink";
}

function draw() {
    if(keyDown(LEFT_ARROW)) {
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
}

function changePosition(x,y) {
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
