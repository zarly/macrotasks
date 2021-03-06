# macrotasks

Tool for running external tools as simple javascript functions.

## Usage example #1

```javascript
var macrotasks = require('macrotasks');

var ns = new macrotasks.Namespace();

ns.defineTask('myTaskName', {
    timeout: 10000, // timeout in milliseconds, default is 5 min (300000)
    type: 'cmd',    // execute shell command on local machine
    cmd: 'ls -alh', // shell command
    cwd: '..'       // current working directory for executing command
});

ns.runTask('myTaskName').then(function (res) {
    console.log('Success:', res);
}).catch(function (err) {
    console.log('Error:', err);
});
```

## Usage example #2

```javascript
var macrotasks = require('macrotasks');

var ns = new macrotasks.Namespace();

// create and run anonymous macrotask
ns.fastTask({
    timeout: 3000,
    type: 'cmd',
    cmd: 'node -e console.log(2+3)',
    verbose: true                       // verbose mode
}).then(function (res) {
    console.log('Success:', res);       // print "Success: 5"
}).catch(function (err) {
    console.log('Error:', err);
});
```
