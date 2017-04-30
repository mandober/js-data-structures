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

class Node {
    constructor(value) {
        // remove node from the prototype chain
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
        var arr = this.traverse(),
            index = 0;
        return {
            next() {
                if (index < arr.length) {
                    return {
                        value: arr[index++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }

    _findLastNode(node) {
        return (node.next === null) ? node : this._findLastNode(node.next);
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
            let lastNode = this._findLastNode(this.head);
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
            // let lastNode = this._findLastNode(this.head);
            // lastNode.next = new NodeDLL(value);
            // lastNode.next.prev = lastNode;
            let newNode = new NodeDLL(value);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.count++;
        return this;
    }
}



// USAGE
let a = new SinglyLinkedList();
a.append(11);
a.append(21);
a.append(31);

// for (let x of a) {
//     console.log(x);
// }

let b = new DoublyLinkedList();
b.append(29);
b.append(39);
b.append(49);
