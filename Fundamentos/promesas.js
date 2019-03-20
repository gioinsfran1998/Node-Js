let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)


        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioBD = salarios.find(salario => salario.id === empleado.id)

        if (!salarioBD) {
            reject(`No existe un salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            });
        }
    });
}


getEmpleado(1).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    })
    .catch(err => {
        console.log(err);
    });



// getEmpleado(4).then(empleado => {
//     console.log('Empleado de BD', empleado);

//     getSalario(empleado).then(resp => {
//         console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
//     }, err => console.log(err));


// }).catch((err) => console.log(err))