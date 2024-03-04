const pinInput = document.getElementById('pinInput')
const getPin = () =>{
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + '';
    if( pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}

const genaratePin = () =>{
    const pin = getPin()
    pinInput.value = pin;
}

// create mini calculator
const calculator = document.getElementById('key-pad')
const display = document.getElementById('calculate-display')

calculator.addEventListener('click', (event)=>{
   const number = event.target.innerText;
   if( isNaN(number)){
        if ( number === 'C'){
            display.value = ''
        }
   }
   else{
    // const previousNumber = display.value;
    // const newNumber = previousNumber + number;
    // display.value = newNumber;
    display.value += number;
   }
})

// pin match
const showMessage = document.getElementById('show-message')

const isPinMatch = () =>{
    if ( pinInput.value === display.value){
        showMessage.style.display = 'block';
        showMessage.innerText =  "✅ Pin Matched... Secret door is opening for you"
    }else{
        showMessage.style.display = 'block';
        showMessage.innerText = "❌ Pin Didn't Match, Please try again"
    }
}