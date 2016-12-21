
var Macrotask = require('./macrotask');

/**
 * @constructor
 */
function Namespace () {
    this._tasks = {};
}

/**
 * Define new macrotask in the namespace
 * 
 * @param {String} taskName
 * @param {Macrotask|Object} taskObject
 */
Namespace.prototype.defineTask = function defineTask (taskName, taskObject) {
    if (!(taskObject instanceof Macrotask)) {
        taskObject = new Macrotask(taskObject);
    }
    this._tasks[taskName] = taskObject;
};

/**
 * Run defined macrotask
 *
 * @param {String} taskName
 * @param {Array} params
 * @param {Number} timeout
 * @returns {Promise}
 */
Namespace.prototype.runTask = function (taskName, params, timeout) {
    var task = this._tasks[taskName];
    if (!task) throw new Error('Task is not defined');
    return task.run(params, timeout);
};

/**
 * Create and run anonymous macrotask
 *
 * @param {Object} taskOptions
 * @param {Array} params
 * @param {Number} timeout
 * @returns {Promise}
 */
Namespace.prototype.fastTask = function (taskOptions, params, timeout) {
    var task = new Macrotask(taskOptions);
    return task.run(params, timeout);
};

module.exports = Namespace;
