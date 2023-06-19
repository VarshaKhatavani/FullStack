
let starContainer = document.querySelector(".star-container");
let allStars =  document.querySelectorAll(".star");

starContainer.addEventListener("mouseover", function(e){

    let currentSelected = e.target.dataset.index;
    console.log(currentSelected);
    for(let i=0;i<currentSelected;i++){
        allStars[i].classList.add("star-filled");
        if(allStars[i].classList.contains("star-filled")){
            allStars[i].classList.remove("star-filled")
        }
    }

    // for(let i=0;i<currentSelected;i++){
    //     if(allStars[i].classList.contains("star-filled")){
    //         allStars[i].classList.remove("star-filled")
    //     }
    // }
});

starContainer.addEventListener("mouseleave", function(e){

    let currentSelected = e.target.dataset.index;
    console.log(currentSelected);
    for(let i=0;i<currentSelected;i++){
        if(allStars[i].classList.contains("star-filled")){
            allStars[i].classList.remove("star-filled")
        }
    }
});