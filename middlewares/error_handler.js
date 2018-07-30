let logger = require('../utils/loggers/logger')
function errorHandler(err, req, res, next){

  // logger(level, msg,...[,meta[,callback]])

  let metaError = {}
  logger('error', 'error: %s', err.message, {stack: err.stack})
}

module.exports = errorHandler
