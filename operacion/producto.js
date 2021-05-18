const fs = require('fs');
const colors = require("colors");

let crear = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }

            // console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    })
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