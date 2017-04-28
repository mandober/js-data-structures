// DATA STRUCTURES: SET
'use strict';

/*
Set is a collection of unique elements.
keys = values
*/

var a = [1, 1, 2, 3, 5];
// remove duplicated values from an array:
a = [...new Set(a)]; // [1, 2, 3, 5]
