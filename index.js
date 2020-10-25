
function myFunction() {
    if (document.getElementsByClassName("form-group" != "undefined")) {
        if (confirm("Do you want to sign up?")) {
            console.log("Sign up succes!");
        }
    } else {
        console.log("Sign up failed!");
    }
}
