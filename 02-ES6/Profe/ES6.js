//TODO: Let y const

//* const es una variable inmutable en su valor (ojo dije valor) o en su referencia

const num = 4;
// num = 5 //! Assignment to constant variable.
const text = "ejemplo";
// text = "34" //! Assignment to constant variable.

const sum = function (a, b) {
  return a + b;
};

const arrayOrList = []; // AS321
arrayOrList[2] = "holis";
console.log(arrayOrList);

const objObj = {
  a: 2,
};

objObj.b = "sese";
console.log(objObj);

var arrayReseteable = [];
arrayReseteable.push(2);

arrayReseteable = [];

const CODE_KEY_ID_EMAIL = "data";
const id = "11";
if (true) {
  const id = "2243";
  console.log(id);
}
console.log(id);

//* let  !==  let vs var    -> LET trabaja por contexto Y POR BLOQUE (while, if, for, etc.)
// LET tiene un registro para cada BLOQUE
let name = "Peter";
if (true) {
  let name = "Lucio";
  console.log(name);
}
console.log(name);

// Trabaja en el caso de BLOQUES en un único REGISTRO
var title = "Peter";
if (true) {
  var title = "Lucio"; // este chango lo quiere hacer title = "darle un nuevo valor"
  console.log(title);
}
console.log(title);

var nameUser = "";
const nameProfessional = "";

//TODO: Arrow Functions o Funciones flecha

// Simplifica la sintaxis, tiene el return implícito (solo cuando hacemos code en una sola línea (acción))

function sumNum(a, b) {
  var result = a + b;
  return result;
}

// const sumArrow = function (a, b) {return a + b} ;
const sumArrow = (a, b) => a + b;

console.log(sumArrow(2, 3));

// Auto BIND
const objData = {
  prop1: "hola",
  perros: [],
  queee: {
    prop2: "wewe",
    // salude: ()=> this.prop1
  },
  salude() {
    this.perros.forEach(
      function (perro) {
        // AUTO BIND
        console.log(this.prop1 + " " + perro);
      }.bind(this)
    );
  },
  // function { .forEach(function { }) }
};
// function salude(){
//     return this.prop1
// }
// const instBindSalude = salude.bind(objData)
objData.perros.push("dogo");
console.log(objData.salude());

//* CLASES   { }  con sus métodos  <-> al usar aquí ()=>  se hace un AUTO BIND

class Persona {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
}

// function Persona(name, edad) {
//   this.edad = edad;
//   this.name = name;
// }

Persona.prototype.viewName = function () {
  return this.name;
};

const personita = new Persona("seba", 32);
console.log(personita);

//* HERENCIA <- CLASES <- la sintaxis de class

//             extends  -> HEREDAR   propiedades y métodos de una Clase a otra
class Empleado extends Persona {
  constructor(pay, name, age) {
    super(name, age); // SIEMPRE extends SIEMPRE super()
    this.pay = pay;
  }
}
/*
MOLDE Persona
{
    name: name,
    age: age
}

extends super  Empleado extends Persona  <- Heredamos (delega JS) las obj props + métodos
MOLDE Empleado
{
    name: name,
    age: age,
    pay: pay
}
*/
const empleadito = new Empleado("1000", "Evelyn", 21);
console.log(empleadito);
console.log(empleadito.viewName());

//TODO: Object Literal

var tipo = "madera";
var altura = 21;
var ancho = 10;

const dataObjNew = {
  // si prop tiene el mismo nombre (key) que la variable o parámetro
  tipo,
  altura,
  ancho,
};
console.log(dataObjNew);

function printDoors(tipo, altura, ancho) {
  const data = {
    tipo,
    altura,
    ancho,
  };
  return data;
}
console.log(printDoors(tipo, altura, ancho));

//TODO: Template Literals <-> Comillas invertidas <-> backstick <-> alt + 96 -> alt + }
//* podemos alternar string y variables

function saludoComplejo(name, message, que) {
  return `Buenas ${name} ${message} y ${que}`;
  // return "Buenas " + name + " " + message + " y " + que
}
console.log(saludoComplejo("Shirey", "vamoooos", "como va"));

//TODO: DESTRUCTURING
//* OBJECT se guía por el nombre de la propiedad
const otro = {
  url: "wertt",
  dir: "antartida",
  clave: 232353,
  nom: "Pepi",
};
var { dir, clave } = otro;

console.log(clave);

//* ARRAY (index)

const flete = [3, "se", "holis", "pepe", "bye"];

const [a, b, ...z] = flete;

const daton = [{}, {}, {}];
const [user, prof, admin] = daton;

console.log(z); // resto dentro de un array

//TODO: DEFAULT

function Admin(nombre, edad, dni = "000") {
  this.nombre = nombre;
  this.edad = edad;
  this.dni = dni;
}
const admincito = new Admin("Luciano", 22);
console.log(admincito);

//TODO: SPREAD OPERATOR

//* Preservar la data del objeto ([] {}) original  <-> CLONE
const otroOrigen = {
  url: "wertt",
  dir: "antartida",
  clave: 232353,
  nom: "Pepi",
};
const newCopy = {...otroOrigen}
newCopy.a= "qqqqqqqqqq"
console.log(otroOrigen);


const fleteOrigin = [3, "se", "holis", "pepe", "bye"];
const copyFlete = [...fleteOrigin]
copyFlete[7] = "dedede"
console.log(fleteOrigin);


const copyFleteAmano = []
fleteOrigin.forEach((e)=>{
    copyFleteAmano.push(e)
})
copyFleteAmano[9] = 323
console.log(copyFleteAmano);

//TODO: REST <-< spread
// const flete = [3, "se", "holis", "pepe", "bye"];
// const [a, b, ...z] = flete;
function fufu(x, ...y){ // aquí en y hay un [] con el resto de los parámetros que nos vayan a pasar
    return {x,y}
}

console.log(fufu(3, 21,"sese"))

//Todo: PROMISES
//* JS SYNC    <-> ASYNC

var promise = "pedimos data a una url"
console.log(promise) // undefined