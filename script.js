const container = document.querySelector("#container")

const div = document.createElement("div")

const button = document.querySelector("button")
const button_clear = document.querySelector(".clear")


button.addEventListener("click",displayDiv)


function displayDiv() {

    div.setAttribute("style","border:1px solid black;width:200px;height:200px;background:yellow;padding:5px")
    
    div.textContent = "Hello World"
    
    container.appendChild(div)
}


button_clear.addEventListener("click",clearMe)


function clearMe () {
    div.removeAttribute("style")
    div.textContent = ""
}


