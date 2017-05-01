# Data structures in JS

## Array

In JS an array is collection of property/value pairs.

It is a specialized subtype of object that internally keeps a count (`length`) of its **indexed** elements. Element of an array is an index/value pair.


> An array index is a string that, if converted to a 32-bit unsigned integer and back is the same value.

For example, "1" is an integer index and "02" is not, as converting it to an integer and back results in the different string (`"02" !== "2"`).


For a property name to be an array index, it must be an unsigned 32bit integer. According to the EcmaScript specification:  
*A property key `P` (a string) is an array index if and only if: `ToString(ToUint32(P))` is equal to `P` and `ToUint32(P)` is not equal to `2**32-1`*

If original and converted string are the same, that string  is considered as an index. **If not, the string becomes an array's property name** and as such doesn't effect the `length` property of an array.

Internally, all values in brackets are converted to strings and interpreted as property keys.

```js
let arr = [0,1,2,3,4,5,6,7,8,9,10];
arr.length; // 11

arr[1]; // 1
arr[01]; // 1
arr[4]; // 4
arr["4"]; // 4
arr[0xa]; // 10
// but:
arr["0xa"]; // undefined

arr.x = 333;
arr.length; // 11
arr.x; // 333
arr["x"] // 333
```


### Temporary edge cases

In Firefox 53.0 and Chrome Canary 60.0.3085.0 (Node 7.9.0 behaves the same as Chrome) there are inconsistences with regards to deprecated octal notation (for example, `08`, instead of the new form `0o8`).
 
Firefox:
```js
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
arr[07]; // 7
arr[08]; // 8   followed by the warning:
// SyntaxError: 08 is not a legal ECMA-262 octal constant
arr[09]; // 9   followed by the warning:
// SyntaxError: 09 is not a legal ECMA-262 octal constant

/* 
The same warning repeats for any values beginning with 0 and ending
with 8 or 9 (018, 019, 028, 029 ...)
Since this octal form is deprecated, the value gets interpreted as decimal number followed by a warning, however sequential numbers do get interpreted as octals:
*/
arr[010]; // 8
arr[011]; // 9
arr[020]; // 16
```

Chrome:
```js
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
arr[07]; // 7
arr[08]; // 8
arr[09]; // 9
// but:
arr[010]; // 8
// and then:
arr[018]; // 18
arr[019]; // 19
// but:
arr[020]; // 16
// ...
```

### Sparse arrays

Deleting an element with `delete` operator leaves a whole (empty slot) in an array. Removing an element with `splice` method removes (and returns) element(s) without leaving wholes in the array. `splice` mutates the original array; it can be used to add or remove elements.
```js
let arr = [0,1,2,3];
delete arr[1]; // true
arr; // Array [ 0, <1 empty slot>, 2, 3 ]
arr.splice(1,1);
arr; // Array [ 0, 2, 3 ]
arr.splice(1,0,1); // Array [ 0, 1, 2, 3 ]
```
Other common mutator methods are pop, push, shift, unshift, sort, reverse. Accessor methods like slice, concat, map, filter don't change original array, they return a new one.