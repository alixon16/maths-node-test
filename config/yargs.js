const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consala la tabla con el producto de la base', opts)
    .command('crear', 'Crea un archivo con los productos de la base', opts)
    .help()
    .argv;

module.exports = {
    argv
}