const windowDim = {width: window.innerWidth, height: window.innerHeight}
let cellW=40;
let grid = [];
let currentCell;
let stack=[];

function setup(){
    createCanvas(windowDim.width, windowDim.height);
    for(let i=0;i<floor(windowDim.height/cellW); i++){
        for (let j=0; j<floor(windowDim.width/cellW); j++){
            grid.push(new Cell({x:j, y:i}))
        }
    }
    currentCell=grid[0];
}

function draw(){
    background(255);

    for(let c of grid){
        c.show();
    }
    currentCell.visited=true;
    currentCell.highlight();
    console.log(currentCell.getNeighbors());

    let nextCell = currentCell.getNeighbors();
    if (nextCell) {
        nextCell.visited=true;
        stack.push(currentCell);
        removeWall(currentCell, nextCell);
        currentCell=nextCell;
    }else if(stack.length>0) currentCell=stack.pop();
}