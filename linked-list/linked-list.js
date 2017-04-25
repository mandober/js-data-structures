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

/**
 * LinkedList
 * @typedef   {Object}  LinkedList
 * @property  {number}  count  Keeps count of nodes.
 * @property  {Object}  head   Points to the first node of the list.
 */
let LinkedList = function () {
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
LinkedList.prototype.append = function (value) {
    function findLastNode(obj) {
        return (obj.next === null) ? obj : findLastNode(obj.next);
    }
    // if list is empty, newly created node is the first node (point list's `.head` at it)
    if (this.count === 0) {
        this.head = Node(value);
        this.count++;
        return true;
        // otherwise, search for the last node (starting with first one)
        // and then point its `.next` property to the newly created node
    } else {
        let lastNode = findLastNode(this.head);
        lastNode.next = Node(value);
        this.count++;
        return true;
    }
};


/**
 * prepend()
 * 1) if list is empty (only head exists), insert newly created node as the first node
 * 2) otherwise point list's `.head` to the newly created node and point new node's .next to ex first node
 * @param    {*}  value    Node's payload
 * @returns  {LinkedList}  Linked list
 */
LinkedList.prototype.prepend = function (value) {
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
LinkedList.prototype.insert = function (payload, value) {
    function findNode(obj) {
        while (obj !== null) {
            if (obj.data === payload) return obj;
            obj = obj.next;
        }
        return null;
    }

    // if list is empty, return false
    if (this.count === 0) return false;

    // search for the node containg the value
    let posNode = findNode(this.head);
    if (posNode === null) return new Error("[SLL:insert] No node contains such value");

    let nextNode = posNode.next;
    let newNode = Node(value);
    posNode.next = newNode;
    newNode.next = nextNode;

    this.count++;
    return this;
};


/**
 * traverse()  Traverses the singly linked list.
 * @returns  {array<*>}  An array of node's payloads.
 */
LinkedList.prototype.traverse = function () {
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
LinkedList.prototype.has = function (value) {
    var current = this.head;
    while (current !== null) {
        if (current.data === value) return true;
        current = current.next;
    }
    return false;
};



// node export
if (typeof module !== "undefined") {
    module.exports = LinkedList;
};


// USAGE
var ll = new LinkedList();
ll.append(55);
ll.prepend(44);
// ll.append(66);
ll.prepend(33);
ll.append(77);
ll.prepend(22);
// ll.append(88);
ll.append(99);
ll.prepend(11);


// console.log('ll:', ll);