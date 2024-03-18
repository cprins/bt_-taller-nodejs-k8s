//Desestructuracion de objetos

const objeto = {
    id: 123,
    nombre: 'Cesar',
    edad: 20,
    listanumeros: [1,2,3,4]


}

const {nombre,listanumeros}= objeto; // Del json le indicas cuales campos quieres

console.log (objeto.nombre);
console.log (nombre,listanumeros);

//Otro tipo (Desestructuracion por posicion)

const [var1,var2]=listanumeros;
console.log(var1,var2);