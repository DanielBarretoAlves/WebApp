// Get Variables List

artAprovados = localStorage.getItem("artAprovados");
artReprovados = localStorage.getItem("artReprovados");
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
esp1 = localStorage.getItem("esp1");
esp2 = localStorage.getItem("esp2");
artp1 = localStorage.getItem("artp1");
artp2 = localStorage.getItem("artp2");

// Load Charts and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Draw the pie chart for Sarah's pizza when Charts is loaded.
google.charts.setOnLoadCallback(drawSarahChart);

// Draw the pie chart for the Anthony's pizza when Charts is loaded.
google.charts.setOnLoadCallback(drawAnthonyChart);

// Callback that draws the pie chart for Sarah's pizza.
function drawSarahChart() {
    artAprovados = localStorage.getItem("artAprovados");
    artReprovados = localStorage.getItem("artReprovados");
    let x = artAprovados;
    let y = artReprovados;
    alert(x);
    
    // Create the data table for Sarah's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Aprovado', parseInt(x)],
        ['Reprovado', parseInt(y)]
    ]);

    // Set options for Sarah's pie chart.
    var options = {
        title: 'ARTES',
        width: 400,
        height: 300
    };

    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('Edf_div'));
    chart.draw(data, options);
}

// Callback that draws the pie chart for Anthony's pizza.
function drawAnthonyChart() {
    cieAprovados = localStorage.getItem("cieAprovados");
    cieReprovados = localStorage.getItem("cieReprovados");
    let x =cieAprovados;
    let y = cieReprovados;
    // Create the data table for Anthony's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Provado', parseInt(x)],
        ['Reprovado', parseInt(y)]
    ]);

    // Set options for Anthony's pie chart.
    var options = {
        title: 'Ciencias',
        width: 400,
        height: 300
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('Esp_div'));
    chart.draw(data, options);
}