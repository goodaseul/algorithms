function solution(keyinput, board) {
    const direction = {
        "up" : [0,1],
        "down" : [0, -1],
        "left" : [-1, 0],
        "right" : [1,0]    
    }
    let x = 0;
    let y = 0;
    let maxX = Math.floor(board[0] / 2)
    let maxY = Math.floor(board[1] / 2)
    keyinput.forEach((dir, num) => {
        let nextX = x + direction[dir][0]
        let nextY = y + direction[dir][1]
        if(Math.abs(nextX) <= maxX && Math.abs(nextY) <= maxY){
            x = nextX,
            y = nextY
        }
    })
    return [x,y]
}

