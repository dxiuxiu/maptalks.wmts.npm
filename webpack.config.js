const path = require('path')
module.exports ={
    mode : 'production',
    entry : './src/index.js',
    externals : ["maptalks"],
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'maptalks.wmts.js',
        libraryTarget : 'umd',
        library : 'maptalks'
    }
}