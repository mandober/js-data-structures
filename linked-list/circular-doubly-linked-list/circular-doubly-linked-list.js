/**
 * Data structure: CIRCULAR DOUBLY LINKED LIST (DLL)
 *
 * @version 0.0.12.170430
 * @description Doubly Linked List implemented in JS.
 *
 */
'use strict';

/**
 * DoublyLinkedList
 * @typedef   {Object}  DoublyLinkedList
 * @property  {number}  count  Keeps count of nodes.
 * @property  {Object}  head   Points to the first node of the list.
 * @property  {Object}  tail   Points to the last node of the list.
 */
var CircularDoublyLinkedList = function () {
    this.count = 0;
    this.head = null;
    this.tail = null;
};

/**
 * Node
 * @typedef   {Object}   Node.
 * @property  {*}  data  Node's payload.
 * @property  {Object}   next  Points to the following node of the list.
 * @property  {Object}   prev  Points to the previous node of the list.
 */
var Node = function (value) {
    // creates an object removed from the prototype chain
    var node = Object.create(null);
    node.data = value;
    node.next = null;
    node.prev = null;
    return node;
}

/**
 * append - Inserts new node at the end of the dll.
 * @param    {*}  value    Node's payload.
 * @returns  {DoublyLinkedList}  Doubly-linked list.
 */
CircularDoublyLinkedList.prototype.append = function (value) {
    // if list is empty, newly created node is the first node
    if (this.head === null) {
        this.head = Node(value);
    // otherwise, find last node
    } else {
        let lastNode = function findLastNode(obj) {
            return (obj.next === null) ? obj : findLastNode(obj.next);
        }(this.head);
        lastNode.next = Node(value);
        lastNode.next.prev = lastNode;
    }
    this.count++;
    return this;
};





// usage
let cdll = new CircularDoublyLinkedList();
