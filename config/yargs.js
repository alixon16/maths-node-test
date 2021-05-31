const argv = require("yargs")
    .option('h', { alias: 'help' })
    .option('v', { alias: 'version' })
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('L', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Número hasta donde se multiplicará la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }

        if (isNaN(argv.L)) {
            throw 'El límite debe ser un número';
        }

        return true;
    })
    .argv;

module.exports = {
    argv
}