# Data structures: Linked List

[Singly linked list](https://www.wikiwand.com/en/Linked_list) is a linear collection of data elements, called nodes, where each node is composed of data (payload) and a reference (a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. 

The first node is referred as the `head` and it gives access to the whole list (it acts as the handler for the list); the `tail` refers to either the rest of nodes, or only to the final node. Usually, the final node points to `null`.

Linked list is found in JavaScript: prototype chain is a form of linked list, where an object (node) has properties (data) and the `__proto__` (next) link that points to the next object. The final node (Object.prototype) links to null.


**Nomenclature of linked lists**    
- Singly linked list
- Doubly linked list
- Multiply linked list
- Circular Linked list
     
     
**Time complexity**     
- Indexing: O(n)
- Insert/delete at beginning: O(1)
- Insert/delete at end:   
  O(1) when last element is known    
  O(n) when last element is unknown    
- Insert/delete in middle: search time + O(1)

* Wasted space: O(n) (average)


## Implementing Linked-list in JavaScript

First, there will be a constructor function `LinkedList` that will on construct first node; construction of other nodes will be handled by another, helper, function. This way, not only initial, but and all other nodes will be prototype linked to `LinkedList.prototype` where methods for linked-list exist. 

![Linked list diagram 1][ll1]

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

This seems unnecessary because other nodes don't have any business accessing the methods on the prototype object, so it might be better to remove other nodes from the prototype chain upon their construction.

![Linked list diagram 2][ll2]

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
It doesn't matter whether the `newNode` function is called with or without the `new` keyword as it will always returned the explicitly specified object. Same goes for `LinkedList` function.





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

Now before going further, there is a question of sentinel nodes. Linked list ends in terminating sentinel node i.e. last node points to null, but whether there should also be an initial, "head", sentinel node that points to the first node of the list? Then, an empty liked list would, in fact, consist of this head node pointing to null. So, property `head` would be used to access the first node, but from then on `next` property would provide access to other nodes. (off to decide what is gained by this approach...to be continued)





[ll1]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-1.png?raw=true
[ll2]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-2.png?raw=true
[ll3]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-3.jpg?raw=true