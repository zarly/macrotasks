
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

module.exports = Namespace;
