/**
 * Data structures: LINKED LIST
 * @version 0.0.170425
 * @description Linked list implementation in JS.
 * Methods: append(), prepend(), insert(), traverse(), has(), delete()
 * Structure: Singly-linked List
 * List's properties:
 * - head: points to first node of list; points to null if list is empty
 * - count: keeps count of nodes
 * Node's properties:
 * - data: node's payload
 * - next: reference to the next node, last node points to null
 */
'use strict';

/**
 * LinkedList
 * @typedef   {Object}  LinkedList
 * @property  {number}  count  Keeps count of nodes.
 * @property  {Object}  head   Points to the first node of the list.
 */
let SinglyLinkedList = function () {
    this.count = 0;
    this.head = null;
};

/**
 * Node
 * @typedef   {Object}  Node
 * @property  {*}       data  Node's payload.
 * @property  {Object}  next  Points to the next node of the list.
 */
let Node = function (value) {
    let node = Object.create(null);
    node.data = value;
    node.next = null;
    return node;
}

/**
 * append()
 * 1) if list is empty (only head exists), insert newly created node as the first node
 * 2) otherwise insert newly created node in the list:
 *   - find the last node in the list (whose `.next` points to null)
 *   - point last node's `.next` to the newly created node
 * @param    {*}  value    Node's payload
 * @returns  {LinkedList}  Linked list
 *
 */
SinglyLinkedList.prototype.append = function (value) {
    function findLastNode(obj) {
        return (obj.next === null) ? obj : findLastNode(obj.next);
    }
    if (this.count === 0) {
        // if list is empty, newly created node is the first node (point list's `.head` at it)
        this.head = Node(value);
    } else {
        // otherwise, find last node, point its `.next` property to the newly created node
        let lastNode = findLastNode(this.head);
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

/**
 * traverse()  Traverses the singly linked list.
 * @returns  {array<*>}  An array of node's payloads.
 */
SinglyLinkedList.prototype.traverse = function () {
    var current = this.head,
        arr = [];
    while (current !== null) {
        arr.push(current.data);
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
let sll = new SinglyLinkedList();
sll.append(55);
sll.prepend(44);
sll.prepend(33);
sll.has(33);
sll.append(77);
sll.prepend(22);
sll.append(99);
sll.prepend(11);
sll.insert(55, 66);
sll.insert(77, 88);

let sll2 = new SinglyLinkedList();
console.log('sll2.append(55): ', sll2.append(55));
console.log('sll2.prepend(44): ', sll2.prepend(44));
console.log('sll2.prepend(33): ', sll2.prepend(33));
console.log('sll2.has(33): ', sll2.has(33));
console.log('sll2.append(77): ', sll2.append(77));
console.log('sll2.prepend(22): ', sll2.prepend(22));
console.log('sll2.append(99): ', sll2.append(99));
console.log('sll2.prepend(11): ', sll2.prepend(11));
console.log('sll2.insert(55, 66): ', sll2.insert(55, 66));
console.log('sll2.insert(77, 88): ', sll2.insert(77, 88));
console.log('sll2.traverse(): ', sll2.traverse());