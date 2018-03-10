module.exports = (config) => {
  config.set({
    browsers : ['Chrome'],

    frameworks: ['mocha', 'chai'],

    files: [
      { pattern: 'test/**/*.test.js', watched: false }
    ],

    reporters: ['karma-remap-istanbul'],

    remapIstanbulReporter: {
      reports: {
        html: 'coverage/'
      }
    },

    preprocessors: {
      'src/**/*.vue': [ 'webpack' ],
      'src/**/*.js': [ 'webpack' ],
      'test/**/*.test.js': [ 'webpack' ]
    },

    webpack: require('./webpack.config')
  })
}