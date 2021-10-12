let serie1 = "Demons slayer";
let serie2 = "Naruto";
let serie3 = "Baki";

// crear o inicializar un arreglo []
let series = ["Demons slayer", "Naruto", "Baki", serie1, 15, true];
//crear un arreglo vacio
let temporadas = [];
// cuando quiero acceder a un elemento del arreeglo nombrearreglo[pocision]
document.write("series: " + series[1]);

//agregar un elemento al final del arreglo
series.push("Hawai five-0");
series.push("Friends");
series.push("Bones");

console.log(series[6]);

//para saber la cantidad de elementos que tiene el arreglo length
console.log(series.legth);
console.log(temporadas.length);

let serieUsuario = prompt("ingrese una serie");
series.push(serieUsuario);
console.log(series.legth);

//mostrar todo los elementos de un arreglo
for (let posicion = 0; posicion < series.legth; posicion++) {
  document.write("<br>series: " + series[posicion]);
}

//modificar un elemento del arreglo
series[4] = "Bones";

document.write("<br>");
for (let posicion = 0; posicion < series.legth; posicion++) {
  document.write("<br>serie: " + series[posicion]);
}

//agregar elemento nuevo en una posicion particular

serie.splice(0, 0, "One pince");
document.write("<br>");
for (let posicion = 0; posicion < series.legth; posicion++) {
  document.write("<br>serie: " + series[posicion]);
}

// agregar otro elemento "splice sirve para posicion ,elementos a borrar a partir de la posicoon anterior ,elemento a  agregar en el arreglo"
series.splice(3, 0, "");
document.write("<br>");

for (let posicion = 0; posicion < series.legth; posicion++) {
  document.write("<br>serie: " + series[posicion]);
}

//eliminar elementos de un arreglo
series.splice(7, 1);
//splice (posicion,elementos a borrar)

document.write("<br>");
for (let posicion = 0; posicion < series.legth; posicion++) {
  document.write("<br>serie: " + series[posicion]);
}

//eliminar todos los elementos a partir de tal posicion
series.splice(3); // borro desde la posicion 3 en adelante
series.splice(0, 1); // 0 es posicion y 1 cantidad 

document.write("<br>");
for (let posicion = 0; posicion < series.legth; posicion++) {
  document.write("<br>serie: " + series[posicion]);
}



//crear funcion que muestre los elementos de los arreglos
function mostrarSeries(){
    document.write("<br>");
    for (let posicion = 0; posicion < series.legth; posicion++) {
      document.write("<br>serie: " + series[posicion]);
    }
    
}


