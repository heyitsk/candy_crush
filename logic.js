let rows = 9
let colums = 9
let images = ["Blue", "Green", "Orange", "Purple", "Red", "Yellow"]
let currImg;
let dropImg;

window.onload = () => {
    gameStart()
}

function gameStart(){
    const board = document.getElementById("game-container")
    for (i=0; i<rows; i++){
        let rowInfo = [];
        for (j=0; j<colums; j++){
            let randomSrc = "images/" + images[Math.floor(Math.random() * 6)] + ".png"
            let randomImage= document.createElement("img")
            randomImage.setAttribute("height",50)
            randomImage.setAttribute("width",50)
            randomImage.setAttribute("src",randomSrc)
            randomImage.setAttribute("id", i+"-"+j)
            board.append(randomImage)
            rowInfo.push(i+"-"+j);
            

            randomImage.addEventListener("dragstart",dragStart)
            randomImage.addEventListener("dragover",dragOver)
            randomImage.addEventListener("drop",Drop)

            randomImage.addEventListener("dragend", dragEnd)


        }

        
    }
    
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
    if (currImg.src.includes("blank") || dropImg.src.includes("blank")) {
        return;
    }



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