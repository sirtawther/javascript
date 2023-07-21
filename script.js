const button = document.querySelector("button");
function greet() {
    const num1  = Number(prompt("Type first number "));
    const num2  = Number(prompt("Type second number "));
    alert(`Solution is, ${num1+num2}`)
}

addEventListener("click",greet)
