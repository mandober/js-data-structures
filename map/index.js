// DATA STRUCTURES: MAP
'use strict';

/*
Map is a key/value data structure.
Keys can be arbitrary values.
*/

var map = new Map();
var KEY = {};
map.set(KEY, 123);
map.set("a", 456);
map.get(KEY); // 123
map.has(KEY); // true
map.delete(KEY); // true

// an iterable with key/value pairs can be used to set up the map:
var map = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'], // trailing comma is ignored
]);
