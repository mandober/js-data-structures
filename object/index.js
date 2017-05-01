'use strict';
/*
DATA STRUCTURES: Object

Object, with regards to its usage as a data structure, is a collection of key/value pairs.
Keys are object's property names and are always strings or symbols (or they are coerced to strings).
Property value can be anything.
*/
var obj = {
    a: 1,
    b: 2
};
"a" in obj; // true

/*
A small problem when using an object as a dictionary (map, hashmap) is that because of delegation,
properties, not found on the object itself, are looked up by searching the prototype chain. Since
a new object is [[Prototype]] linked to Object.prototype, all properties of Object.prototype are
available to the new object. Although the names of these properties are not that appealing to be
used as keys, it is best to play safe and just remove the object from the prototype chain.
*/
var obj = {};
"watch" in obj; // true
obj = Object.create(null); // remove it from the prototype chain
"watch" in obj; // false
"__proto__" in obj; // false

// now an object can have arbitrary named keys:
obj.__proto__ = 113;
obj.__proto__; // 113


// Existing object can also be removed from the prototype chain
var obj = {
    1: "one", // integers used as keys are converted to strings
    2: "two"
};
Object.setPrototypeOf(obj, null);

/* Although object's keys are always strings (symbols are basically unique strings and everything else
is coerced to string), 53bit unsigned integers are treated specially: they are not just converted to a
a string, but rather they are first converted to an 53bit unsigned integer and than back to a string.
*/
obj[2 ** 53 - 1] = "2**53-1";
obj[2 ** 53] = "2**53";
obj[2 ** 53 + 1] = "2**53+1";
obj; /* obj {
    '9007199254740991': '2**53-1',
    '9007199254740992': '2**53+1',
} */

// same as:
var o = {
    9007199254740991: 991,
    9007199254740992: 992,
    9007199254740993: 993,
    [Number.MAX_SAFE_INTEGER + 3]: 995
} /* o {
    '9007199254740991': 991,
    '9007199254740992': 993,
}
because 9007199254740993 is too big a number to represent in JS, the closest representable number is used i.e. 9007199254740992
*/
Number.MAX_SAFE_INTEGER; // 9007199254740991

