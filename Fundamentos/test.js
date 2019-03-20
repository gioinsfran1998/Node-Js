let getUsuarioByID = (id, callback) => {
    let usuario = {
        nombre: 'Miguel',
        id
    }

    if (id === 1) {
        callback(`${ id } Es igual al id 1`)
    } else {
        callback(null, usuario)
    }

}

getUsuarioByID(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('El usuario :', usuario);

});