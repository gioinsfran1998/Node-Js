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

/*
## Actualizar listado : tarea por hacer, descripcion, completado
*/

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

/*
## Borrar tareas por hacer, node app borrar - d "Descripcion"
*/


const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}