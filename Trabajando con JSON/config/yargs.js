const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

// comando crear ''
//     --descripcion -d

// comando actualizar ''
//     --descripcion -d
//     --completado -c default:true
//     --help