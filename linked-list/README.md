# Linked List

Linked list is a collection of data elements, called nodes, where each node contains data and a reference to the adjacent nodes in the collection.

## Characteristics

Unlike arrays, nodes need not be contiguous in the memory, they can be anywhere in the heap. Random access to the list is not possible - the list must be searched from the starting node until the end (or until the value is found).

## Methods
Appending new node is achieved by traversing the list, finding the last node and inserting a new one.


## Types of linked lists





## Lists

The first node, referred as "head", provides access to the whole list; the "tail" refers to either the rest of nodes, or, more commonly, only to the final node. The final node in the list is points to `null`.

> Linked list is found in JavaScript: prototype chain is a form of linked list, where an object (node) has properties (data) and the `__proto__` (next) property that points (links) to the next object. The final node in the list, `Object.prototype`, points to null.

**Time complexity**     
- Indexing: `O(n)`
- Insert/delete at beginning: `O(1)`
- Insert/delete at end:   
  - `O(1)` when last element is known    
  - `O(n)` when last element is unknown   
- Insert/delete in middle: `search time + O(1)`
- Wasted space: O(n) (average)


## Implementing singly-linked list in JS

Constructor function `LinkedList` will construct first node; construction of other nodes will be handled by a helper function. This way, not only initial, but and all other nodes will be prototype linked to `LinkedList.prototype`.

```js
function LinkedList () {
    node.data = undefined;
    node.next = null;
    node.count = 0;
    node.head = true;
};

function newNode(value) {
    node.data = value;
    node.next = null;
}
```

Having all nodes to [[Prototype]] link to `LinkedList.prototype` feels unnecessary because tail nodes don't have any business accessing the methods on the prototype object, so it seems reasonable to remove tailing nodes from the prototype chain during their creation.

```js
var LinkedList = function () {
    var node = Object.create(LinkedList.prototype);
    node.data = undefined;
    node.next = null;
    node.count = 0;
    node.head = true;
    return node;
};

LinkedList.prototype.append = function (value) {
    function newNode(value) {
        var node = Object.create(null);
        node.data = value;
        node.next = null;
        return node;
    }

    function findNode(obj) {
        if (obj.head && obj.count === 1) {
            obj.data = value;
        } else if (obj.next === null) {
            obj.next = newNode(value);
        } else {
            findNode(obj.next);
        }
    }
    this.count++;
    findNode(this);
}
```
Also now it doesn't matter whether the `LinkedList` or `newNode` function is called with or without the `new` keyword as the explicitly specified object will be returned.



**Usage**   
With `append` method implemented, the list is ready for initial check.

```js
var ll = LinkedList();
ll.append(6);
ll.append(9);
ll.append(12);
ll.append(15);
ll.append(18);
```

![Linked list initial check][ll3]

Looks ok. Before going further, there is a question of "sentinel" nodes. Linked list ends in terminating sentinel node i.e. `null`, but whether there should also be an initial, "head", sentinel node that points to the first node of the list? Then, an empty liked list would, in fact, consist of head node pointing to `null`; but when node is inserted `head` property would point to the first node, although from then on, node's `next` property would provide access to sequential nodes...(off to decide what is gained by this approach...I'll be back ;)





[ll1]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-1.png?raw=true
[ll2]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-2.png?raw=true
[ll3]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-3.jpg?raw=true


## References:
[Linked list](https://en.wikipedia.org/wiki/Linked_list "wikipedia")

