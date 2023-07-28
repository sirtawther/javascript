function askQuestion(question, male, female) {

    if (question == "Male") male()
    else female()
}


askQuestion("Male", function () { alert("Mingalar par khinbya") }, function () { alert("Mingalar par shin") })
