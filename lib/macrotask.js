
function Macrotask (options) {
    options = options || {};

    var typeHandler = registeredTypes[options.type];
    if (typeHandler) {
        return new typeHandler(options);
    }

    this.timeout = 300000;
}

Macrotask.prototype.run = function run () {
    throw new Error('Method should be overridden');
};

Macrotask.prototype.onMessage = function onMessage () {
    throw new Error('Method should be overridden');
};

Macrotask.prototype.onComplete = function onComplete () {
    throw new Error('Method should be overridden');
};

var registeredTypes = {};
Macrotask.registerType = function (typeName, typeHandler) {
    registeredTypes[typeName] = typeHandler;
};

module.exports = Macrotask;
