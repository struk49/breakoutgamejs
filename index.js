const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const userStart = [230,10];
const boardWidth = 560;
const boardHeight = 300
let timerId
let xDirection = 2;
let yDirection = 2;

let currentPosition = userStart;

const ballStart = [270,40];
let ballCurrentPosition = ballStart

//create block
class block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all my blocks
const blocks = [
   
    new block(10, 270),
    new block(120, 270),
    new block(230, 270),
    new block(340, 270),
    new block(450, 270),
    new block(10, 240),
    new block(120, 240),
    new block(230, 240),
    new block(340, 240),
    new block(450, 240),
    new block(10, 210),
    new block(120, 210),
    new block(230, 210),
    new block(340, 210),
    new block(450, 210),
]


//draw all my blocks
function addBlocks(){
for (let i = 0; i < blocks.length; i++){
   const block = document.createElement('div');
   block.classList.add('block') 
   block.style.left = blocks[i].bottomLeft[0] + 'px'
   block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
  }
}

addBlocks()

//add user
const user = document.createElement('div');
user.classList.add('user')
drawUser()
grid.appendChild(user)

//draw user
function drawUser(){
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

//draw the ball
function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px' 
}


//movimg user
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 0) {
              currentPosition[0] -= 10
            drawUser()
            }

            break;
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth){
                currentPosition[0] += 10
                drawUser()
            }
            break;
            
    }
}

document.addEventListener('keydown', moveUser)

//add a ball
const ball = document.createElement('div');
ball.classList.add('ball')
ball.style.left = ballCurrentPosition[0] + 'px'
ball.style.bottom = ballCurrentPosition[1] + 'px'
drawBall()
grid.appendChild(ball)

//move the ball
function moveBall(){
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}

timerId = setInterval(moveBall, 30)

//check for collisions
function checkForCollisions(){
    //check for wall colisions
    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) ||
        ballCurrentPosition[1] >= boardHieght - ballDiameter){
        changeDirection()
    }
}

function changeDirection(){
    if (xDirection === 2 && yDirection === 2){
        xDirection = -2
        return
    }
}
