console.log('Hello! Best of Luck Varsha. You will be successful!');

const copyBtn = document.querySelector("#copy-icon1");
const img = document.querySelector("#image1");

copyBtn.onclick = e => {
    
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
    Tesseract.recognize(img).then(function(result){
         console.log(result.text);
         navigator.clipboard.writeText(result.text);
         console.log("Text Copied!");
        
         let icon =  document.querySelector(".copy-icon");
         icon.classList.add("tooltip","left");
         var anchor = document.querySelector('.tooltip');
        
         let removeTooltip = setTimeout(function removeTooltipClass(){
            icon.classList.remove("tooltip","left");
         }, 2000);
    });

};





