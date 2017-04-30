// DATA STRUCTURES: Object
'use strict';

/*
Object, with regards to its usage as a data structure, is a collection of key/value pairs.
Keys are object's property names and are always strings or symbols (or they are coerced to strings).
Property value can be anything.
*/

let obj = {
    a: 1,
    b: 2
};

// Object can be removed from the prototype chain in order to prevent delegation.
// This way they are more suitable to be used as storage for other data structures
// because (missing) properties won't be searched for up the prototype chain.
let obj2 = Object.create(null);
obj2.a = 11;
obj2.b = 22;

// Existing object can also be removed from the prototype chain
Object.setPrototypeOf(obj, null);