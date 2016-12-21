
var Macrotask = require('../lib/macrotask');
var childProcess = require('child_process');

function MacrotaskCmd (options) {
    options = options || {};
    this.verbose = options.verbose || false;
    this.timeout = options.timeout || 300000;
    this.cmd = options.cmd;
    this.cwd = options.cwd;
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
    if (this.cwd) {
        cmd = 'cd ' + this.cwd + ' && ' + cmd;
    }
    if (this.verbose) {
        console.log('cmd = %s', cmd);
    }

    var promise = new Promise(function (resolve, reject) {
        var tid = setTimeout(function onTimeoutError () {
            reject(new Error('Timeout exception'));
        }, timeout);

        childProcess.exec(cmd, function (error, stdout, stderr) {
            clearTimeout(tid);
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
