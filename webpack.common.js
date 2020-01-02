const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const InjectMarkdown = require('./inject.config.js');
const devMode = process.env.NODE_ENV !== 'production';


function recursiveIssuer(m) {
    if (m.issuer) {
      return recursiveIssuer(m.issuer);
    } else if (m.name) {
      return m.name;
    } else {
      return false;
    }
  }
  
module.exports = {
    entry: {
        app: './src/index.js',
        posts: './src/postIndex.js'
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            app: {
              name: 'app',
              test: (m, c, entry = 'app') =>
                m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
              chunks: 'all',
              enforce: true,
            },
            posts: {
              name: 'posts',
              test: (m, c, entry = 'posts') =>
                m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
              chunks: 'all',
              enforce: true,
            },
          },
        },
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            title: 'Home Page',
            chunks: ['app'],
            favicon: './images/favicon.ico'
        }),
        ...InjectMarkdown.map(p => {
            return new HtmlWebpackPlugin({
                ...p,
                chunks: ['posts'],
            });
        })
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: './'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.pug$/,
                //include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            self: true,
                            pretty: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: './',
                            useRelativePath: true,
                            esModule : false
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'fonts/',
                            useRelativePath: true
                        }
                    }
                ]
            }
        ]
    }
};