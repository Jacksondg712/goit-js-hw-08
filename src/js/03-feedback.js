const form = document.querySelector(".feedback-form");
const DataEmail =  document.querySelector("#inputEmail");
const DataText =   document.querySelector("#inputText");
let outEmail, outText;

function loadPage(){
    if(!localStorage.getItem("feedback-form-state-email")){
        document.getElementById("inputEmail").value =  "";
        document.getElementById("inputText").value =  "";
        return;
    }
    else{
        document.getElementById("inputEmail").value = localStorage.getItem("feedback-form-state-email");
        document.getElementById("inputText").value = localStorage.getItem("feedback-form-state-text");
    }
}


DataEmail.addEventListener("blur", (dataEmail) => {
    const newdataEmail = dataEmail.currentTarget.value;
    outEmail = newdataEmail;
    localStorage.setItem("feedback-form-state-email", outEmail);
    
});

DataText.addEventListener("blur", (dataText) => {
    const newdataText = dataText.currentTarget.value;
    outText = newdataText;
    localStorage.setItem("feedback-form-state-text", outText);

    
    
});

window.addEventListener("load", function(event){
    loadPage();
    event.preventDefault();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const json = {
        email : localStorage.getItem("feedback-form-state-email"),
        text : localStorage.getItem("feedback-form-state-text")
    };
    console.log(json);
    document.getElementById("inputEmail").value =  "";
    document.getElementById("inputText").value =  "";
    localStorage.clear();
    
    
        
});




