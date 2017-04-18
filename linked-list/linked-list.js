'use strict';

var LinkedList = function () {
    'use strict';
    var node = Object.create(LinkedList.prototype);
    node.data = undefined;
    node.next = null;
    node.count = 0;
    node.head = true;
    return node;
};

LinkedList.prototype.append = function (value) {
    'use strict';
    // make new node, removed from the prototype chain
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

    // increment size
    this.count++;

    // start recursion with the passed in instance of Linked List object
    findNode(this);
}




// USAGE
var ll = LinkedList();
ll.append(6);
ll.append(9);
ll.append(12);
ll.append(15);
ll.append(18);
