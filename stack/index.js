'use strict';

// STACK: usage

// node import/export
if (typeof require !== "undefined") {
    var Stack = require('./stack.js');
}


// new Stack with Object for storage: new Stack(0)
var sobj = new Stack(0);
console.log('sobj.push(1): ', sobj.push(1));
console.log('sobj.push(2): ', sobj.push(2));
console.log('sobj.push(3): ', sobj.push(3));
console.log('new Stack with Object for storage: ', sobj);



// new Stack with Array for storage: new Stack(1)
var sarr = new Stack(1);
console.log('sarr.push(11): ', sarr.push(11));
console.log('sarr.push(11): ', sarr.push(21));
console.log('sarr.push(11): ', sarr.push(31));
console.log('new Stack with Array for storage: ', sarr);


// new Stack with Map for storage: new Stack(2)
var smap = new Stack(2);
console.log('smap.push("abc"): ', smap.push("a"));
console.log('smap.push("abc"): ', smap.push("b"));
console.log('smap.push("abc"): ', smap.push("c"));
console.log('new Stack with Map for storage: ', smap);


// new Stack with Set for storage: new Stack(3)
var sset = new Stack(3);
console.log('sset.push("queue"): ', sset.push("queue"));
console.log('sset.push("bst"): ', sset.push("bst"));
console.log('sset.push("dll"): ', sset.push("dll"));
console.log('sset.push("graph"): ', sset.push("graph"));
console.log('new Stack with Set for storage: ', sset);
