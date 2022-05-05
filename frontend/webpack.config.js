const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') {
  // Режим production,если
  // при запуске вебпака было указано --mode=production
  mode = 'production';
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html', // Данный html будет использован как шаблон
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css', // Формат имени файла
  }),
];

module.exports = {
  mode,
  plugins,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    // filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут
    // складываться в dist/assets
    clean: true,
  },

  // plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      // // CSS, PostCSS, Sass
      // {
      //   test: /\.(scss|css)$/,
      //   use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      // },
      // {
      //   test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      //   type: 'asset/inline',
      // },
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
        // В продакшен режиме
        // изображения размером до 8кб будут инлайнится в код
        // В режиме разработки все изображения будут помещаться
        // в dist/assets
        generator: {
          filename: './asset/images/[name][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './asset/fonts/[name][ext]',
        },

      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    // alias: {
    //   images: path.resolve(__dirname, 'src/images/'),
    // },
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'dist/'),
    // },
    // port: 3000,
    // devMiddleware: {
    //   publicPath: 'https://localhost:3000/dist/',
    // },
    hot: true,
  },
};
