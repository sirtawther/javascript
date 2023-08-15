const addButton = document.querySelector("button#addButton")
const clearButton = document.querySelector("button#clearButton")

const div = document.createElement("div")

const container = document.querySelector("#container")

addButton.addEventListener("click",addNewDiv )


function addNewDiv() {
    div.style.cssText = "width:200px;height:200px;background:green;"
    
    container.appendChild(div)

}

clearButton.addEventListener("click",clearDiv)

function clearDiv() {
    container.removeChild(container.lastElementChild) 
}

