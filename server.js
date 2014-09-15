'use strict';

// Requires meanio
var mean = require('meanio');

//process.env.NODE_ENV = "development";

// Creates and serves mean application
mean.serve({ /*options placeholder*/ }, function(app, config) {
  console.log('Mean app started on port ' + config.port + ' (' + process.env.NODE_ENV + ')');
});
