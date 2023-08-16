const para1 = document.createElement("p")
const h3 = document.createElement("h3")


const container = document.querySelector("#container")

para1.setAttribute("style","color:red;")
h3.setAttribute("style","color:blue;")

para1.textContent = "Hey I am Red"
h3.textContent = "Hey I am Blue"

container.appendChild(para1)
container.appendChild(h3)


const div = document.createElement("div")
const h1 = document.createElement("h1")
const para2 = document.createElement("p")

h1.textContent = "I’m in a div"
para2.textContent = "Me too"

container.appendChild(div)
div.appendChild(h1)
div.appendChild(para2)

