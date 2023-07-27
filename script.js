const  x = +prompt("What is x?");
const n = +prompt("What is n?");
const result = document.querySelector("#result")

function pow(x,n) {
    return x ** n
}

result.textContent = pow(x,n)
