# macrotasks

Tool for running external tools as simple javascript functions.

## Usage example #1

```
var macrotasks = require('macrotasks');

var ns = new macrotasks.Namespace();

ns.defineTask('pwd', {
    timeout: 10000,
    type: 'cmd',
    cmd: 'ls -alh',
    cwd: '..'
});

ns.runTask('pwd').then(function (res) {
    console.log('Success:', res);
}).catch(function (err) {
    console.log('Error:', err);
});
```

## Usage example #2

```
var macrotasks = require('macrotasks');

var ns = new macrotasks.Namespace();

ns.fastTask({
    timeout: 3000,
    type: 'cmd',
    cmd: 'node -e console.log(2+3)',
    verbose: true
}).then(function (res) {
    console.log('Success:', res);
}).catch(function (err) {
    console.log('Error:', err);
});
```
