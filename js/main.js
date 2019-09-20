// function getAlunoslist9A() {
//     var myObj = data9am;
//     var x = "";
//     for (i = 0; i < myObj.ARTES.length; i++) {
//         x += ' <li class="list-group-item bg-dark" class="alunoInList id="alunoPos' + i + '>' + myObj.CIENCIAS[i].NOME + '</li>';
//     }
//     document.getElementById("alunosList").innerHTML = x.toLowerCase();
// }
function getP1(al) {
    var myObj = data9am;

}


$("#test2").click(function() {

    var myObj = data9am;
    var x = "";
    for (i = 0; i < myObj.ARTES.length; i++) {
        // x += ' <li class="list-group-item bg-dark" class="alunoInList id="alunoPos' + i + '>' + myObj.CIENCIAS[i].NOME + '</li>';
        var txt = '<option value="' + i + '" >' + myObj.CIENCIAS[i].NOME + ' </option>';
        $("#listAlunos").append(txt);

    }
    // document.getElementById("alunosList").innerHTML = x.toLowerCase();

    $("#testGet").click(function() {


        // var p1, p2;
        var al = $("#listAlunos").val();
        // for (let index = 0; index < myObj.ARTES.length; index++) {
        //     if (myObj.ARTES[i].NOME == al) {
        //         p1 = myObj.ARTES[i].p1;
        //         p2 = myObj.ARTES[i].p2;
        //     }

        // }
        // $("#listAlunos").after($("#listAlunos").val());
        // $("#listAlunos").after("<br>");
        $("#listAlunos").after("Prova 2: " + myObj.CIENCIAS[al].p2);
        $("#listAlunos").after("<br>");
        $("#listAlunos").after("Prova 1: " + myObj.CIENCIAS[al].p1);
        $("#listAlunos").after("<br>");
        $("#listAlunos").after("Nome: " + myObj.CIENCIAS[al].NOME);
        $("#listAlunos").after("<br>");



    })



});