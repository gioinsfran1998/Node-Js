// requireds

const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');

/* Crear una funcion que nos permite listar ingresando la base y el limite */

let listarTabla = (base, limite = 10) => {

    console.log('==============');
    console.log(`Tabla de ${ base }`.red);
    console.log('==============');

    for (i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un numero ${ base }`);
            return;
        }

        let data = '';

        for (i = 1; i <= 10; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}