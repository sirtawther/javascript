const button = document.querySelector("button")

function sumTwoNumber() {
    let login = prompt("Type your login");
    let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No Login':
    'I don\'t recoginized you!'; 
    alert(`"${message}"`)

    
}

addEventListener("click",sumTwoNumber)
