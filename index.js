const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const userStart = [230,10];

let currentPosition = userStart;

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
console.log(blocks[0])

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
user.style.left = currentPosition[0] + 'px';
user.style.bottom = currentPosition[1] + 'px';
grid.appendChild(user)
