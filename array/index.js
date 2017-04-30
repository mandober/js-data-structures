// DATA STRUCTURES: Array
'use strict';

/*
Array is a collection of elements.
Elements are key/value pairs.
Value can be anything.
Keys in array are integers, up to 2**53

*/

let a = [1, 1, 2, 3, 5];
// remove duplicated values from an array by feeding array to set, and then spread the set
a = [...new Set(a)]; // [1, 2, 3, 5]
