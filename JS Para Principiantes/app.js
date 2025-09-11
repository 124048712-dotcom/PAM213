document.write("<h1>Hola mundo</h1>");

//tipos de datos
//"Hello world" //String
//'Hello world' //String

//1000000 //Number
//-2.3   //Numbre

//Boolean
//true 
//false 

//array
//(['joe','ryan','martha'])
//([1,2,3])
//([true,false,true,false])

//object

/*( {
  "username": 'joe',
  "score": 0.4,
  "hours": 1,
  "proffesional": false
})*/

console.log("Mensaje en consola")
console.log(12)
console.log([8,9,10,11])
console.log({"Codigo":121323, "nombre":"Barbara"})

//Valor constante
 const PI = 3.1416;

 let nombre = "Barbara";
 let apellido = " Bello";
 nom_completo = nombre + apellido;
console.log(nombre)
console.log(apellido)
console.log(nom_completo)

let numero_1 = 15;
let numero_2 = 50;

let respuesta1 = numero_1 + numero_2;
let respuesta2 = numero_1 - numero_2;
let respuesta3 = numero_1 / numero_2;
let respuesta4 = numero_1 * numero_2;
let respuesta5 = numero_1 < numero_2;
console.log(respuesta1)
console.log(respuesta2)
console.log(respuesta3)
console.log(respuesta4)
console.log(respuesta5)

let password = "12345";

let input = "gghhniu";

let result = input == password;
//es condicional con if else y switch
if (result == true){
    console.log("Login correcto")
}else if (password == "12345") {
    console.log("Entrada ")
} 
else {
    console.log("contraseña incorrecto")
}
//el switch es otra forma de hacer condicionales con casos
switch (typecard) {
    case 'debid card':
        console.log("this is a debid card");
        break;
    case "credit card":
        console.log("this is a credit card");
        break;
    default:
        console.log("no card");
}

let i = 20;
while (i > 0) {
    console.log(i);
    i--;
}

let names = ["sebas", "cristobal", "chucho", "Itzel"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (let j = 30; j > 0; j--) {
    console.log( j);
}
// while y for son bucles para hacer repeticiones

// funciones sirven para reutilizar codigo, reciben parametros y retornan valores

let n
function saludar(n) {
    console.log("hola "+ n );
    return n;
}
saludar('chucho');
saludar('sebas');

function add(n1, n2) {
    console.log(n1 + n2);
   
}
add(3,2);
add(100,300);

add(3, 2);
add(32414, 35143);