const windowDim = {width: window.innerWidth, height: window.innerHeight}
let cellW=40;
let grid = [];
let currentCell;
let stack=[];
let shape=window.location.href.split('?')[1].split('=')[1];


function setup(){
    createCanvas(windowDim.width, windowDim.height);
    for(let i=0;i<floor(windowDim.height/cellW); i++){
        for (let j=0; j<floor(windowDim.width/cellW); j++){
            if(shape=='square') grid.push(new Cell({x:j, y:i}));
            else if (shape=='triangle'){
                i%2!==0 
                    ?grid.push(new Triangle({x:j, y:i}, true)) 
                    : grid.push(new Triangle({x:j, y:i}, false));
            }
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

    let nextCell = currentCell.getNeighbors();
    if (nextCell) {
        nextCell.visited=true;
        nextCell.highlight();
        stack.push(currentCell);
        if (shape == 'square')removeWall.square(currentCell, nextCell);
        else if(shape == 'triangle')removeWall.triangle(currentCell, nextCell);
        currentCell=nextCell;
    }else if(stack.length>0) currentCell=stack.pop();   
}