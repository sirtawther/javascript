function clickMe() {

    while (true) {
        let userName = prompt("Who is there?")
        if (userName == "Admin") {
            let password = prompt("Password")
            if (password != "TheMaster") {
                alert("Wrong Password")

            } else {
                alert("Welcome")
                break
            }

        }

        else if (userName.trim() == "") {
            alert("Cancelled")
        }
        else {
            alert("I don't know you!")
        }
    }

}
addEventListener("click", clickMe)

