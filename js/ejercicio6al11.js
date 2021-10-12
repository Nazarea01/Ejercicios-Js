//Ejercicio 6
/*let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));
if (numero1 > numero2) {
  document.write("El numero mayor es <br>" + numero1);
} else {
  document.write("El numero mayor es <br>" + numero2);
}*/

//Ejercicio 7

/*let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));
let numero3 = parseInt(prompt("ingrese un tercer numero"));
if (numero1 > numero2 && numero1 > numero3) {
  document.write("El numero mayor es <br>" + numero1);
} else if (numero2 > numero1 && numero2 > numero3){
  document.write("El numero mayor es <br>" + numero2);

}else{

    document.write("El numero mayor es <br>" + numero3);
}*/

//Ejercicio 8
/*let numero = parseInt(prompt("ingrese un numero"));
if(numero % 2 == 0){
    document.write("El numero  es divisible por 2");
}*/

//Ejercicio 9
//let frase = prompt("Ingrese una frase");
//hola mundo
//console.log(frase);
//console.log(frase.length);

//tomar un caracter variable.charAt(indice)
//preguntar si es vocal
//Si es vocal lo muestro sino no hago nada

/*For(let vocal=0; vocal <frase.length; vocal++){
    console.log(frase.charAt(vocal));
    if(frase.charAt(vocal) == "a" || frase.charAt(vocal) == "e" || frase.charAt(vocal) == "i" || frase.charAt(vocal) == "u")
    {document.write(frase.charAt(vocal));

}} */

//ejercicio 9 hecho de otra forma con el 'includes'

/* let frase = prompt('ingrese una frase');
 document.write(frase.includes('a') ? 'a' : '');
 document.write(frase.includes('e') ? 'e' : '');
 document.write(frase.includes('i') ? 'i' : '');
 document.write(frase.includes('o') ? 'o' : '');
 document.write(frase.includes('u') ? 'u' : ''); */

//ejercicio 10

/* let numeros = parseInt(prompt("ingrese un numero"));
document.write(
  numero % 2 === 0 || numero % 3 === 0 || numero % 5  === 0|| numero % 7 === 0
    ? "es divisible"
    : "no es divisible"
); */

//ejercicio 11

let numeros = parseInt(prompt("ingrese un numero"));
 if (numero % 2 === 0){
   document.write('es divisible por 2');
 }
 if (numero % 3 === 0){
   document.write('es divisible por 3');
 }
 if (numero % 5 === 0){
   document.write('es divisible por 5');
 }
 if (numero % 7 === 0){
   document.write('es divisible por 7');
 }
 
//ejercicio 11 otra forma de hacer con otra manera 
 
let numeros = parseInt(prompt("ingrese un numero"));

numero % 2 === 0 ?  document.write('es divisible por 2' + '<br>') : '';
numero % 3 === 0 ?  document.write('es divisible por 3' + '<br>') : '';
numero % 5 === 0 ?  document.write('es divisible por 5' + '<br>') : '';
numero % 7 === 0 ?  document.write('es divisible por 7' + '<br>') : '';











  

