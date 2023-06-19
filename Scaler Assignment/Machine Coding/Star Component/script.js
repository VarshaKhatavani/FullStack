
let starContainer = document.querySelector(".star-container");
let allStars =  document.querySelectorAll(".star");
let filled = 0;

starContainer.addEventListener("click", function (e) {

    let currClicked = e.target.dataset.index;
    
    for (let i = 0; i < 5; i++) {
        allStars[i].classList.remove("star-filled");
    }
    
    for (let i = 0; i < currClicked; i++) {
        allStars[i].classList.add("star-filled");
    }
    
    document.getElementById("count").innerText = `${currClicked}`;
    
    filled = currClicked;
});
    

starContainer.addEventListener("mouseover", function(e){

    let currentSelected = e.target.dataset.index;
    console.log(currentSelected);

    for (let i = 0; i < 5; i++) {
        allStars[i].classList.remove("star-filled");
    }

    for(let i=0;i<currentSelected;i++){
        allStars[i].classList.add("star-filled");
    }
});

starContainer.addEventListener("mouseleave", function(e){

    for (let i = 0; i < 5; i++) {
        allStars[i].classList.remove("star-filled");
    }

    for(let i=0;i<filled;i++){
        allStars[i].classList.add("star-filled");
    }
});