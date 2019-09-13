function addAlunos() {
    alert("foi");
    var myJson = JSON.parse(artes);
    alert(myJson[0].NOME);
    for (let index = 0; index < myJson[0].length; index++) {
        var name = myJson[0].NOME;
        var tabela = document.getElementById("listaTurma");

        // element.classList.add("mystyle");
        var linha = document.createElement("TR");
        var dNome = document.createElement("TD");
        var textnode = document.createTextNode(name);
        dNome.appendChild(textnode);
        linha.appendChild(dNome);
        document.getElementById("listaTurma").appendChild(linha);
    }

}