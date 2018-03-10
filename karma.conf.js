module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'chai'],

    files: [
      { pattern: 'test/**/*.test.js', watched: false }
    ],

    preprocessors: {
      'src/**/*.vue': [ 'webpack' ],
      'src/**/*.js': [ 'webpack' ],
      'test/**/*.test.js': [ 'webpack' ]
    },
    
    webpack: require('./webpack.config')
  })
}