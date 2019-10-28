## About

Hiding a exports from beeing exposed outside a package.

### Private module ? Just hidden..

- when installing an package
- the main entry exposed an object
- the object is accessible straight from the node modules
- if you want an internal modules, you just should access them directly ../PrivateModule.js

## How To Use ?

- require the module (folder - nodejs-1)
- you will get User and Product function constructor
- you will not be able to use the message - " private module ", only when require the specific js file
