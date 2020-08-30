const fs = require('fs')
const colors = require('colors')

let listadoPorHacer = []

/*const getList = (complete) => {
    loadDB();
    let filterList;
    switch (complete){
        case `true`:
            filterList = taskList.filter(task => task.complete === !!complete);
            taskList = filterList;
        break;
        case `false`:
            filterList = taskList.filter(task => task.complete === !complete);
            taskList = filterList;
        break;
        default:
            taskList
        break;
    }
    return taskList;
};

*/
const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/datos.json')
    } catch (error) {
        listadoPorHacer = [];
    }

}

const guardarDB = () => {
    let informacion = JSON.stringify(listadoPorHacer)

    fs.writeFile('./db/datos.json', informacion, (err) => {
        if (err) throw new Error('No se pudo subir el archivo', err);

    })

}

const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer;
}
const getListado = (completas) => {
    //listadoPorHacer = require('../db/datos.json')

    cargarDB()

    let nuevoListar;
    switch (completas) {
        case true:
            nuevoListar = listadoPorHacer.filter(tarea => {
                return tarea.completado === completas
            })
            listadoPorHacer = nuevoListar;
            break;
        case 'true':
            nuevoListar = listadoPorHacer.filter(tarea => {
                return tarea.completado === true
            })
            listadoPorHacer = nuevoListar;
            break;
        case 'false':
            nuevoListar = listadoPorHacer.filter(tarea => {
                return tarea.completado === false
            })
            listadoPorHacer = nuevoListar
            break;
        default:
            listadoPorHacer
            break;
    }
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}
const borrar = (descripcion) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB()
        return `Eliminas la tarea ${descripcion}`
    } else {
        console.log('La tarea no existe');
    }
    console.log(index)


}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}