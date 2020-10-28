function login() {
    //Login username
    var userName = document.forms["login"]["username"].value;
    // Login password
    var password = document.forms["login"]["password"].value;
    alert("HOi");
    if (userName != "" && password != "") {
        alert("Welcome " + userName);
    } else {
        alert("Login Failed")
    }
}