/*
Configuracion : 
- Hacer una app donde pueda escribir (node app -d Ciudad del este)
y que me aparezca el clima de esa ciudad  con solo ese comando

*/


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// Requerimos el yargs, ya pasando la opcion atraves de la funcion .options