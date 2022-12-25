const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')

function getPassword() {
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordlength = 15
let password = ""


    for (let i = 0; i < passwordlength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        let randomCharacer = characters[randomNumber];
        password = password + randomCharacer;
    }
   
return password;
}
function printPassword(){ 
    passwordOne.innerText = getPassword()
    passwordTwo.innerText = getPassword()
}