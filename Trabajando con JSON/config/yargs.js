const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
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
//     --completado -c default:truenio
//     --help