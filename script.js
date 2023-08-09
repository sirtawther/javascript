let user_input = +prompt("Type a number for countdown");
let output = document.querySelector(".output");

let i = 0;
if (user_input == 0) {
    output.textContent = "Blast off"
} else if (user_input > 10) {
    output.textContent = user_input
} else {

    
    while (i < user_input) {
        let para = document.createElement("p")
        para.textContent = user_input
        output.appendChild(para)
        
        user_input--;
    }

    document.getElementById("blastoff").textContent = "Blast off"
    
}
