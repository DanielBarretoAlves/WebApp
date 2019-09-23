var class9AM =  data9am;
var class9BM = data9bm;
var class8AM = data8am;
var class8BM = data8bm;
var class7AM = data7am;
var class7BM = data7bm;
var class6AM = data6am;
var class6BM = data6bm;

setInterval(function checkPosition() {
    
    if (window.matchMedia('(max-width: 900px)').matches) {
        $(".setBigger").css("width:90%;");
    } else {
        // TEla Grande
    }
}, 3000)

$("#showStudents").click(function() {
  for (i = 0; i < class9AM.ARTES.length; i++) {
       var txt = '<p value="' + i + '" >' + class9AM.CIENCIAS[i].NOME + ' </p>';
         $("#all").append(txt);

    }
    alert(class9AM.CIENCIAS[0].NOME + " " + class9AM.CIENCIAS[0].p1)
   



 });

//  $("#all").click(function() {
//     var al = $("#all").val();
//      $("#all").after("Prova 2: " + class9AM.CIENCIAS[al].p2);
//      $("#all").after("<br>");
//       $("#all").after("Prova 1: " + class9AM.CIENCIAS[al].p1);
//       $("#all").after("<br>");
//       $("#all").after("Nome: " + class9AM.CIENCIAS[al].NOME);
//      $("#all").after("<br>");
//   })