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
