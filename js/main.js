
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
*/
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