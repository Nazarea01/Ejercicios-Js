//Persona -> Nombre,apellido,dni,usuario,pass,comision
//Alumno-> Nombre,apellido,dni,usuario,pass,comision,curso,legajo,
//Tutor -> Nombre,apellido,dni,usuario,pass,comision,id,antiguedad

class Persona {
  constructor(
    paramNombre,
    paramApellido,
    paramDni,
    paramUsuario,
    paramPass,
    paramComision
  ) {
    this.nombre = paramNombre;
    this.apellido = paramApellido;
    this.dni = paramDni;
    this.usuario = paramUsuario;
    this.pass = paramPass;
    this.comision = paramComision;
  }

  mostrarDatos() {
    //Una manera de poner variable con comilla simple -> document.write('nombre:'+this.nombre )
    //Una manera de poner variable con comilla doblada las vartix
    document.write(`Nombre: ${this.nombre}
   <br>Apellido: ${this.apellido}
   <br>DNI: ${this.dni}
   <br>Usuario: ${this.usuario}
   <br>Pass:  ${this.pass}
   <br>Comision: ${this.comision}`);
  }

  mostrarNombreCompleto() {
    document.write(`Nombre: ${this.nombre}
    <br>Apellido: ${this.apellido}`);
  }

  //Propiedades Conmutadas getters y setters

  get mostrarUsuario() {
    return this.usuario;
  }

  set modificarDni(nuevodni) {
    this.dni = nuevodni;
  }
}
//USAR HERENCIAA
class Alumno extends Persona {
  constructor(
    paramNombre,
    paramApellido,
    paramDni,
    paramUsuario,
    paramPass,
    paramComision,
    paramLegajo,
    paramCurso
  ) {
    super(
      paramNombre,
      paramApellido,
      paramDni,
      paramUsuario,
      paramPass,
      paramComision
    );
    this.legajo = paramApellido;
    this.curso = paramCurso;
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.nombre}
   <br>Apellido: ${this.apellido}
   <br>DNI: ${this.dni}
   <br>Usuario: ${this.usuario}
   <br>Pass:  ${this.pass}
   <br>Comision: ${this.comision};
   <br>Pass:  ${this.legajo}
   <br>Comision: ${this.curso}`);
  }
}

let lily = new personalbar(
  "lili",
  "Cerda",
  43289804,
  "icerda",
  "jdferfh",
  "17i"
);

let lily = new Persona("lili", "cerda", 43289804, "Icerda", "rgerge", "17i");
lily.mostrarDatos();

let Nazarea = new Persona(
  "Nazarea",
  "Rodriguez",
  43510478,
  "nrodriguez",
  "nahdjweh",
  "17i",
  1234,
  "Fullstack"
);
lily.mostrarDatos();

//llamar el get
document.write("<br>Usuario:" + lily.mostrarusuario);

//llamar el set
let otrodni = 35280147;
lily.modificarDni = otrodni;
lily.mostrarDatos();
