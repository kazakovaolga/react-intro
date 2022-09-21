import 'webpack-dev-server';
import * as webpack from 'webpack';
import { resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV as
  | 'development'
  | 'production'
  | undefined;

const GITHUB_PREFIX = '';

const config: webpack.Configuration = {
  entry: { main: './src/index.tsx' },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // assetModuleFilename: 'images/[name][ext]',
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },     
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        // generator: {
        //   publicPath: 'assets/[name][ext]',
        // },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      isProd: NODE_ENV === 'production',
      PREFIX: JSON.stringify(GITHUB_PREFIX),
    }),
    new MiniCssExtractPlugin(),
  ],
  mode: NODE_ENV,
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ['*.html'],
  },
};

export default config;
