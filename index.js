
exports.Macrotask = require('./lib/macrotask');
exports.Namespace = require('./lib/namespace');

var MacrotaskCmd = require('./types/cmd');
exports.Macrotask.registerType('cmd', MacrotaskCmd);
