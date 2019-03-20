let nombre = 'Deaedpool';
let real = 'Wade Winston';

console.log(nombre + ' ' + real);
console.log(`${ nombre } ${ real }`);

function getNombre() {
    return `${ nombre } ${ real }`
}

console.log(` El nombre es : ${ getNombre() } `);