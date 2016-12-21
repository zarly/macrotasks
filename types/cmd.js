
var Macrotask = require('../lib/macrotask');
var childProcess = require('child_process');

function MacrotaskCmd (options) {
    options = options || {};
    this.timeout = options.timeout || 300000;
    this.cmd = options.cmd;
    this.verbose = options.verbose || false;
}

/**
 * @param {Array} params
 * @param {Number} timeout
 * @returns {Promise}
 */
MacrotaskCmd.prototype.run = function (params, timeout) {
    params = params || [];
    timeout = timeout || this.timeout;
    var cmd = [].concat([this.cmd], params).join(' ');
    if (this.verbose) console.log('cmd = ', cmd);

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function onTimeoutError () {
            reject(new Error('Timeout exception'));
        }, timeout);

        childProcess.exec(cmd, function (error, stdout, stderr) {
            if (error) {
                reject(error, stderr);
            }
            else {
                resolve(stdout);
            }
        });
    });
    return promise;
};

module.exports = MacrotaskCmd;
