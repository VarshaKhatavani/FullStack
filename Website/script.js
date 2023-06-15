

async function copyToClipboard() {
   alert('Hello! Best of Luck Varsha. You will be successful!');

   const response = await fetch('/Code-Examples/psudo-code.png');
   
   console.log(response.blob);

   const blob = await response.blob;

   await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);

}