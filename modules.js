//Modules = Encapsulated Code (only share minimum)
//CommonJS,every file is module ( by default)
const names = require('./module-names.js');
const sayHi = require('./module-hi.js');
const data = require('./alternative-flavour.js');
require('./mind-grenade.js');
// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);
