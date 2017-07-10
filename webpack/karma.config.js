/**
 * Created by Kimmo on 10/07/2017.
 */

var webpackConfig = require('./webpack.local.config');

webpackConfig.entry = {};

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // framework to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files to exclude
    exclude: [],

    // prepossess matching file before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../static/js.src/test_index.ks': ['webpack', 'sourcemap'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN \\ config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable disable watching file and executing test whenever file is changed
    autoWatch: true,
    autoWatchBatchDelay: 300,

    // start there browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continues Integration mode
    // if true karma captures browsers, runs the test and exits
    singleRun: false,

    // Concurrency level
    // how many browsers should be started simultaneous
    concurrency: Infinity,

    // Webpack
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
