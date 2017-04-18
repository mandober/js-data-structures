'use strict';
/*
LINKED LIST

Node
- data: data being stored in the node
- next: reference to the next node, null for last node

List
- head: points to first node of list; null for empty list
*/

let Node = function () {
    this.data = undefined;
    this.next = null;
};

let LinkedList = function () {
    //this.head = this;
    this.data = undefined;
    this.next = null;
};

LinkedList.prototype.insert = function (data) {
    function traverse (node) {
        if (node.next === null) {
            node.data = data;
            node.next = new Node();
        } else {
            traverse(node.next);
        }
    }
    traverse(this);
};



// usage:
let ll = new LinkedList();
ll.insert(2);


/*
Traversal:
node := list.firstNode
 while node not null
     (do something with node.data)
     node := node.next
*/