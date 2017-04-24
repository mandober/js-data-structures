/**
 * Data structures: LINKED LIST
 * @version 0.0.170419
 * @description Linked list implementation in JS.
 * Methods: append(), prepend(), insert(), delete()
 * Linked List
 * - head: points to first node of list; null for empty list
 * - count: keeps count of nodes
 * Node
 * - data: payload stored in the node
 * - next: reference to the next node, null for last node
 *
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
 * Append node:
 * 1) if list is empty (only head exists), insert newly created node as the first node
 * 2) otherwise insert newly created node in the list:
 *   - find the last node in the list (whose `.next` points to null)
 *   - point last node's `.next` to the newly created node
 */
LinkedList.prototype.insert = function (value) {
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



// node export
if (typeof module !== "undefined") {
    module.exports = LinkedList;
};



// USAGE
var ll = new LinkedList();
ll.insert(11);
ll.insert(22);
ll.insert(33);
ll.insert(44);
ll.insert(55);
ll.insert(66);
ll.insert(77);
ll.insert(88);
ll.insert(99);

console.log('ll:', ll);
