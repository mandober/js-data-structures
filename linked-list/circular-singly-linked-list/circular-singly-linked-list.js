/**
 * Data structure: CIRCULAR SINGLY LINKED LIST (CSLL)
 *
 * @version 0.0.1.170501
 * @description Circular Singly Linked List implementation.
 *
 * CSLL is a collection of nodes where each node carries its payload (data)
 * and holds a reference to the following node through its `next` property.
 * Unlike the linear singly-linked list where the last node points to null,
 * in circular singly-linked list, the last node points to the first node.
 *
 * Initial node in the list is a sentinel node - it doesn't hold any data, but acts
 * as a handler for the whole list. It keeps track of other nodes, particularly of
 * the first or "head" node, to which it points with its `head` property. The last
 * node in the list points to the first node, making the list circular.
 *
 * Features:
 *   - linkedList.head = firstNode
 *   - lastNode.next = linkedList.head
 *
 * Methods:
 *   - append, prepend, insert, traverse, has, delete
 *
 * List's properties:
 *   - head: points to the first node
 *   - count: tracks count of nodes
 *
 * Node's properties:
 *   - data: node's payload
 *   - next: references the following node, the last node points to the first
 */
'use strict';

/**
 * CircularSinglyLinkedList
 * @typedef   {Object}  CircularSinglyLinkedList
 * @property  {number}  count  Keeps count of nodes.
 * @property  {Object}  head   Points to the first node of the list.
 */
let CircularSinglyLinkedList = function () {
    this.count = 0;
    this.head = null;
    // if supplied, append args to list
    if (arguments) {
        let arg = Array.from(arguments),
            argc = arg.length,
            i = 0;
        for (; i < argc; ++i) {
            this.append(arg[i]);
        }
    }
};

/**
 * Node
 * @typedef   {Object}   Node.
 * @property  {*}  data  Node's payload.
 * @property  {Object}   next  Points to the next node of the list.
 */
let Node = function (value) {
    // creates an object removed from the prototype chain
    let node = Object.create(null);
    node.data = value;
    node.next = null;
    return node;
}

/**
 * append - Inserts new node at the end of the linked list.
 * @param    {*}  value    Node's payload.
 * @returns  {LinkedList}  Linked list.
 */
CircularSinglyLinkedList.prototype.append = function (value) {
    // if list is empty, newly created node is the first node
    if (this.head === null) {
        let node = Node(value);
        this.head = node;
        node.next = this.head;
        // else find last node, the one whose .next points to this.head
    } else {
        let newNode = Node(value),
            headNode = this.head,
            lastNode = function findLastNode(obj) {
                return (obj.next === headNode) ? obj : findLastNode(obj.next);
            }(headNode);
        lastNode.next = newNode;
        newNode.next = headNode;
    }
    // increase node count, return the list
    this.count++;
};




// USAGE
var csll = new CircularSinglyLinkedList();
csll.append(66);
csll.append(77);
csll.append(88);
csll.append(99);
