//Funciones sin parametrosnes "sin parametro porque entro del parentesis va vacio"
/*function aumentarPrecio() {
  console.log("prueba");
  let disney = 385;
  let inflacion = 150;
  document.write("valor total del servivio disney plus $" + disney);
}*/
//Funcion con parametro
/*function actualizarPrecio(monto, producto, precio) {
  let calculo = precio + monto;
  document.write("<br>El producto:" + producto + "precio total $" + calculo);
}*/

//invocar una funcion
// aumentarPrecio();

/*let coeficienteInflacion = parseInt(
  prompt("Ingrese el total de la inflacion del mes")
);*/

//invocar la funcion con parametro rellenamos lo que pusimos en el parametro

// actualizarPrecio(coeficienteInflacion, "teclado hyperx", 9000);

//Funciones que retornan el valor

function convertirDolaresPesos(precioDolar) {
  let total = precioDolar * 184;
  return total;
  //jamaz escribimos en esta zona,la linea de return es la ultima que se ejecuta
}

//crear funcion que muestre los elementos de los arreglos
/*function mostrarSeries() {
  document.write("<br>");
  for (let posicion = 0; posicion < series.legth; posicion++) {
    document.write("<br>serie: " + series[posicion]);
  }
}*/


//llamar una funcion que retorna valor

let iphone = convertirDolaresPesos(1200);

document.write(`<br> producto iphone - precio $ ${iphone} (producto nuevo)`);