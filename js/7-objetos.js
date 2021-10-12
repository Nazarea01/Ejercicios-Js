let mostrarObjeto = (serieparametro) => {
  //obtener todas las claves de un objeto como si fuera un arreglo
  let claves = Object.keys(serieparametro);

  console.log(claves); //['nombre','temporadas','capitulos','premios']
  document.write("<br>Aqui comienza el arreglo");

  for (let i = 0; i < claves.length; i++) {
    let propiedad = clave[1]; //'nombre'

    document.write(`<br>${propiedad}: ${serieparametro[propiedad]}`);
  }
};

//let nombre = "Bones";
//let temporadas = "12";
//let genero ="Policial";
//let capitulos ="25";

//Crear un objeto o una notacion literal

let serie = {
  nombre: "Bones",
  temporadas: 12,
  genero: "Policial",
  capitulos: 25,
};

//mostrar una propiedad de un objeto

document.write(`serie: ${serie.nombre}`);
document.write(`<br>capitulos: ${serie.capitulos}`);

//mostrar una propiedad de un objeto metodo 2
document.write(`<br>temporadas: ${serie["temporadas"]}`);
console.log(serie);

//modificar una propiedad de un objeto
serie.temporadas = 10;

document.write(`<br>temporadas: ${serie[`temporadas`]}`);

//Agregar una nueva propiedad a un objeto
serie.premios = true;
document.write(`<br>premios: ${serie.premios}`);

//borrar una propiedad de un objeto
delete serie.genero;
console.log(serie);

//llamamos a la funcion
mostrarObjeto(serie);
