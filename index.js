const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstEl = document.getElementById("firstPassword")
let secondEl = document.getElementById("secondPassword")
let firstPassword = []
let secondPassword = []
let getLength = document.getElementById("passLength")



function getPassword(){
    
    let passCode = Math.floor(Math.random() * characters.length)
    
    for (let i = 0; i < characters.length; i++)
    firstEl.textContent = firstPassword.join("")
    {
        if (firstPassword.length < passLength.value) {
            firstPassword.push(characters[passCode])
            return getPassword()
            console.log(firstPassword)
        } else if (secondPassword.length < passLength.value) {
            secondPassword.push(characters[passCode])
            secondEl.textContent = secondPassword.join("")
            return getPassword()
            console.log(firstPassword)
            
        }
        
        
        } 
        
    }

    