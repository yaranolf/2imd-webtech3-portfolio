const logger = require('../logger');

module.exports.logHelloWorld = () => {
    logger('Hello World');
}

module.exports.logHelloStudent = () => {
    logger('Hello Student');
}