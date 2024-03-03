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