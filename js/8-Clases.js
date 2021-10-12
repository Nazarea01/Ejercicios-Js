// Crear una clase
class Serie {
    //con este metodo se crean los objetos
    constructor(parametroNombre,parametroTemporadas,parametroCapitulo,parametroGenero){
        //crear las propiedades del objeto
        this.nombre = parametroNombre;
        this.temporadas = parametroTemporadas;
        this.capitulo = parametroCapitulo;
        this.genero = parametroGenero;
    }


//aqui van nuestros metodos
  mostrarDatos(){
      document.write('serie: '+ this.nombre +' Temporadas: '+ this.temporadas+'<br>');

      mostrarDatosExtendido(){
          //mostrar todas las propiedades del objeto 
      }
    } 
     }
     
//Utilizar la clase o crear o instanciar objetos
 let Bones = new Serie('bones',12,25,'policial');
 let Hawaifive-0 = new Serie('hawaifive-0',10,21,'Crimen');
 console.log(Bones);

 Bones.mostrarDatos();
 Hawaifive-0.mostrarDatos();
  