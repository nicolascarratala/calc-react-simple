module.exports = {
    mode: 'development', // o 'production'
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,    // Archivos que Babel procesará
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Presets para JS moderno y JSX
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // Resolver archivos .js y .jsx
    },
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
  };
  