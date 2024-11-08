let rows = 9
let colums = 9
let images = ["Blue", "Green", "Orange", "Purple", "Red", "Yellow"]


window.onload = () => {
    gameStart()
}

function gameStart(){
    const board = document.getElementById("game-container")
    for (i=0; i<rows; i++){
        for (j=0; j<colums; j++){
            let randomSrc = "images/" + images[Math.floor(Math.random() * 6)] + ".png"
            let randomImage= document.createElement("img")
            randomImage.setAttribute("height",50)
            randomImage.setAttribute("width",50)
            randomImage.setAttribute("src",randomSrc)
            randomImage.setAttribute("id", i+"-"+j)
            board.append(randomImage)

            
        }
    }
    
}






//create image -> append in board
//0 - 0.9 *6 
//0 - 5.4
//0 - 5