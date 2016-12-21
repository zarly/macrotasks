
var Macrotask = require('../lib/macrotask');

function MacrotaskCmd (options) {
    options = options || {};
    this.timeout = options.timeout || 300000;
}

MacrotaskCmd.prototype = new Macrotask();

/**
 * @param {Array} params
 * @param {Number} timeout
 * @returns {Promise}
 */
MacrotaskCmd.prototype.run = function (params, timeout) {
    timeout = timeout || this.timeout;
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function onTimeoutError () {
            reject(new Error('Timeout exception'));
        }, timeout);
    });
    return promise;
};

module.exports = Macrotask;
