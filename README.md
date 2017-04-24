# Data structures in JS

### Finished implementations (links within this repo):
- [x] [Stack](https://github.com/mandober/js-data-structures/tree/master/stack)
- [x] [Linked list](https://github.com/mandober/js-data-structures/tree/master/linked-list)
- [ ] Doubly-linked list
- [ ] [Queue](queue/README.md)
- [ ] [Binary Search Tree](binary-search-tree/README.md)
- [ ] Graph



<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


## Time Complexity

Some classes of commonly encountered time complexity:

-  **Constant Time**: `O(1)`   
  It only takes a single step for the algorithm to accomplish the task.

- **Logarithmic Time**: `O(log n) `   
  The number of steps it takes to accomplish a task is decreased by some factor with each step.

-  **Linear Time**: `O(n)`   
  The number of steps required is directly related (1 to 1).

- **Quadratic Time**: `O(n²) `   
  The number of steps it takes to accomplish a task is n squared.

- **Exponential**: `O(C^n)`   
  The number of steps it takes to accomplish a task is a constant to the power of n.
  
- **Factorial**: `O(n!) `   
  The number of steps it takes to accomplish a task is a n factorial.


<p>&nbsp;</p>
<p>&nbsp;</p>


## JS Data Types

### Object
  - a collection of values accessible through keys
  - keys are strings and symbols; other types are converted to string; under the hood, symbols are also strings (they are guaranteed to be unique strings).
  - although they are still converted to strings, integers as keys are treated somewhat differently: maximum value is 2**53 (53 bit integers). 

### Array
  - array is specialized subtype of object
  - keys can be integers with maximum value up to 2**32 (32 bit integers)


**Own Property Keys**

Retrieves the keys of all own properties of an object, in the following order:

1. First, the string keys that are integer indices, in ascending numeric order.
2. Then all other string keys, in the order in which they were added to the object.
3. Lastly, all symbol keys, in the order in which they were added to the object.

Used by: `Object.assign()`, `Object.defineProperties()`, `Object.getOwnPropertyNames()`, `Object.getOwnPropertySymbols()`, `Reflect.ownKeys()`

**Enumerable Own Names**

Retrieves the string keys of all enumerable own properties of an object. The order is not defined by ES6, but it must be the same order in which `for-in` traverses properties (the order in which for-in traverses properties is not defined in specs). Used by: `JSON.parse()`, `JSON.stringify()`, `Object.keys()`

**Integer indices**

Roughly, an integer index is a string that, if converted to a 53-bit non-negative integer and back is the same value. Therefore:
* '10' and '2' are integer indices.
* '02' is not an integer index. Converting it to an integer and back results in the different string '2'.

In ES6, instances of `String` and `Typed Arrays` have integer indices. The indices of normal `Arrays` are a subset of integer indices: they have a smaller range of 32 bits.

Arrays have indices and keys. Quoting the spec: *A property key `P` (a string) is an array index if and only if: `ToString(ToUint32(P))` is equal to `P` and `ToUint32(P)` is not equal to `2**32-1`*

In other words, in the world of the spec all values in brackets are converted to strings and interpreted as property keys, even numbers:
```js
var arr = ['a', 'b'];
arr['0'] // 'a'
arr[0] // 'a'
```
So, first key `P` is converted to a number, then converted to a 32-bit unsigned integer and finally converted back to a string. If initial and final string are the same, it can be used as an index of an array. If not, the string becomes an array's property name. The range of 32bit integers is from 0 to 2**32-1.




## Resources

* [Data structures](https://en.wikipedia.org/wiki/Data_structure "wikipedia")  
* [List of data structures](https://en.wikipedia.org/wiki/List_of_data_structures "wikipedia")
* [Time complexity](https://en.wikipedia.org/wiki/Time_complexity "wikipedia")
* [Determining time complexity](http://cooervo.github.io/Algorithms-DataStructures-BigONotation/big-O-notation.html "github")
* [Algorithms, data structures and Big-O notation](http://cooervo.github.io/Algorithms-DataStructures-BigONotation/ "github")
* [Big-O cheat-sheet](http://bigocheatsheet.com/)
* [Algorithms in plain English: time complexity and Big-O notation](https://medium.freecodecamp.com/time-is-complex-but-priceless-f0abd015063c)
* [Speaking JS](http://speakingjs.com/es5/ch18.html#_array_indices_in_detail)
* [Exploring JS](http://exploringjs.com/es6/ch_oop-besides-classes.html#_integer-indices)