const fullimgbox = document.getElementById("fullimgbox");
 imgelement = document.getElementById("img-element");
 rightbtn = document.getElementById("right-btn");
 leftbtn = document.getElementById("left-btn");
 closeimg = document.getElementById("closeimg"); 
 listaimg = [... document.querySelectorAll(".img")];

let indeximg = 0;

 listaimg.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        clicked(i)
        fullimgbox.style.display = "flex";
        imgelement.src = img.src
    });
});

function clicked(position){
    indeximg = position;
    imgelement.src = listaimg[indeximg].src;
}

rightbtn.addEventListener("click" , e =>{
    if(indeximg >= listaimg.length-1 ){
        indeximg  = -1;
    }
    indeximg++;
    imgelement.src = listaimg[indeximg].src;
});

leftbtn.addEventListener("click" , e =>{
    if(indeximg <= 0 ){
        indeximg  = listaimg.length;
    }
    indeximg--;
    imgelement.src = listaimg[indeximg].src;
});

closeimg.addEventListener("click", e => fullimgbox.style.display = "none");
fullimgbox.addEventListener("click", e => {
    if (e.target.classList.contains("full-img")) {
        fullimgbox.style.display = "none";
    }
});