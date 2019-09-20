function getAlunoslist9A() {
    var myObj = data9am;
    var x = "";
    for (i = 0; i < myObj.ARTES.length; i++) {
        x += ' <li class="list-group-item bg-dark" class="alunoInList id="alunoPos' + i + '>' + myObj.CIENCIAS[i].NOME + '</li>';
    }
    document.getElementById("alunosList").innerHTML = x.toLowerCase();
}
