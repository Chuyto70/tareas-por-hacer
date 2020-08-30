const argv = require('./yargs').argv
const porHacer = require('./por-hacer/por-hacer')

let comandos = argv._[0]
console.log(argv)
switch (comandos) {

    case 'crear':
        let tarea = porHacer.crear(argv.d)
        console.log(tarea)
        break;
    case 'listar':

        let listado;
        if (argv.completas === 'undefined') {
            listado = porHacer.getListado()
        } else {
            listado = porHacer.getListado(argv.completas)
        }
        for (let lista of listado) {
            console.log('=========Por hacer=========='.green);
            console.log(lista.descripcion)
            console.log('Estado: ' + lista.completado);
            console.log('============================'.green);
        }



        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)

        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.d)
        console.log(borrado)
        break;
    default:
        console.log('Comando no reconocido');
}