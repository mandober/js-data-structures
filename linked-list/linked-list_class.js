/**
 * Data structure: LINKED LIST (LL)
 *
 * @version 0.0.2.170430
 * @description Linked Lists implemented with classes.
 *
 * Classes:
 * - Node
 *   - NodeDLL
 * - LinkedList
 *   - SinglyLinkedList
 *   - DoublyLinkedList
 *   - SinglyLinkedCircularList
 *   - DoublyLinkedCircularList
 *
 * List types: singly|doubly linked linear|circular list
 *
 * Methods: append, prepend, insert, traverse, has, delete
 *
 * List's properties:
 * - singly | doubly
 * - linear | circular
 *
 * Properties of linked-list instances:
 * - head: points to the first node
 * - tail: points to the last node (only for doubly LL)
 * - count: tracks nodes count
 *
 * Node's properties:
 * - data: node's payload
 * - next: references the following node (the last node points to null)
 * - prev: references the previous node (only for doubly LL's nodes)
 */
'use strict';

class Node {
    constructor(value) {
        // remove node from the prototype chain (less clutter)
        let node = Object.create(null);
        node.data = value;
        node.next = null;
        return node;
    }
}

class NodeDLL extends Node {
    constructor(value) {
        let node = super(value);
        node.prev = null;
        return node;
    }
}

class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
    }

    traverse(callback) {
        var current = this.head,
            arr = [];
        while (current !== null) {
            callback ? arr.push(callback(current.data)) : arr.push(current.data);
            current = current.next;
        }
        return arr;
    }

    has(value) {
        var current = this.head;
        while (current !== null) {
            if (current.data === value) return true;
            current = current.next;
        }
        return false;
    }

    [Symbol.iterator]() {
        let k = this.traverse(),
            i = 0;
        return {
            next: function () {
                return {
                    value: k[i],
                    done: i++ >= k.length
                };
            }
        }
    }

    _findLastNode(node, lastLink) {
        return (node.next === lastLink) ? node : this._findLastNode(node.next, lastLink);
    }

    _findNodeByPayload(node, payload) {
        while (node !== null) {
            if (node.data === payload) return node;
            node = node.next;
        }
        return null;
    }

    _findPreviousNodeByPayload(node, payload) {
        while (node.next !== null) {
            if (node.next.data === payload) return node;
            node = node.next;
        }
        return null;
    }


} // LinkedList class


class SinglyLinkedList extends LinkedList {
    append(value) {
        if (this.head === null) { // if list is empty
            this.head = new Node(value);
        } else {
            let lastNode = this._findLastNode(this.head, null);
            lastNode.next = new Node(value);
        }
        this.count++;
        return this;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = this.tail = new NodeDLL(value);
        } else {
            let newNode = new NodeDLL(value);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.count++;
        return this;
    }
}

class SinglyLinkedCircularList extends SinglyLinkedList {
    append(value) {
        // if list is empty, newly created node is the first node
        if (this.head === null) {
            let newNode = new Node(value);
            this.head = newNode;
            newNode.next = this.head;
            // otherwise, find last node, the one whose
            // `next` points to the first (`this.head`)
        } else {
            let newNode = new Node(value),
                headNode = this.head,
                lastNode = this._findLastNode(headNode, headNode);
            lastNode.next = newNode;
            newNode.next = headNode;
        }
        // increase node count, return the list
        this.count++;
    }

} // SLCL

class DoublyLinkedCircularList extends DoublyLinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    append(value) {
        if (this.head === null) {
            let newNode = new NodeDLL(value);
            this.tail = this.head = newNode;
            newNode.next = this.head;
            //newNode.prev = this.head; // not needed
        } else {
            let newNode = new NodeDLL(value),
                headNode = this.head,
                tailNode = this.tail; // this.head.prev = this.tail

            tailNode.next = headNode.prev = newNode; // tail.next => new, head.prev => new
            newNode.prev = tailNode; // new.prev => ex tail node
            //this.tail = newNode;
            newNode.next = headNode; // new.next => head node
        }
        this.count++;
        return this;
    }

} // DLCL




// USAGE


// SLL
let a = new SinglyLinkedList();
a.append(11);
a.append(21);
a.append(31);
// iterate
var it = a[Symbol.iterator]();
it.next();
it.next();
it.next();
// for...of
for (let key of a) console.log(key);


// DLL
let b = new DoublyLinkedList();
b.append(29);
b.append(39);
b.append(49);
// iterate
var it = a[Symbol.iterator]();
it.next();
it.next();
it.next();
// for...of
for (let key of a) console.log(key);


// SLCL
let c = new SinglyLinkedCircularList();
c.append(5);
c.append(10);
c.append(15);
c.append(20);


// SLDL
let d = new DoublyLinkedCircularList();
d.append(25);
d.append(30);
d.append(35);
// d.append(40);
