function myFunction() {
    // Sign up username
    var a = document.forms["signup"]["username"].value;
    // Sign up email
    var b = document.forms["signup"]["email"].value;
    // Sign up House addres
    var c = document.forms["signup"]["address"].value;
    // Sign up password
    var d = document.forms["signup"]["password"].value;
    // Sign up confirm password
    var e = document.forms["signup"]["confirm_password"].value;

    if (a != "" && b != "" && c != "" && d != "" && e != "") {
        if (confirm("Do you want to sign up?")) {
            alert("Welcome " + a);
        } else {
            alert("Sign up canceled")
        }
    } else {
        alert("Please fill out everything")
    }
}
