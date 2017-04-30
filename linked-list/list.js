/**
 * Data structure: LINKED LIST (LL)
 *
 * @version 0.0.2.170430
 * @description Linked Lists implemented in JS.
 *
 * Methods: append, prepend, insert, traverse, has, delete
 *
 * Types: [circular] singly|doubly linked list
 *
 * List's properties:
 * - links: singly | doubly
 * - circular: true | false
 *
 * Concrete linked list's properties:
 * - head: points to the first node
 * - tail: points to the last node
 * - count: tracks nodes count
 *
 * Node's properties:
 * - data: node's payload
 * - next: references the following node (the last node points to null)
 * - prev: references the previous node
 */
'use strict';

var LinkedList = {
    type: 0, // singly|doubly
    circular: 0 // true|false
};

/**
 * LinkedList
 * @typedef   {Object}  LinkedList
 * @property  {number}  count  Keeps count of nodes.
 * @property  {Object}  head   Points to the first node of the list.
 * @property  {Object}  tail   Points to the last node of the list.
 */
var SinglyLinkedList = function () {
    var list = Object.setPrototypeOf({}, LinkedList);
    list.count = 0;
    list.head = null;
    list.tail = null;
    return list;
};

/**
 * Node
 * @typedef   {Object}   Node.
 * @property  {*}  data  Node's payload.
 * @property  {Object}   next  Points to the next node of the list.
 */
var Node = function (value) {
    // creates an object removed from the prototype chain
    var node = Object.create(null);
    node.data = value;
    node.next = null;
    return node;
}

/**
 * append - Inserts new node at the end of the linked list.
 * @param    {*}  value    Node's payload.
 * @returns  {LinkedList}  Linked list.
 */
LinkedList.append = function (value) {
    // if list is empty, newly created node is the first node
    if (this.head === null) {
        this.head = Node(value);
        // otherwise, find last node, point its `.next` property to the newly created node
    } else {
        //let lastNode = findLastNode(this.head);
        let lastNode = function findLastNode(obj) {
            return (obj.next === null) ? obj : findLastNode(obj.next);
        }(this.head);
        lastNode.next = Node(value);
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
SinglyLinkedList.prototype.prepend = function (value) {
    if (this.count === 0) {
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
SinglyLinkedList.prototype.insert = function (payload, value) {
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

SinglyLinkedList.prototype.delete = function (payload) {
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
SinglyLinkedList.prototype.traverse = function (callback) {
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
SinglyLinkedList.prototype.has = function (value) {
    var current = this.head;
    while (current !== null) {
        if (current.data === value) return true;
        current = current.next;
    }
    return false;
};




// node export
if (typeof module !== "undefined") module.exports = SinglyLinkedList;



// USAGE
var sll = SinglyLinkedList();
sll.append(55);
// sll.prepend(44);
// sll.prepend(33);
// sll.has(33);
// sll.append(77);
// sll.prepend(22);
// sll.append(99);
// sll.prepend(11);
// sll.insert(55, 66);
// sll.insert(77, 88);
// sll.traverse();
// sll.traverse(x => x + 2);



// var sll2 = new SinglyLinkedList();
// console.log('sll2.append(55): ', sll2.append(55));
// console.log('sll2.prepend(44): ', sll2.prepend(44));
// console.log('sll2.prepend(33): ', sll2.prepend(33));
// console.log('sll2.has(33): ', sll2.has(33));
// console.log('sll2.append(77): ', sll2.append(77));
// console.log('sll2.prepend(22): ', sll2.prepend(22));
// console.log('sll2.append(99): ', sll2.append(99));
// console.log('sll2.prepend(11): ', sll2.prepend(11));
// console.log('sll2.insert(55, 66): ', sll2.insert(55, 66));
// console.log('sll2.insert(77, 88): ', sll2.insert(77, 88));
// console.log('sll2.traverse(): ', sll2.traverse());