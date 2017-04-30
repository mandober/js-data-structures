# Data structures in JS

## Array

Array is collection of key/value pairs.  
It is a specialized subtype of object.  
Keys in array are indices and they can be integers with maximum value up to 2**32 (32 bit integers).

### Integer indices

**An integer index is a string that, if converted to a 53-bit unsigned integer and back is the same value.**

For example, '1' is an integer index. '02' is not an integer index: converting it to an integer and back results in the different string (`"02" !== "2"`).

Instances of String and Typed Array have integer indices. The indices of Arrays are a subset of integer indices: they have a smaller range, they include 32-bit unsigned integers (not 53-bit as objects do). 

According to the EcmaScript specification:
*A property key `P` (a string) is an array index if and only if: `ToString(ToUint32(P))` is equal to `P` and `ToUint32(P)` is not equal to `2**32-1`*

So all values in brackets are converted to strings and interpreted as property keys, even numbers:
```js
var arr = ['a', 'b'];
arr['0'] // 'a'
arr[0] // 'a'
```

Namely, key `P` is converted to a number, then converted to a 32-bit unsigned integer and finally converted back to a string.

If initial and final string are the same, it can be used as an index of an array. If not, the string becomes an array's property name. The range of 32bit integers is from 0 to 2**32-1.
