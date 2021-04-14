class Triangle{
    constructor(pos, offset){
        this.pos=pos;
        this.offset=offset;
        this.visited=false;
        this.walls=[true, true, true];
    }

    getNeighbors(){
        const neig=[];
        const neigPos = {
            topLeft: grid[getIndex(this.pos.x, this.pos.y-1)],
            topRight: grid[getIndex(this.pos.x+1, this.pos.y-1)],
            bottomLeft: grid[getIndex(this.pos.x, this.pos.y+1)],
            bottomRight: grid[getIndex(this.pos.x+1, this.pos.y+1)],
            left: grid[getIndex(this.pos.x-1, this.pos.y)],
            right: grid[getIndex(this.pos.x+1, this.pos.y)],
        }
        if (neigPos.topLeft && !neigPos.topLeft.visited) neig.push(neigPos.topLeft);
        if (neigPos.topRight && !neigPos.topRight.visited) neig.push(neigPos.topRight);
        if (neigPos.bottomLeft && !neigPos.bottomLeft.visited) neig.push(neigPos.bottomLeft);
        if (neigPos.bottomRight && !neigPos.bottomRight.visited) neig.push(neigPos.bottomRight);
        if (neigPos.left && !neigPos.left.visited) neig.push(neigPos.left);
        if (neigPos.right && !neigPos.right.visited) neig.push(neigPos.right);

        if (neig.length > 0) return neig[floor(random(0, neig.length))];
        else return undefined;
    }

    highlight(){
        fill(0);
        triangle(
            (this.pos.x*cellW)+(cellW/2), this.pos.y*cellW,
            (this.pos.x*cellW)+cellW, (this.pos.y*cellW)+cellW,
            (this.pos.x*cellW), (this.pos.y*cellW)+cellW);
    }

    show(){
        let x; let y;
        this.offset 
            ? (x=(this.pos.x*cellW)+(cellW/2), y=this.pos.y*cellW)
            : (x=this.pos.x*cellW, y=this.pos.y*cellW)
        this.walls[0] ? line(x+cellW/2, y, x+cellW, y+cellW) : null;
        this.walls[1] ? line(x+cellW, y+cellW, x, y+cellW) : null;
        this.walls[2] ? line(x, y+cellW, x+cellW/2, y) : null;
    }
}