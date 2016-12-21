# macrotasks

Tool for running external tools as simple javascript functions.

## Usage example

```
var macrotasks = require('macrotasks');

var ns = new macrotasks.Namespace();

ns.defineTask('pwd', {
    timeout: 10000,
    type: 'cmd',
    cmd: 'pwd'
});

ns.runTask('pwd').then(function (res) {
    console.log('Success', res);
}).catch(function (err) {
    console.log('Error', err);
});
```
