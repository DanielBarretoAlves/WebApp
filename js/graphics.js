google.charts.load('current', { 'packages': ['bar'] });
// google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

nomeAluno = localStorage.getItem("nomeAluno");
matp1 = localStorage.getItem("matp1");
matp2 = localStorage.getItem("matp2");
pt1 = localStorage.getItem("pt1");
pt2 = localStorage.getItem("pt2");
ciep1 = localStorage.getItem("ciep1");
ciep2 = localStorage.getItem("ciep2");
edp1 = localStorage.getItem("edp1");
edp2 = localStorage.getItem("edp2");
filop1 = localStorage.getItem("filop1");
filop2 = localStorage.getItem("filop2");
geop1 = localStorage.getItem("geop1");
geop2 = localStorage.getItem("geop2");
hisp1 = localStorage.getItem("hisp1");
hisp2 = localStorage.getItem("hisp2");
ingp1 = localStorage.getItem("ingp1");
ingp2 = localStorage.getItem("ingp2");
mediaAlunoG = localStorage.getItem("mediaAlunoG");
alert(mediaAlunoG);


function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Materia', 'Prova 1', 'Prova 2'],
        ['Matematica', parseFloat(matp1), parseFloat(matp2)],
        ['Portugues', parseFloat(pt1), parseFloat(pt2)],
        ['Ciencias', parseFloat(ciep1), parseFloat(ciep2)],
        ['Educacao Fisica', parseFloat(edp1), parseFloat(edp2)],
        ['Espanhol', parseFloat(esp1), parseFloat(esp2)],
        ['Filosofia', parseFloat(filop1), parseFloat(filop2)],
        ['Geografia', parseFloat(geop1), parseFloat(geop2)],
        ['Historia', parseFloat(hisp1), parseFloat(hisp2)],
        ['Ingles', parseFloat(ingp1), parseFloat(ingp2)],

    ]);

    var options = {
        annotations: {
            textStyle: {
                fontName: 'Times-Roman',
                fontSize: 18,
                bold: true,

                // width: 100,
                italic: true,
                // The color of the text.
                color: '#871b47',
                // The color of the text outline.
                auraColor: '#d799ae',
                // The transparency of the text.
                opacity: 0.8
            }
        }
    };





    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
//<div id="barchart_material" style="width: 900px; height: 500px;"></div>  no body

//<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script> no head

// function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Work', 11],
//         ['Eat', 2],
//         ['Commute', 2],
//         ['Watch TV', 2],
//         ['Sleep', 7]
//     ]);

//     var options = {
//         title: 'My Daily Activities',
//         pieHole: 0.4,
//     };

//     var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
//     chart.draw(data, options);
// }