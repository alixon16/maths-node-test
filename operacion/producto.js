const fs = require('fs');
const colors = require("colors");

const crear = async(base, listar = false, limite = 10) => {
    try {
        let salida = '',
            consola = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.white} ${i} ${'='.white} ${base * i}\n`;
        }

        if (listar) {
            console.log("===============".grey);
            console.log('  Tabla del'.grey, colors.blue(base));
            console.log("===============".grey);
            console.log(consola);
        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }

        console.log("===============".grey);
        console.log(`  Tabla del ${base}  `.grey);
        console.log("===============".grey);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }

        resolve(true);
    })
}

module.exports = {
    crear,
    listar
}