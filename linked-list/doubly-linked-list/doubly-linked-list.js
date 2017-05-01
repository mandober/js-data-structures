/**
 * Data structure: DOUBLY LINKED LIST (DLL)
 *
 * @version 0.0.12.170430
 * @description Doubly Linked List implemented in JS.
 *
 * Doubly-linked list is a collection of nodes where each node carries its payload (data)
 * and holds a reference to the following and previous node through its `next` and `prev`
 * properties, respectively.
 *
 * Initial node in the list is a sentinel node - it doesn't hold any data, but acts
 * as a handler for the whole list. It keeps track of other nodes, particularly of
 * the first or "head" node, to which it points with its `head` property. If needed,
 * it can also keep a reference to the last node with its `tail` property. The last
 * node in the linked list points to `null`.
 *
 * Methods: append, prepend, insert, traverse, has, delete
 *
 * List's properties:
 * - head: points to the first node
 * - tail: points to the last node
 * - count: tracks count of nodes
 *
 * Node's properties:
 * - data: node's payload
 * - next: references the following node
 * - prev: references the previous node
 */
'use strict';

/**
 * DoublyLinkedList
 * @typedef   {Object}  DoublyLinkedList
 * @property  {number}  count  Keeps count of nodes.
 * @property  {Object}  head   Points to the first node of the list.
 * @property  {Object}  tail   Points to the last node of the list.
 */
var DoublyLinkedList = function () {
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
DoublyLinkedList.prototype.append = function (value) {
    // if list is empty, newly created node is the first node
    if (this.head === null) {
        this.head = this.tail = Node(value);
    // otherwise, find last node
    } else {
        let newNode = Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.count++;
    return this;
};






/**
 * prepend()
 * 1) if list is empty (only head exists), insert newly created node as the first node
 * 2) otherwise point list's `.head` to the newly created node and point new node's .next to ex first node
 * @param    {*}  value    Node's payload
 * @returns  {LinkedList}  Linked list
 */
DoublyLinkedList.prototype.prepend = function (value) {
    if (this.head === null) {    // if list is empty
        this.head = Node(value);
    } else {
        let firstNode = this.head;
        this.head = Node(value);
        this.head.next = firstNode;
    }
    this.count++;
    return this;
};

/**
 * insert()
 * Insert new node after the node that contains given data (`payload`)
 * @param    {*}  payload  Find existing node by searching its payload for `payload`, then insert new node after it.
 * @param    {*}  value     New node's value.
 * @returns  {LinkedList}   Linked list
 */
DoublyLinkedList.prototype.insert = function (payload, value) {
    function findNode(obj) {
        while (obj !== null) {
            if (obj.data === payload) return obj;
            obj = obj.next;
        }
        return null;
    }

    // 1) list is empty, but insert new node as the first node anyway
    if (this.count === 0) {
        this.head = Node(value);
        this.count++;
        return this;
    }

    // search for the node containg the payload
    let posNode = findNode(this.head);

    // 2) no node containg the payload found, but append new node anyway
    if (posNode === null) {
        this.append(value);
        this.count++;
        return this;
    }

    // 3) node found, insert new node after it
    let newNode = Node(value);
    newNode.next = posNode.next;
    posNode.next = newNode;
    this.count++;
    return this;
};

DoublyLinkedList.prototype.delete = function (payload) {
    function findNodeBefore(obj) {
        while (obj.next !== null) {
            if (obj.next.data === payload) return obj;
            obj = obj.next;
        }
        return null;
    }

    // 1) list is empty, return false
    if (this.count === 0) return false;

    // 2) list has 1 element and it is matched for deletion
    if (this.count === 1) {
        if (this.head.data === payload) {
            this.head = null;
            this.count = 0;
            return true;
        }
        return false;
    }

    // 3) list has more than 1 element and first element is matched for deletion
    if (this.head.data === payload) {
        this.head = this.head.next;
        --this.count;
        return true;
    }

    // 4) list has more than 1 element and some element is matched for deletion, but not the first one
    // posNode is the node before the node matched for deletion
    let posNode = findNodeBefore(this.head);
    // no matching node
    if (posNode === null) return false;
    // if node matched for deletion is the last one
    if (posNode.next.next === null) {
        posNode.next = null;
    } else {
       // if node matched for deletion is not the last one
        posNode.next = posNode.next.next;
    }
    --this.count;
    return true;
};


/**
 * traverse()  Traverses the singly linked list.
 * @param {function}  callback  Function to invoke on every traversal
 * @returns  {array<*>}  An array of node's payloads.
 */
DoublyLinkedList.prototype.traverse = function (callback) {
    var current = this.head,
        arr = [];
    while (current !== null) {
        callback ? arr.push(callback(current.data)) : arr.push(current.data);
        current = current.next;
    }
    return arr;
};

/**
 * has() - Check if linked list contains specific value.
 * @param {*} value  Value to search linked list for.
 * @returns {boolean} Returns true if value found, false otherwise.
 */
DoublyLinkedList.prototype.has = function (value) {
    var current = this.head;
    while (current !== null) {
        if (current.data === value) return true;
        current = current.next;
    }
    return false;
};




// node export
if (typeof module !== "undefined") module.exports = DoublyLinkedList;



// USAGE
var dll = new DoublyLinkedList();
dll.append(55);
dll.append(44);
// sll.prepend(33);
// sll.has(33);
dll.append(77);
// sll.prepend(22);
dll.append(99);
// sll.prepend(11);
// sll.insert(55, 66);
// sll.insert(77, 88);
// sll.traverse();
// sll.traverse(x => x + 2);
