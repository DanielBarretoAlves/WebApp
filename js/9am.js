function getAlunoslist9A() {
    var myObj = data;
    var x = ""

    for (i = 0; i < myObj.ARTES.length; i++) {
        x += ' <li class="list-group-item bg-dark" class="alunoInList id="alunoPos' + i + '>' + myObj.ARTES[i].nome + '</li>';
        // if (myObj.ARTES[i].nome == "MEL CAMPAGNARO") {
        //     var y = "";
        //     y += myObj.ARTES[i].p1;
        //     alert(y);

        // }
    }
    document.getElementById("alunosList").innerHTML = x.toLowerCase();
}