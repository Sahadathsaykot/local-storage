const getName= () =>{
    const inputField= document.getElementById('inputFieldName');
    const inputValue= inputField.value;
    localStorage.setItem('Name',inputValue);
    inputField.value='';
}

const getEmail= () =>{
    const inputField= document.getElementById('inputFieldEmail')
    const inputValue= inputField.value;
    localStorage.setItem('Email',inputValue);
    inputField.value='';
}

const getMessage= () =>{
    const inputField= document.getElementById('inputFieldMessage');
    const inputValue= inputField.value;
    localStorage.setItem('Message', inputValue);
    inputField.value='';
}

const resetEverything= () =>{
    localStorage.clear()
}