var mediaAlunoG;
var matAprovados = 0;
var matReprovados = 0;
var artAprovados = 0;
var artReprovados = 0;
var cieAprovados = 0;
var cieReprovados = 0;
var espAprovados = 0;
var espReprovado = 0;

function mediaGeral() {

    mediaAlunoG = (matp1 + matp2 + pt1 + pt2 + ciep1 + ciep2 + edp1 + edp2 + esp1 + esp2 + filop1 + filop2 + geop1 + geop2 + hisp1 + hisp2 + ingp1 + ingp2) / 17;
    // TODO: Media Das Materias
}
function mediaArt() {
    return (artp1 + artp2) / 2;
}

function mediaCie() {
    return (ciep1 + ciep2) / 2;
}

function mediaEdf() {
    return (edp1 + edp2) / 2;
}

function mediaEsp() {
    return (esp1 + esp2) / 2;
}
function mediaFil() {
    return (filop1 + filop2) / 2;
}

function mediaGeo() {
    return (geop1 + geop2) / 2;
}

function mediaHist() {
    return (hisp1 + hisp2) / 2;
}

function mediaIng() {
    return (ingp1 + ingp2) / 2;
}

function mediaPT() {
    return (pt1 + pt2) / 2;
}

function mediaMat() {
    return (matp1 + matp2) / 2;
}


// TODO: Media Da Turma Por Materia

// TODO
function apMat() {

    for (i = 0; i < classe.MATEMATICA.length; i++) {

        if ((classe.MATEMATICA[i].p1 + classe.MATEMATICA[i].p2) / 2 > 6) {
            matAprovados++;
        } else {
            matReprovados++;
        }

    }
}

function apArt() {
    for (i = 0; i < classe.ARTES.length; i++) {

        if ((classe.ARTES[i].p1 + classe.ARTES[i].p2) / 2 > 6) {
            artAprovados++;

        } else {
            artReprovados++;

        }

    }
}

function apCie() {
    for (i = 0; i < classe.CIENCIAS.length; i++) {

        if ((classe.CIENCIAS[i].p1 + classe.CIENCIAS[i].p2) / 2 > 6) {
            cieAprovados++;

        } else {
            cieReprovados++;

        }

    }
}
function apEsp() {
    for (i = 0; i < classe.ESPANHOL.length; i++) {

        if ((classe.ESPANHOL[i].p1 + classe.ESPANHOL[i].p2) / 2 > 6) {
            espAprovados++;

        } else {
            espReprovado++;

        }

    }
}
// var matp1;
// var matp2;
// var pt1;
// var pt2;
// var ciep1;
// var ciep2;
// var edp1;
// var edp2;
// var esp1;
// var esp2;
// var filop1;
// var filop2;
// var geop1;
// var geop2;
// var hisp1;
// var hisp2;
// var ingp1;
// var ingp2;