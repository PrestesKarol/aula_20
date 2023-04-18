
const listaDeCompras = [];

// Atividade um

var addButton = document.getElementById("add-button");
addButton.addEventListener("click", function() {

  var newItem = document.getElementById("item").value;

  listaDeCompras.push(newItem);

  document.getElementById("item").value = "";
});

var viewButton = document.getElementById("view-button");
viewButton.addEventListener("click", function() {

  console.log(listaDeCompras);
});

// Atividade dois
function sum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Resultado: " + (num1 + num2);
  }
  
  function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Resultado: " + (num1 - num2);
  }
  
  function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Resultado: " + (num1 * num2);
  }
  
  function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Resultado: " + (num1 / num2);
  }