let rows = 9
let colums = 9
let images = ["Blue", "Green", "Orange", "Purple", "Red", "Yellow"]
let currImg;
let dropImg;
let board= [];
let remainingMoves=20;

window.onload = () => {
    gameStart()

    window.setInterval(function(){
        crushCandy();
        slideCandy();
        generateCandy();
    }, 0);
    
}

window.setTimeout(function(){
    score = 0 ;
}, 150);

      
function gameStart(){
    const tile = document.getElementById("game-container")
    for (i=0; i<rows; i++){
        let rowInfo = [];
        for (j=0; j<colums; j++){
            let randomSrc = "images/" + images[Math.floor(Math.random() * 6)] + ".png"
            let randomImage= document.createElement("img")
            randomImage.setAttribute("height",50)
            randomImage.setAttribute("width",50)
            randomImage.setAttribute("src",randomSrc)
            randomImage.setAttribute("id", i+"-"+j)
            tile.append(randomImage)
            rowInfo.push(randomImage);    

            randomImage.addEventListener("dragstart",dragStart)
            randomImage.addEventListener("dragover",dragOver)
            randomImage.addEventListener("drop",Drop)

            randomImage.addEventListener("dragend", dragEnd)

           
        }

       
    
    board.push(rowInfo);
    }
    console.log(board);
}

function dragStart(e){
    currImg = this;
    // console.log(currImg);
    
    
    
}

function dragOver(e){
    // console.log(e);
    
    e.preventDefault()
}
function Drop(){
    dropImg = this
    // console.log(dropImg);
    
    
}
//id = "0-0"
function dragEnd(){
    // if (currImg.src.includes("blank") || dropImg.src.includes("blank")) {
    //     return;
    // }



    let imgStartCord = currImg.id.split("-"); //this is an array
    // console.log(imgCord);
    let rStart = parseInt(imgStartCord[0])
    let cStart = parseInt(imgStartCord[1]);
    
    // console.log(rStart, cStart);

    let imgDropCord = dropImg.id.split("-"); //this is an array
    // console.log(imgCord);
    let rDrop = parseInt(imgDropCord[0]);
    let cDrop = parseInt(imgDropCord[1]);
    // console.log(rDrop, cDrop);

    //we have to restrict the movement to adjacent tiles only-> left right top bottom

    let moveRight = (rStart==rDrop) && (cDrop==cStart+1);
    let moveLeft = (rStart==rDrop) && (cDrop==cStart-1);
    let moveUp = (cStart==cDrop) && (rDrop==rStart-1);
    let moveDown = (cStart==cDrop) && (rDrop==rStart+1)

    let isAdjacent = moveRight || moveLeft || moveDown || moveUp
    if (isAdjacent){
        // console.log("is adjacent");
        
        let cimg = currImg.src;
        let dimg = dropImg.src;
        currImg.src = dimg;
        dropImg.src = cimg;


        let validmove = checkvalid();
        if(!validmove){
            let cimg = currImg.src;
            let dimg = dropImg.src;
            currImg.src = dimg;
            dropImg.src = cimg;
        }
        else{
            remainingMoves--; 
            document.getElementById("remaining-moves").innerText = remainingMoves; 
            checkGameState(); 
        
        }
    
    




    }
    // else{
    //     console.log("not");
        
    // }
    
    
    



    
}

let score = parseInt(document.getElementById("score").innerText)
function crushCandy(){
    
    crushFour();
    crushThree();

    document.getElementById("score").innerText= score
    
}

function crushThree() {
    //check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < colums-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")){
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";

                score += 30;
                

            }
        }
    }

    //check columns
    for (let c = 0; c < colums; c++) {
        for (let r = 0; r < rows-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";

                    score += 30;

            }
        }
    }
}

function crushFour() {
    //check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < colums-3; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            let candy4 = board[r][c+3]
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src==candy4.src && !candy1.src.includes("blank")){
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";

                score += 40;
                

            }
        }
    }

    //check columns
    for (let c = 0; c < colums; c++) {
        for (let r = 0; r < rows-3; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src==candy4.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";

                    score += 40;

            }
        }
    }
}

function checkvalid(){
     //check rows
     for (let r = 0; r < rows; r++) {
        for (let c = 0; c < colums-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")){
                return true;
            }
        }
    }

    //check columns
    for (let c = 0; c < colums; c++) {
        for (let r = 0; r < rows-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                return true;
            }
        }
    }
    return false;
}
function slideCandy() {
    for (let c = 0; c < colums; c++) {
        let ind = rows - 1;
        for (let r = colums-1; r >= 0; r--) {
            if (!board[r][c].src.includes("blank")) {
                board[ind][c].src = board[r][c].src;
                ind -= 1;
            }
        }

        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "./images/blank.png";
        }
    }
}
function generateCandy() {
    for (let c = 0; c < colums;  c++) {
        if (board[0][c].src.includes("blank")) {
            board[0][c].src = "./images/" + images[Math.floor(Math.random() * 6)] + ".png";
        }
    }
}
function checkGameState() {
    if (remainingMoves <= 0) {
        alert("Game Over! You've run out of moves.");
        // Optionally, you can reset the game or navigate to a different screen
    } else if (score >= 300) {
        alert("Congratulations! You've won the game.");
        // Optionally, you can reset the game or navigate to a different screen
    }
}
