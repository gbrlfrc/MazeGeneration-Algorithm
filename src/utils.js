const getIndex = (x, y) => {
    let index;
    (x < 0 || y < 0 || x > floor(windowDim.width/cellW) - 1 || y > floor(windowDim.height/cellW) - 1)
        ? index= -1 
        : index=x+y*floor(windowDim.width/cellW);
    return index;
}

const removeWall = {
    square: 
        (a, b) => {
            var x = a.pos.x - b.pos.x;
            if (x == 1) {
                a.walls[3] = false;
                b.walls[1] = false;
            } else if (x == -1) {
                a.walls[1] = false;
                b.walls[3] = false;
            }
            var y = a.pos.y - b.pos.y;
            if (y == 1) {
                a.walls[0] = false;
                b.walls[2] = false;
            } else if (y == -1) {
                a.walls[2] = false;
                b.walls[0] = false;
            }
        },
    triangle:
        (a, b) => {
            var x = a.pos.x - b.pos.x;
            var y = a.pos.y - b.pos.y;
            if (y===0){
                if (x===1){
                    a.walls[2]=false;
                    b.walls[0]=false;
                }else if (x===-1){
                    a.walls[0]=false;
                    b.walls[2]=false;
                }
            }
            if (y===1){
                if(x===0){
                    a.walls[2]=false;
                    b.walls[1]=false;
                }else if (x ===-1){
                    a.walls[0]=false;
                    b.walls[1]=false;
                }
            }else if (y===-1){
                if(x===0){
                    a.walls[1]=false;
                    b.walls[0]=false;
                }else if(x===-1){
                    a.walls[1]=false;
                    b.walls[2]=false;
                }
            }
        }
}
