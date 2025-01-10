
let stringAllLetters = ""
let password = ""
function makeStringAllLetters()
{
    let i
    //adding numbers
    for(i=0; i<10 ; i++)
        {
            stringAllLetters+=`${i}`
        }
        //adding letters
        for(i = 65; i<123; i++)
            {
                if (i<91 || i>96)
                    stringAllLetters+=`${String.fromCharCode(i)}`
            }
            
            
}
        
function makePassword() {
    saveEl.style.fontSize = "20px"
    password = ""
    let i
    let length =Math.floor(Math.random() * 20)+5; //random 5-24 
    if (length>20)
        saveEl.style.fontSize = "10px"
    for (i = 0 ; i< length ; i++)
        {
            password+= `${stringAllLetters[Math.floor(Math.random() * stringAllLetters.length)]}`
        }
        //print password
        console.log(password)
        saveEl.textContent = password
        
    }
       
function notify(message) {
    browser.runtime.sendMessage({content: "Function call: " + message});
}
function copyPassword()
{
    // Copy the text inside the text field
    navigator.clipboard.writeText(password);
    
    alert("Copied the text: " + password);
    
    
    notify("copy to clip Board: "+password)
}
            
            
makeStringAllLetters()
let saveEl = document.getElementById("password-el")
let buttonMake = document.getElementById("make-btn")
let buttonSave = document.getElementById("copy-btn")
buttonMake.addEventListener("click" , makePassword)
buttonSave.addEventListener("click" , copyPassword)

console.log(stringAllLetters)