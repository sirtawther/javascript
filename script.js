const button = document.querySelector("button")

function sumTwoNumber() {
    const num1 = prompt("Type num1: ")
    const num2 = prompt("Type num2: ")
    const output = Number(num1)+Number(num2)
    document.getElementById("info").innerHTML = `You are adding ${num1} with ${num2}.`
    document.getElementById("header").innerHTML = `Output result is ${output}.`
}

addEventListener("click",sumTwoNumber)
