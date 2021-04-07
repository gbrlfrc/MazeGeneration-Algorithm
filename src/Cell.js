class Cell {
    constructor(pos){
        this.pos = pos;
        this.visited = false;
        this.walls = [true, true, true, true];
    }

    getNeighbors(){
        const neig=[];
        const neigPos = {
            top: grid[getIndex(this.pos.x, this.pos.y-1)],
            bottom: grid[getIndex(this.pos.x, this.pos.y+1)],
            left: grid[getIndex(this.pos.x-1, this.pos.y)],
            right: grid[getIndex(this.pos.x+1, this.pos.y)],
        }
        if (neigPos.top && !neigPos.top.visited) neig.push(neigPos.top);
        if (neigPos.bottom && !neigPos.bottom.visited) neig.push(neigPos.bottom);
        if (neigPos.left && !neigPos.left.visited) neig.push(neigPos.left);
        if (neigPos.right && !neigPos.right.visited) neig.push(neigPos.right);

        if (neig.length > 0) return neig[floor(random(0, neig.length))];
        else return undefined;
    }

    highlight(){
        noStroke();
        fill(0);
        rect(this.pos.x*cellW, this.pos.y*cellW, cellW, cellW);
    }

    show(){
        stroke(0)
        const x=this.pos.x*cellW;
        const y=this.pos.y*cellW;
        this.walls[0] ? line(x, y, x+cellW, y) : null;
        this.walls[1] ? line(x+cellW, y, x+cellW, y+cellW): null;
        this.walls[2] ? line(x+cellW, y+cellW, x, y+cellW): null;
        this.walls[3] ? line(x, y+cellW, x, y): null;
        
    }
}