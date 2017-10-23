var nodeExternals = require('webpack-node-externals');

module.exports = {
  // the main entry of our app
  entry: ['./src/index.js', './src/auth/index.js'],
  // output configuration
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
  // how modules should be transformed
  module: {
    loaders: [
      // process *.vue files using vue-loader
      { test: /\.vue$/, loader: 'vue' },
      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]//exclude: /node_modules/ 
  },

  //target: 'node', // in order to ignore built-in modules like path, fs, etc.
  //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  node:
  {
    fs:"empty",
    child_process:"empty"
  },
  // configure babel-loader.
  // this also applies to the JavaScript inside *.vue files
  babel:{
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
