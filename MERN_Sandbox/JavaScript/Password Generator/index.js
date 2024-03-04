const inputSlider = document.querySelector("[data-sliderLength]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMessage = document.querySelector("[data-copyMsg]");

const uppercaseCheck = document.getElementById("#uppercase");
const lowercaseCheck = document.getElementById("#lowercase");
const numbersCheck = document.getElementById("#numbers");
const symbolCheck = document.getElementById("#symbols");


const indicator = document.querySelector("[data-indicator]");
const symbol = '~`?><=:,!@#$%^&*(){}[]+-;';

//initialization
let password = "";
let passwordLength = 15 ;
handleSlider();
function handleSlider(){
    console.log('handle slider called')
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

// to set div color according to password strength
function setIndicator(color){
    indicator.style.backgroudColor = color ;
}

function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber(){
   return getRandomInteger(0,9);
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateSymbol(){
    const randNumber = getRandomInteger(0, symbol.length);
    return symbol.charAt(randNumber);
}

function calcStrength(){
    
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;    
    if(numbersCheck.checked) hasNumber = true;
    if(symbolCheck.checked) hasSymbol = true;
    
    if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8){
        setIndicator("#0f0");
    }else if( 
        (hasUpper || hasLower) &&
        (hasNumber || hasSymbol) && 
        passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMessage.innerText = "copied!";
    } catch (e) {
        copyMessage.innerText = "failed to copy";
    }
    copyMessage.classList.add("active");

    setTimeout(()=>{
        copyMessage.classList.remove("active");
    },2000);
}
