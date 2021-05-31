const colors = require("colors");
const { crear } = require("./operacion/producto");
const { argv } = require("./config/yargs");


console.clear();

crear(argv.b, argv.l, argv.L)
    .then(nombreArchivo => console.log(`Archivo ${nombreArchivo.rainbow} creado`))
    .catch(err => console.log(err));