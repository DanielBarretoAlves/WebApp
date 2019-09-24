var class9AM = data9am;
var class9BM = data9bm;
var class8AM = data8am;
var class8BM = data8bm;
var class7AM = data7am;
var class7BM = data7bm;
var class6AM = data6am;
var class6BM = data6bm;
var classe = class9AM;
var showAluno = false;
var alunoONCard = false;
var nomeAluno;
var prova1;
var prova2;
var media;
var idAluno;
var matp1;
var matp2;
var pt1;
var pt2;
var ciep1;
var ciep2;
var edp1;
var edp2;
var esp1;
var esp2;
var filop1;
var filop2;
var geop1;
var geop2;
var hisp1;
var hisp2;
var ingp1;
var ingp2;


$("#showStudents").click(function() {
    $("#dataSection").empty();
    var alunoONCard = false;

    if (showAluno != true) {
        var botao = "<button type='button' class='btn btn-success btn-lg btn-block' id='selectStudent' onclick='showStudentonCard()'>Selecionar Aluno</button>"
        for (i = 0; i < classe.CIENCIAS.length; i++) {
            var txt = '<option value="' + i + '" >' + i + " - " + classe.CIENCIAS[i].NOME + ' </option>';
            $("#selectArea").append(txt);

        }
        $("#listSection").append(botao);
        // alert(class9AM.MATEMATICA[0].NOME + " " + class9AM.MATEMATICA[0].p1)
        showAluno = true;
    } else {
        $("#selectArea").empty();
        $("#selectStudent").remove();
        showAluno = false;
    }

});






function showStudentonCard() {
    if (alunoONCard != true) {
        var alunoIndex = $("#selectArea").val();
        $("#dataSection").append("<b>Nome - </b> " + class9AM.MATEMATICA[alunoIndex].NOME)
        nomeAluno = class9AM.ESPANHOL[alunoIndex].NOME;
        $("#dataSection").append("<br />")
        $("#dataSection").append("<b>Prova 1 - </b> " + class9AM.MATEMATICA[alunoIndex].p1)
        $("#dataSection").append("<br />")
        $("#dataSection").append("<b>Prova 2 - </b> " + class9AM.MATEMATICA[alunoIndex].p2)
            // matp1 = classe.MATEMATICA[alunoIndex].p1;
            // matp1 = classe.CIENCIAS[alunoIndex].p1;
        matp1 = classe.MATEMATICA[alunoIndex].p1;
        matp2 = classe.MATEMATICA[alunoIndex].p2;
        pt1 = classe.PORTUGUES[alunoIndex].p1;
        pt2 = classe.PORTUGUES[alunoIndex].p2;
        ciep1 = classe.CIENCIAS[alunoIndex].p1;
        ciep2 = classe.CIENCIAS[alunoIndex].p2;
        edp1 = classe.EDUCACAOFISICA[alunoIndex].p1;
        edp2 = classe.EDUCACAOFISICA[alunoIndex].p2;
        esp1 = classe.ESPANHOL[alunoIndex].p1;
        esp2 = classe.ESPANHOL[alunoIndex].p2;
        filop1 = classe.FILOSOFIA[alunoIndex].p1;
        filop2 = classe.FILOSOFIA[alunoIndex].p2;
        geop1 = classe.GEOGRAFIA[alunoIndex].p1;
        geop2 = classe.GEOGRAFIA[alunoIndex].p2;
        hisp1 = classe.HISTORIA[alunoIndex].p1;
        hisp2 = classe.HISTORIA[alunoIndex].p2;
        ingp1 = classe.INGLES[alunoIndex].p1;
        ingp2 = classe.INGLES[alunoIndex].p2;



        $("#dataSection").append("<br />")
        $("#dataSection").append('<button type="button " class="btn btn-primary btn-lg btn-block" id="moreInfo" >Mais</button>')
        alunoONCard = true;
        getNotas();
        mediaGeral();
    } else {
        $("#dataSection").empty();
        alunoONCard = false;
    }

}

function getNotas(seila) {
    if (alunoONCard != true) {
        var alunoIndex = $("#selectArea").val();

        nomeAluno = class9AM.MATEMATICA[alunoIndex].NOME;

        // matp1 = classe.MATEMATICA[alunoIndex].p1;
        // matp2 = classe.MATEMATICA[alunoIndex].p2;
        // pt1 = classe.PORTUGUES[alunoIndex].p1;
        // pt2 = classe.PORTUGUES[alunoIndex].p2;
        // ciep1 = classe.CIENCIAS[alunoIndex].p1;
        // ciep2 = classe.CIENCIAS[alunoIndex].p2;
        // edp1 = classe.EDUCACAOFISICA[alunoIndex].p1;
        // edp2 = classe.EDUCACAOFISICA[alunoIndex].p2;
        // esp1 = classe.ESPANHOL[alunoIndex].p1;
        // esp2 = classe.ESPANHOL[alunoIndex].p2;
        // filop1 = classe.FILOSOFIA[alunoIndex].p1;
        // filop2 = classe.FILOSOFIA[alunoIndex].p2;
        // geop1 = classe.GEOGRAFIA[alunoIndex].p1;
        // geop2 = classe.GEOGRAFIA[alunoIndex].p2;
        // hisp1 = classe.HISTORIA[alunoIndex].p1;
        // hisp2 = classe.HISTORIA[alunoIndex].p2;
        // ingp1 = classe.INGLES[alunoIndex].p1;
        // ingp2 = classe.INGLES[alunoIndex].p2;
        alert(edp1)
        mediaGeral();


    }

    //  $("#all").click(function() {
    //     var al = $("#all").val();
    //      $("#all").after("Prova 2: " + class9AM.MATEMATICA[al].p2);
    //      $("#all").after("<br>");
    //       $("#all").after("Prova 1: " + class9AM.MATEMATICA[al].p1);
    //       $("#all").after("<br>");
    //       $("#all").after("Nome: " + class9AM.MATEMATICA[al].NOME);
    //      $("#all").after("<br>");
    //   })

    // setInterval(function checkPosition() {

    //     if (window.matchMedia('(max-width: 900px)').matches) {
    //         $(".setBigger").css("width:90%;");
    //     } else {
    //         // TEla Grande
    //     }
    // }, 3000)
}