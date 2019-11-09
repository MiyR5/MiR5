function isAcceptedUsername(username) {
    var Regex = /^[a-z]{5,}$/ ;
    return Regex.test(username) ;
}

if (isAcceptedUsername("arkademy")) {
    alert("Username Is Valid") ;
} else {
    alert("Username Is Invalid") ;
}

function isAcceptedPassword(Password) {
    var Regex = /^[0-9]{2}[@&]{1}[A-Z]{4}$/ ;
    return Regex.test(Password) ;
}

if (isAcceptedPassword("29@PASS")) {
    alert("Password Is Valid") ;
} else {
    alert("Password Is Invalid") ;
}