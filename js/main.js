
function saludar(nombre, apellido){
    alert("hola " + nombre + " " + apellido + " como estas");
}
let ingresaNombre = prompt("Ingresa nombre")
let ingresaApellido = prompt("Ingresa apellido")
saludar(ingresaNombre, ingresaApellido)

// filtro por edad
let edad = parseFloat(prompt("ingresa tu edad"))
if(edad >= 18){ 
    console.log("eres mayor de edad")
}else{
    console.log("debes ser mayor de edad")
} 
// filtro en el login 
let usuario = prompt("ingresa tu nombre de usuario")
let contra = prompt("ingresa tu contraseña")
let pass = 19437839;
let user = "pedroolmedo"
if (usuario != user && contra != pass){
    console.log("Bienvenido" + usuario);
}else{
    console.log("usuario o contraseña incorrecta")
}
// login con intentos limitados
let clave = 19437839;
for (let index = 1; index < 3; index++){
    let palabraclave = prompt("ingrese contraseña");
    if (clave == palabraclave){
        console.log("ingreso exitoso");
        break;
    }else{
        console.log("tenes" + (5 - index) + "intentos");
    }
}
// filtro por si sos socio o no 
let socio = parseFloat(prompt("sos socio:si o no"))
while(socio == si){
    console.log("podes ingresar, sos socio");
    socio = parseFloat(prompt("sos socio:si o no"))
}

//switch
let ingreso = prompt("Ingresa una opcion \n 1=Carbon \n 2=Leña \n 3=Postes \n 4=Tablas \n 5=Varillas"
);
switch(ingreso){
    case "1":
        alert("Seleccionaste carbon");
        break;
    case "2":
        alert("Seleccionaste Leña");
        break;
    case "3":
        alert("Seleccionaste postes");
        break;
    default:
        alert("Sin stock");
        break;
}

//con numeros, hacen operacion de sumar
function sumar(parametro1, parametro2){
    if (isNaN(parametro1) || isNaN(parametro2)){
        alert("Los valores ingresados deben se numeros");
    } else{
        alert("Son " + parametro1 + parametro2 + "productos.");
    }
}
let num1 = parseFloat(prompt("ingrese la cantidad de postes."));
let num2 = parseFloat(prompt("ingrese la cantidad de varillas."))
sumar(num1, num2);
//objetos
function Auto(tipo, largo, ancho){
    this.tipo = tipo;
    this.largo = largo;
    this.ancho = ancho;
    this.proceso = () => {
        console.log("Estoy en proceso")
    };
    this.listo = () => {
        console.log("Su pedido es de una tabla de " + this.ancho + "cm de ancho y " + this.largo + "cm de largo");
    }
}

const pedido3= new Auto("Quebracho", 44, 400);
const pedido4= new Auto("Algarrobo", 65, 1300,);
auto3.proceso();
auto4.proceso();
auto3.listo();
auto4.listo();

let ingresoTipo=prompt("Ingresa la madera que desea");
let ingresoLargo=prompt("Ingresa el largo de tabla");
let ingresoAncho=prompt("Ingresa el ancho de tabla");
//con esto y lo anterior puedo construir un formulario, que haga un pedido de madera nuevo
const pedido5= new Auto(ingresoTipo, ingresoLargo, ingresoAncho,);
console.log(pedido5);
//change
const opcionesDeIn= document.querySelectorAll('input')
console.log(opcionesDeIn);
opcionesDeIn[0].addEventListener('change',()=>{
    console.log('cambio');
})
opcionesDeIn[1].addEventListener('change',()=>{
    console.log('cambio');
})
opcionesDeIn[2].addEventListener('change',()=>{
    console.log('cambio');
})
opcionesDeIn[3].addEventListener('change',()=>{
    console.log('cambio');
})

//funciones
/*
//otro ej de funcion
function solicitarNombre(){
    let nombre = prompt("Ingresa tu nombre")
    alert(nombre)
}
solicitarNombre()
*/
//Funciones con parametros
/*//
function saludar(nombre){
    alert("hola " + nombre + " como estas");
}
saludar("Martin");
saludar("luis");

/*
// esto tambien se puede usar con numero y que haga calculos
function saludar(nombre, apellido){
    alert("hola " + nombre + " " + apellido + " como estas");
}
let ingresaNombre = prompt("Ingresa nombre")
let ingresaApellido = prompt("Ingresa apellido")
saludar(ingresaNombre, ingresaApellido)
*/
/*
//con numeros, hacen operacion de sumar
function sumar(parametro1, parametro2){
    if (isNaN(parametro1) || isNaN(parametro2)){
        alert("Los valores ingresados deben se numeros");
    } else{
        alert(parametro1 + parametro2);
    }
}
let num1 = parseFloat(prompt("ingrese el primer numero"));
let num2 = parseFloat(prompt("ingrese el segundo numero"))
sumar(num1, num2);
*/
//funciones
/*
//declarar funciones
function saludar(){
    //codigo a ejecutar
    alert("Hola como estas");
}
//llamar a la funcion, lo puedo usar en la linea que quiera para no escribir tanto codigo
saludar();
*/

/*
//clase objetos
//objeto literal 
const personaje1={
    nombre:"Luis",
    apellido:"Gontero",
    calle:"Camino San Carlos",
    edad:22,
};
const personaje2={
    nombre:"Caro",
    apellido:"Echeverrya",
    calle:"Camino San Carlos",
    edad:50,
    hijos:{
        primero:"Gre",
        segundo:"Esteban",
    }
};
*/
/*
mostrar(personaje1);
mostrar(personaje1("nombre"));
mostrar(personaje1);
mostrar(personaje2("nombre"));
mostrar(personaje2("hojos"));
mostrar(personaje1.edad);
//
const hijosDeCaro = personaje2.hijos;
console.log(hijosDeCaro);
console.log(hijosDeCaro.primero);
console.log(hijosDeCaro.segundo);

const auto1 ={
    marca: "vw",
    anio: 2014,
    motor: 1.5,
    modelo: "gol"
}
const auto2 ={
    marca: "Toyota",
    anio: 2014,
    motor: 1.5,
    modelo: "Etios"
}
/*
//funcion constructora (es mejor que la anterior, mas corta)
function Auto(marca, anio, motor, modelo){
    this.marca = marca;
    this.anio = anio;
    this.motor = motor;
    this.modelo = modelo;
}

const auto3= new Auto("Audi", 2022, 3.9, "TT");
const auto4= new Auto("Ford", 1980, 3.9, "Falcon");
console.log(auto3);
console.log(auto4);
console.log(auto4.color= "Rojo");
*/
//funcion constructora + metodo(el metodo esta ligado a un objeto especifico)
/*
function Auto(marca, anio, motor, modelo){
    this.marca = marca;
    this.anio = anio;
    this.motor = motor;
    this.modelo = modelo;
    this.marchar = () => {
        console.log("Estoy en marcha")
    };
    this.presentar = () => {
        console.log("Soy un auto modelo" + this.modelo + "año: " + this.anio);
    }
}

const auto3= new Auto("Audi", 2022, 3.9, "TT");
const auto4= new Auto("Ford", 1980, 3.9, "Falcon");
auto3.marchar();
auto4.marchar();
auto3.presentar();
auto4.presentar();

let ingresoMarca=prompt("Ingresa la marca del auto");
let ingresoAnio=prompt("Ingresa el año del auto");
let ingresoModelo=prompt("Ingresa el modelo del auto");
let ingresoMotor=prompt("Ingresa el motor del auto");
//con esto y lo anterior puedo construir un formulario, que haga un auto nuevo
const auto5= new Auto(ingresoMarca, ingresoAnio, ingresoMotor, ingresoModelo);
console.log(auto5);
//metodo de los objetos(acciones o funciones son)
//toLowerCase hace que si ingresamos algo en mayuscula se guarde como minuscula
let useri = prompt("ingresa tu usuario");
let usuarioGuardado = useri.toLowerCase();
console.log(useri);
console.log(usuarioGuardado);
/* (sin terminar) let frase = "js se aprende practicando"
let fraseMayus = frase.toUpperCase
console.log(frase)
console.log(frase.length)*/



//clase arrays
//son un tipo de datos que sirven para almacenar valores en forma de lista
//siempre comienzan en la posicion 0
/*
const array=[];
console.log(array);

const numeral= [1,2,4,65,45,34,21];
console.log(numeral);

const mixto=[1,"batman", false, {nombre:"Luiso"},3.4];
/* console.log(mixto);
console.log(mixto.length);
console.log(mixto[0]);
console.log(mixto[1]);
console.log(mixto[12]);*/
//lo anterior lo saque porque es mas facil con bucle(como esta en lo sig)
/*for(let i = 0; i< mixto.length; i++){
    console.log(mixto[i]);
}*/
/*
//como meter mas elementos al final
array.push("juan",1,false);
console.log(array);
mixto.push(44);
console.log(mixto);
*/
/*
//como agregar elementos al principio
mixto.push(44);
console.log(mixto);
mixto.unshift("hola");
console.log(mixto);
mixto.pop();  //elimina del principio
console.log(mixto);
mixto.shift();
console.log(mixto);
//splice elimina de a barios y del medio

*/

/*
//console.dir(document.body)
//si fueran id
//const h1 = document.getElementById('h1');
//console.log(h1);
const parrafo= document.getElementsByTagName('p');
console.log(parrafo[2].innerHTML);//para ver el contenido de la etiqueta
const parrafoClases = document.getElementsByClassName('row')
console.log(parrafoClases[1].innerHTML)//le digo que me de el row en la posicion 1
console.log(parrafoClases[0].innerText="este es un contenido unico")//le cambio lo que dice
//crear elementos
const texto = documente.createElement('p')
texto.innerText= "soy un parrafo de js";
document.body.append(texto);
//deberia aparecer la palabra ingreso en el input pero no me sale (preguntar)
contenedor.append(texto);
const input = document.getElementById('ingreso')
input.value= 'ingreso'
*/
//
const ul= document.getElementById('lista')
const nombres = ["Hugo", "Paco", "Luis"];
for (const nombre of nombres) {
    let li = document.createElement('li');
    li.innerText= nombre;
    ul.append(li)
}
//no se que esta mal pero deberia aparecer en html 
const producto= {id:1, nombre:"Tela", precio:200}
let concatenado= "id: " + producto.id + " Nombre: " + 
producto.nombre + "precio: " + producto.precio;
let templatesLiterals= `id ${producto.id}
Nombre: ${producto.nombre}
Precio: $ ${producto.precio}`
contenedor.innerText= templatesLiterals
//eventos//este codigo no anda, tiene un error
const contador= document.querySelector('#contador'),
sumar=document.querySelector('#sumar'),
restar=document.querySelector('#restar');
function cambio(num){
    let cont = num++
   contador.innerText= num++
}
sumar.addEventListener('click',()=>{
    cambio(1)
})
restar.addEventListener('click',()=>{
    cambio(-1)
})