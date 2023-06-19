let addBtn =  document.querySelector(".add") ;
let subtractBtn = document.querySelector(".subtract");
let input = document.querySelector("input");
let incrDecrBy = 1;
let resetBtn = document.querySelector(".reset");
let counterValue =  document.getElementById("number");
let textValue ; 

input.addEventListener("change",function(){
   textValue =  input.value ;
   if(textValue == ""){
        incrDecrBy = 1;
        return
   }
   incrDecrBy = textValue ;
   console.log("input value -- inside ", textValue);
});


addBtn.addEventListener("click",function(){
    // console.log(incrDecrBy);
    // console.log("input - incre by", textValue);
    // console.log(counterValue.innerText);
    counterValue.innerText = parseInt(counterValue.innerText) + parseInt(incrDecrBy) ;
});


subtractBtn.addEventListener("click",function(){
    // console.log(incrDecrBy);
    // console.log("input - incre by", textValue);
    // console.log(counterValue.innerText);
    let value = parseInt(counterValue.innerText) - incrDecrBy;
    // Restrict values to in minus 
    if(value <0){
        return;
    }
    counterValue.innerText = value ;
});

resetBtn.addEventListener('click',function(){
    counterValue.innerText = 0;
    input.value = "";
    incrDecrBy = 1;
})