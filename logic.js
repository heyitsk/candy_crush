let rows = 9
let colums = 9
let images = ["Blue", "Green", "Orange", "Purple", "Red", "Yellow"]
let currImg;
let dropImg;
let board= [];

window.onload = () => {
    gameStart()

    window.setInterval(function(){
        crushCandy();
        // slideCandy();
        // generateCandy();
    }, 100);
    
}

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
    
    console.log(rStart, cStart);

    let imgDropCord = dropImg.id.split("-"); //this is an array
    // console.log(imgCord);
    let rDrop = parseInt(imgDropCord[0]);
    let cDrop = parseInt(imgDropCord[1]);
    console.log(rDrop, cDrop);

    //we have to restrict the movement to adjacent tiles only-> left right top bottom

    let moveRight = (rStart==rDrop) && (cDrop==cStart+1);
    let moveLeft = (rStart==rDrop) && (cDrop==cStart-1);
    let moveUp = (cStart==cDrop) && (rDrop==rStart-1);
    let moveDown = (cStart==cDrop) && (rDrop==rStart+1)

    let isAdjacent = moveRight || moveLeft || moveDown || moveUp
    if (isAdjacent){
        console.log("is adjacent");
        
        let cimg = currImg.src;
        let dimg = dropImg.src;
        currImg.src = dimg;
        dropImg.src = cimg;
    }
    else{
        console.log("not");
        
    }


    
    



    
}


function crushCandy(){
    crushThree();

    document.getElementById("score").innerText= score;
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
                // score += 30;
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
                    // score += 30;
            }
        }
    }
}

