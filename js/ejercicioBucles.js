//Trabajo practico 2

//Ejercicio 1

/* do {
  let edad = parseInt(prompt ('ingrese su edad'));
 if (edad >= 18 ) {
   document.write('puede conducir')
 } else{
  document.write('puede conducir')
 };
 
 };
 */

//Ejercicio 2

/*  while (true) {
  let nota = parseInt(prompt('ingrese un numero de 0 a 10'));
  nota < 0 ||  nota > 10  ? alert('Numero erroneo'):
  
  nota >= 0 &&  nota <= 2 ? alert('Muy deficiente'):
  nota === 3 || nota === 4 ? alert('Insuficiente'):
  nota === 5 || nota === 6 ? alert('Suficiente'):
  nota === 7 || nota === 7 ? alert('Bien'):
  nota === 8 || nota === 9 ? alert('Notable'):
  nota === 10 || nota === 10 ? alert('Sobresliente') : 
  isNaN(!nota) ? true : alert('Introduce un numero valido')
};  */

//Ejercicio 3

/* let resultado = "";

do {
  let palabra = prompt("Ingrese una palabra");
  resultado = resultado + "-" + palabra;
  console.log(resultado);

  // While (true) o while(False)
} while (confirm("¿Desea Continuar"));

document.write(resultado); */

//Ejercicio 4

/* let total = 0;
do {
  let numero = parseInt(prompt("Ingrese su numero"));
  isNaN(numero) ? alert(' debe ingresar un numero') :
  total += numero;

  // While (true) o while(False)
} while (confirm("Quiere ingresar otro numero?"));

document.write(total);
 */

//Ejercicio 5
/* do {
  let numero = parseInt(prompt("Ingrese su DNI"));
  numero < 0 || numero > 99999999
    ? alert("Ingrese un numero entre 0 y 99999999")
    : false;
  let resto = numero % 23;
  isNaN(numero)
    ? alert(" debe ingresar un numero")
    : resto == 0
    ? document.write("T")
    : resto == 1
    ? document.write("R")
    : resto == 2
    ? document.write("W")
    : resto == 3
    ? document.write("A")
    : resto == 4
    ? document.write("G")
    : resto == 5
    ? document.write("M")
    : resto == 6
    ? document.write("Y")
    : resto == 7
    ? document.write("F")
    : resto == 8
    ? document.write("P")
    : resto == 9
    ? document.write("D")
    : resto == 10
    ? document.write("X")
    : resto == 11
    ? document.write("B")
    : resto == 12
    ? document.write("N")
    : resto == 13
    ? document.write("J")
    : resto == 14
    ? document.write("Z")
    : resto == 15
    ? document.write("S")
    : resto == 16
    ? document.write("Q")
    : resto == 17
    ? document.write("V")
    : resto == 18
    ? document.write("H")
    : resto == 19
    ? document.write("L")
    : resto == 20
    ? document.write("C")
    : resto == 21
    ? document.write("K")
    : resto == 22
    ? document.write("E")
    : false;
} while (confirm("ingrese otro numero de DNI")); */

//Ejercicio 10

//let filas = parseInt(prompt("Ingrese un numero de fila"));
//let columnas = parseInt(prompt("Ingrese"));

//totala el valor para cargar la celdas de la tabla
//let total = filas + columnas;

//document.write("<table border>");

/*document.write("<tr>");
document.write("<td>Prueba");
document.write("</td>");
document.write("</tr>");*/

/*
for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
  //aqui dibujo la fila
  document.write("<tr>");
  //dibujar la celda
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
    document.write("<td>" +total);
    document.write("</td>");
    total--; //total = total-1;
  }

  document.write("</tr>");
}

document.write("</table>"); 
*/
