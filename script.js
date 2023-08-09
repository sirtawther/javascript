const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
];
let button = document.querySelector("button")

let result = document.getElementById("result")

let names = []
for (const contact in contacts) {
    let contact_split = contacts[contact].split(":")
    names.push(contact_split[0])

}

let contact_list = document.getElementById("contact_list")

contact_list.textContent = names



button.addEventListener("click", () => {
    let input_value = document.querySelector("input").value;

    for (let i = 0; i < contacts.length; i++) {
        let contact_split = contacts[i].split(":")




        if (contact_split[0].toLowerCase() == input_value.toLowerCase()) {
            result.textContent = `${contact_split[0]}'s phone number is ${contact_split[1]}.`
            break
        } else if (input_value == "") {
            result.textContent = `Type something!`
        } else {
            result.textContent = `Not Found!`
        }



    }
}

)

