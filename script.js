let input = document.querySelector("input")

let button = document.querySelector("button")

let output = document.querySelector("#output")

button.addEventListener("click",runProgram)
function runProgram() {
    let number = parseInt(input.value)
    let result = ""
 
    alert(isNaN(number))
    for(let i=1; i<=number; i++){
        if (i % 3 == 0 && i % 5 ==0) {
            result += "FizzBuzz" + "<br>"
        } else if (i % 3 == 0) {
            result += "Fizz" + "<br>"
        }else if(i % 5 == 0) {
            result += "Buzz" + "<br>"
        }
        else {
            result += i + "<br>"
        }
    }
    
    output.innerHTML = result
   


}
