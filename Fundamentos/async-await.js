/*
 * Async Await *
 */

/*

->  Usando la funcion asycn() estamos evitando
escribir todo el codigo de la Promesa que 
tenemos a continuacion ...

let getNombre = () => {
    return new Promise( (resolve, reject) => {
        resolve('Fernando');
    });
}
*/


// let getNombre = async() => {

//     // throw new Error = 'Error en la base de datos '
// };

// let saludo = async() => {

//     let nombre = await getNombre();

//     return `Hola ${ nombre }`;



// let saludo = async() => {

//     let nombre = await getNombre();

//     return `Hola ${ nombre }`;
// }


let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Fernando');

        }, 3000);

    });
}

let saludo = async() => {

    let nombre = await getNombre()

    return `Hola ${ nombre }`;

}

saludo().then((mensaje) => {
    console.log(mensaje);
}).catch((err) => {
    console.log('Error de async', err);
});


// getNombre().then((nombre) => {
//     console.log('Su nombre es:', nombre);
// }).catch((err) => {
//     console.log('Error de async', err);
// });