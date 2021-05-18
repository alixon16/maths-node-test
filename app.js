const colors = require("colors");
const { argv } = require("./config/yargs");
const producto = require("./operacion/producto");

let comando = argv._[0];

switch (comando) {
    case 'listar':
        producto.listar(argv.base, argv.limite);
        break;
    case 'crear':
        producto.crear(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.grey(archivo)}`))
            .catch(err => console.log("Error: ", err));
        break;
    default:
        console.log('No se encontró el comando. Escriba --help para mostrar la ayuda.');
        break;
}