//BELLO BOBADILLA BARBARA ITZEL
const persona = {
    nombre:"Barbara Bello",
    edad:19,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

const {nombre,edad,direccion:{ciudad,pais}}=persona;
console.log("Me llamo " + nombre + " , tengo "+ edad + " años y vivo en " + ciudad + ", " + pais + ".");