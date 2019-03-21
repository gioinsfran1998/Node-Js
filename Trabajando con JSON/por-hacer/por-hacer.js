const fs = require('fs');
/* 
## File System (Nativo de NodeJs)
- Utilizamos el fs.writeFile para guardar nuestros archivos en un .json


*/
let listadoPorHacer = [];

// Guardar el objeto data en un archivo data.json
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

/* 
## Leer el archivo en .json y retornarlo en listadoPorHacer

*/
const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

/*
## Obtener listado : tarea por hacer, descripcion, completado
*/

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

module.exports = {
    crear,
    getListado
}