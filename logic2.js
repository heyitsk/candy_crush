var currimg;
var nxtimg;

randomImage.addeventlistener("dragstart",()=>{
    currimg = this;
})

randomImage.addeventlistener("dragover",(e)=>{
    e.preventdefault();
})

randomImage.addeventlistener("dragenter",(e)=>{
    e.preventdefault();
})

randomImage.addeventlistener("dragleave",()=>{
    e.preventdefault();
})

randomImage.addeventlistener("dragdrop",()=>{
    nxtimg = this;
})

randomImage.addeventlistener("dragend",()=>{
    
    let currtile = currimg.src;
    let othertile = nxtimg.src;
    currimg.src=othertile;
    nxtimg.src=currtile;
})