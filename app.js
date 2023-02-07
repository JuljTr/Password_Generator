const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passBtn = document.querySelector("#btn");
let elementOne = document.querySelector("#text-code-one");
let elementTwo = document.querySelector("#text-code-two");
let password = "";

function generateRandomNum() {
    return Math.floor(Math.random() * characters.length);
}

function generatePass() {
    password = ""
    for (i = 0; i <= 15; i++) {
        password += characters[generateRandomNum()];
    }
    return password
}


passBtn.addEventListener("click", () => {
elementOne.textContent = generatePass()
elementTwo.textContent = generatePass()
});
