function login() {
    var mydata = JSON.parse(user);
    var userName = document.getElementById("user").value;
    var password = document.getElementById("passcode").value;
    if (userName == mydata[0].name && password == mydata[0].password) {
        open("9AM.html");
    } else {
        alert("Senha ou Usuario Invalido");

    }

}