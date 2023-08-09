let calculate_button = document.querySelector("#calculate")
let clear_button = document.querySelector("#clear")

let message = ""

calculate_button.addEventListener("click", () => {


    for (let i=1; i < 10; i++) {
        message += `${i} x ${i} = ${i*i} <br>`
    }
    
    message += "Finished"


    document.getElementById("result").innerHTML =message
})


clear_button.addEventListener("click", () => {
    document.getElementById("result").innerHTML = ""
    message = ""
})



