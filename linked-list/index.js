/*  DESC: LINKED LIST
 *  FILE: /linked-list/index.js
 */
'use strict';

// node import/export
if (typeof require !== "undefined") {
    var LinkedList = require('./linked-list');
}

// USAGE
var ll = new LinkedList();
ll.append(6);
ll.append(9);
ll.append(12);
ll.append(15);
ll.append(18);

console.log('ll:', ll);