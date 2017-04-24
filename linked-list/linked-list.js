/**
 * Data structures: LINKED LIST
 * @version 0.0.170425
 * @description Linked list implementation in JS.
 * Methods: append(), prepend(), insert(), delete()
 * Structure: Singly-linked List
 * List's properties:
 * - head: points to first node of list; points to null if list is empty
 * - count: keeps count of nodes
 * Node's properties:
 * - data: node's payload
 * - next: reference to the next node, last node points to null
 */
'use strict';

let newNode = function (value) {
    let node = Object.create(null);
    node.data = value;
    node.next = null;
    return node;
}

let LinkedList = function () {
    this.count = 0;
    this.head = null;
};

/**
 * append()
 * 1) if list is empty (only head exists), insert newly created node as the first node
 * 2) otherwise insert newly created node in the list:
 *   - find the last node in the list (whose `.next` points to null)
 *   - point last node's `.next` to the newly created node
 */
LinkedList.prototype.append = function (value) {
    function findLastNode(obj) {
        return (obj.next === null) ? obj : findLastNode(obj.next);
    }

    // if list is empty, newly created node is the first node (point list's `.head` at it)
    if (this.count === 0) {
        this.head = newNode(value);
        this.count++;
        return true;
        // otherwise, search for the last node (starting with first one)
        // and then point its `.next` property to the newly created node
    } else {
        let lastNode = findLastNode(this.head);
        lastNode.next = newNode(value);
        this.count++;
        return true;
    }
};

/**
 * prepend()
 * 1) if list is empty (only head exists), insert newly created node as the first node
 * 2) otherwise put newly created node as the first node:
 *   - point list's `.head` to the newly created node
 */

LinkedList.prototype.prepend = function (value) {
    function findLastNode(obj) {
        return (obj.next === null) ? obj : findLastNode(obj.next);
    }

    // if list is empty, newly created node is the first node (point list's `.head` at it)
    if (this.count === 0) {
        this.head = newNode(value);
        this.count++;
        return true;
        // otherwise
    } else {
        let firstNode = this.head;
        this.head = newNode(value);
        this.head.next = firstNode;
        this.count++;
        return true;
    }
};


// node export
if (typeof module !== "undefined") {
    module.exports = LinkedList;
};



// USAGE
var ll = new LinkedList();
ll.append(55);
ll.prepend(44);
ll.append(66);
ll.prepend(33);
ll.append(77);
ll.prepend(22);
ll.append(88);
ll.append(99);
ll.prepend(11);

console.log('ll:', ll);
