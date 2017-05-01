# Data structures in JS

## Object

Object, with regards to its usage as a data structure, is a collection of key/value pairs.

While value can be anything, keys can only be strings or symbols (symbols are basically unique strings). Any other value is coerced to a string. 


### Problems with keys

There are several shortcomings when using object as a hashmap (dictionary).

#### Integers

Although object's keys are always (coerced to) strings, an integer is treated specially: it is not merely coerced to a string, but rather, it is first converted to an 53bit unsigned integer and than back to a string. If it comes back unchanged that value can be considered as an integer index. If not, the value is an ordinary property name. The range of 53bit integers is from 0 to 2**53-1.

Because of this very big integers may have surprising effects when used as property names:

```js
var o = {
    9007199254740991: 1,
    9007199254740992: 2,
    9007199254740993: 3,
} 
/* {
    '9007199254740991': 1,
    '9007199254740992': 3,
} */

Number.MAX_SAFE_INTEGER; // 9007199254740991
```
The 3rd key, 9007199254740993, being too big a number to be represented by JS, becomes the closest representable number i.e. 9007199254740992 (thus overwriting the 2nd key's value). This wouldn't occur had the value been an explicit string (quoted integer).


#### Octals

Keys, specified in the deprecated octal form may bring inconsistences. Namely, the version for specifying an octal number with leading zero `010` is deprecated in ES6, the only accepted version is now with a leading zero followed by an `o` or `O` (small or upper case letter O), as in `0o10`, but in Firefox 53.0 and Chrome Canary 60.0.3085.0 (Node 7.9.0 behaves the same as Chrome)
some inconsistences are still present.

```js
var z = {
    07: 7,
    08: 8,
    09: 9,
    010: 10,
    011: 11,
    018: 18,
    019: 19
};
z; 
{
    '7': 7,
    '8': 10,
    '9': 11,
   '18': 18,
   '19': 19
}
```

#### Prototype chain

A small problem when using an object as a dictionary (map, hashmap) is that because of delegation,
properties, not found on the object itself, are looked up by searching the prototype chain. Since
a new object is [[Prototype]] linked to Object.prototype, all properties of Object.prototype are
available to the new object. Although the names of these properties are not that appealing to be
used as keys, it is best to play safe and just remove the object from the prototype chain.

```js
var obj = {};
"watch" in obj; // true
"__proto__" in obj; // true
obj = Object.create(null);
// now an object can have arbitrary names for keys:
"watch" in obj; // false
"__proto__" in obj; // false
obj.__proto__ = 113;
obj.__proto__; // 113
```

> By removing an object from the prototype chain and using strings explicitly as the object's keys, it is possible to turn an object into a hashmap/dictionary.

