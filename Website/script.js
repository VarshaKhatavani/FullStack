console.log('Hello! Best of Luck Varsha. You will be successful!');

const copyBtn = document.getElementsByTagName("button");
console.log(copyBtn);

// const buttonPressed = e => {
//     console.log(e.target.id);  // Get ID of Clicked Element
// }

for (let button of copyBtn) {
    button.addEventListener("click", function(e){
        //console.log(e.target.id);
        let btnId = e.currentTarget.id;
        console.log(btnId);

        let imageId = btnId.slice(0, -4);
        console.log(imageId);

        const img = document.getElementById(imageId);
        console.log(img);

        // Convert image to text 
        Tesseract.recognize(img).then(function(result){
            console.log(result.text);
            navigator.clipboard.writeText(result.text);
            console.log("Text Copied!");
            
            let icon =  document.getElementById(btnId);
            icon.classList.add("tooltip","left");
            var anchor = document.querySelector('.tooltip');
            
            let removeTooltip = setTimeout(function removeTooltipClass(){
                icon.classList.remove("tooltip","left");
            }, 2000);
        });     
    });
}

var anchors = document.querySelectorAll('.anchor-js');

for (var i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', e=> { handler(e) });
}

function handler(e){
    
    let allDiv = document.querySelectorAll(".section-div");
    console.log('clicked anchor...', e.currentTarget.dataset.id);
    let contentId = e.currentTarget.dataset.id ; 
    let displayDiv = document.getElementById(contentId); 

    for(let i=0;i<allDiv.length;i++){
      let isVisible =  allDiv[i].getAttribute("data-id") ; 
      if(isVisible != null){
        console.log(displayDiv.getAttribute("style"))
        allDiv[i].style.display = "none";
      }
    }

    displayDiv.style.display = "block";
    displayDiv.setAttribute("data-id","show");  

    // console.log('clicked anchor...', e.currentTarget.dataset.id);
    // let contentId = e.currentTarget.dataset.id ; 
    // let displayDiv = document.getElementById(contentId);
    // if(displayDiv.getAttribute("data-id") == null){
    //     displayDiv.style.display = "block";
    //     console.log(displayDiv.getAttribute("data-id"));
    // }
    // else{
    //     displayDiv.style.display = "hide";
    // }
    // displayDiv.setAttribute("data-id","hide");

}


//var parentDiv = copyBtn.parentElement;
//console.log(parentDiv);
//let imageId = parentDiv.childNodes[1].childNodes[1].id;

//const img = document.getElementById(imageId);

//copyBtn.onclick = e => {
    
   // Copy Image to clipboard
   //  const canvas = document.createElement("canvas");
   //  canvas.width = img.width;
   //  canvas.height = img.height;
   //  canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);
   //  canvas.toBlob((blob) => {
   //    navigator.clipboard.write([
   //        new ClipboardItem({ "image/png": blob })
   //    ]);
   //  }, "image/png");

    // Convert image to text 
    // Tesseract.recognize(img).then(function(result){
    //      console.log(result.text);
    //      navigator.clipboard.writeText(result.text);
    //      console.log("Text Copied!");
        
    //      let icon =  document.querySelector(".copy-icon");
    //      icon.classList.add("tooltip","left");
    //      var anchor = document.querySelector('.tooltip');
        
    //      let removeTooltip = setTimeout(function removeTooltipClass(){
    //         icon.classList.remove("tooltip","left");
    //      }, 2000);
    // });

//};





