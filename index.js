const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let firstEl = document.getElementById("firstPassword")
let secondEl = document.getElementById("secondPassword")
let firstPassword = []
let secondPassword = []
let randomChar1 = ""
let randomChar2 = ""
let slider = document.getElementById("myRange")
let output = document.getElementById("value")

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function getPassword() {
    let firstPassword = ""
    let secondPassword = ""
    
    for (let i = 0; i < slider.value; i++){
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        randomChar1 = characters[randomIndex1]
        firstPassword += randomChar1
        firstEl.textContent = firstPassword
        
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        randomChar2 = characters[randomIndex2]
        secondPassword += randomChar2
        secondEl.textContent = secondPassword
        
    }
    
}

