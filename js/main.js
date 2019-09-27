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
var selectedClass = false;
var turmas = [class9AM, class9BM, class8AM, class8BM, class7AM, class7BM, class6AM, class6BM];


$("#homebt").click(function() {
    localStorage.clear();
    location.href = "index.html";
});
$("#showClasses").click(function() {
    $("#listButtonArea").empty();
    $("#selectArea").empty();
    if (selectedClass != true) {
        $("#selectArea").append('<option value="0" > Turma 9AM </option>');
        $("#selectArea").append('<option value="1" > Turma 9BM </option>');
        $("#selectArea").append('<option value="2" > Turma 8AM </option>');
        $("#selectArea").append('<option value="3" > Turma 8BM </option>');
        $("#selectArea").append('<option value="4" > Turma 7AM </option>');
        $("#selectArea").append('<option value="5" > Turma 7BM </option>');
        $("#selectArea").append('<option value="6" > Turma 6AM </option>');
        $("#selectArea").append('<option value="7" > Turma 6BM </option>');
        $("#listButtonArea").append("<button type='button' class='btn btn-success btn-lg btn-block' onclick='getTuma()'>Selecionar Turma</button>");
    } else {

    }
})

function getTuma() {
    classe = turmas[$("#selectArea").val()];
    $("#listButtonArea").empty();
    localStorage.setItem("classe", classe);
    showStudents()
}
// TODO
function showStudents() {
    $("#selectArea").empty();
    $("#selectStudent").remove();
    $("#dataSection").empty();
    $("#selectArea").empty();
    // var alunoONCard = false;

    if (showAluno != true) {
        var botao = "<button type='button' class='btn btn-success btn-lg btn-block' id='selectStudent' onclick='getNotas()'>Selecionar Aluno</button>"
        for (i = 0; i < classe.MATEMATICA.length; i++) {
            var txt = '<option value="' + i + '" >' + i + " - " + classe.MATEMATICA[i].NOME + ' </option>';
            $("#selectArea").append(txt);

        }
        $("#listButtonArea").append(botao);
        // alert(class9AM.MATEMATICA[0].NOME + " " + class9AM.MATEMATICA[0].p1)
        // showAluno = true;
    } else {

        // showAluno = false;
    }
}



function showData() {
    location.href = "data.html";
}

function showStudentonCard() {
    if (alunoONCard != true) {
        var alunoIndex = $("#selectArea").val();
        localStorage.setItem("alunoIndex", alunoIndex);
        $("#dataSection").append("<b>Nome - </b> " + nomeAluno)
        $("#dataSection").append("<br />")
        $("#dataSection").append("<b>Rendimento Geral - </b> " + mediaAlunoG + " %");
        $("#dataSection").append("<br />")
        $("#dataSection").append('<button type="button " class="btn btn-primary btn-lg btn-block" id="moreInfo" onclick="showData()" >Mais</button>')
            // alunoONCard = true;
            // getNotas();
            // mediaGeral();
    } else {
        $("#dataSection").empty();
        // alunoONCard = false;
    }

}

function getNotas() {
    if (alunoONCard != true) {
        var alunoIndex = $("#selectArea").val();

        nomeAluno = classe.MATEMATICA[alunoIndex].NOME;
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


        //TODO Storage

        // Armazenar
        localStorage.setItem("nomeAluno", classe.MATEMATICA[alunoIndex].NOME);
        localStorage.setItem("matp1", classe.MATEMATICA[alunoIndex].p1);
        localStorage.setItem("matp2", classe.MATEMATICA[alunoIndex].p2);
        localStorage.setItem("pt1", classe.PORTUGUES[alunoIndex].p1);
        localStorage.setItem("pt2", classe.PORTUGUES[alunoIndex].p2);
        localStorage.setItem("ciep1", classe.CIENCIAS[alunoIndex].p1);
        localStorage.setItem("ciep2", classe.CIENCIAS[alunoIndex].p2);
        localStorage.setItem("edp1", classe.EDUCACAOFISICA[alunoIndex].p1);
        localStorage.setItem("edp2", classe.EDUCACAOFISICA[alunoIndex].p2);
        localStorage.setItem("esp1", classe.ESPANHOL[alunoIndex].p1);
        localStorage.setItem("esp2", classe.ESPANHOL[alunoIndex].p2);
        localStorage.setItem("filop1", classe.FILOSOFIA[alunoIndex].p1);
        localStorage.setItem("filop2", classe.FILOSOFIA[alunoIndex].p2);
        localStorage.setItem("geop1", classe.GEOGRAFIA[alunoIndex].p1);
        localStorage.setItem("geop2", classe.GEOGRAFIA[alunoIndex].p2);
        localStorage.setItem("hisp1", classe.HISTORIA[alunoIndex].p1);
        localStorage.setItem("hisp2", classe.HISTORIA[alunoIndex].p2);
        localStorage.setItem("ingp1", classe.INGLES[alunoIndex].p1);
        localStorage.setItem("ingp2", classe.INGLES[alunoIndex].p2);


        // localStorage.setItem("matp1", "variableContent")
        // Obter
        // nomeTela = localStorage.getItem(matp1);
        //Limpar
        // localStorage.clear();
        //TODO ARTES
        // alert(ciep1);

        // alert(edp1)
        mediaGeral();
        $("#listButtonArea").empty();
        $("#selectArea").empty();
        showStudentonCard()


    }

    function logIn() {

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