var mediaAlunoG;

function mediaGeral() {

    mediaAlunoG = (matp1 + matp2 + pt1 + pt2 + ciep1 + ciep2 + edp1 + edp2 + esp1 + esp2 + filop1 + filop2 + geop1 + geop2 + hisp1 + hisp2 + ingp1 + ingp2) / 17;
    // alert(mediaAlunoG);
    localStorage.setItem("mediaAlunoG", mediaAlunoG);
}

function calcTurma() {
    classe = localStorage.getItem("classe");
    matp1 = localStorage.getItem("matp1");
    matp2 = localStorage.getItem("matp2");
    alunoIndex = localStorage.getItem("alunoIndex");




    // pt1 = localStorage.getItem("pt1");
    // pt2 = localStorage.getItem("pt2");
    // ciep1 = localStorage.getItem("ciep1");
    // ciep2 = localStorage.getItem("ciep2");
    // edp1 = localStorage.getItem("edp1");
    // edp2 = localStorage.getItem("edp2");
    // filop1 = localStorage.getItem("filop1");
    // filop2 = localStorage.getItem("filop2");
    // geop1 = localStorage.getItem("geop1");
    // geop2 = localStorage.getItem("geop2");
    // hisp1 = localStorage.getItem("hisp1");
    // hisp2 = localStorage.getItem("hisp2");
    // ingp1 = localStorage.getItem("ingp1");
    // ingp2 = localStorage.getItem("ingp2");

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