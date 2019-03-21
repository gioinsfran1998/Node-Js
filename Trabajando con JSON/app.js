//const argv = require('yargs').argv;
/* Requerimos el yargs */
const argv = require('./config/yargs').argv;

/* Requerimos el colors */
const colors = require('colors');


const porHacer = require('./por-hacer/por-hacer');



/*
## Lista de instrucciones para disparar ejecuciones por consola ##
- node app crear -d "Tarea por hacer" = Crea las tareas
- node app listar = Lista todas las tareas 
- node app actualizar -d "Pasear al perro" -c true = Actualiza la tarea como completa
*/

// Guardamos el valor del objeto ingresado por consola en una variable
let comando = argv._[0];


switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=========== Tarea por hacer ==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================================='.green);
        }

        break;

    case 'actualizar':
        console.log('Actualizar todas las tareas por hacer');
        break;

    default:
        console.log('Comando no es reconocido');
}