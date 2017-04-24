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
 * Append node:
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



// node export
if (typeof module !== "undefined") {
    module.exports = LinkedList;
};



// USAGE
var ll = new LinkedList();
ll.append(11);
ll.append(22);
ll.append(33);
ll.append(44);
ll.append(55);
ll.append(66);
ll.append(77);
ll.append(88);
ll.append(99);

console.log('ll:', ll);
