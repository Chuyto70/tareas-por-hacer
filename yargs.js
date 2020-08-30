const { boolean } = require('yargs')

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de crear la tarea'
        }
    })
    .command('actualizar', 'Actualiza las tareas', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de crear la tarea'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra un elemento', {
        descripcion: {
            alias: 'b'
        }
    })
    .command('listar', 'lista las tareas', {
        completas: {
            alias: 'c'
        }
    })
    .help()
    .argv

module.exports = {
    argv
}