'use strict';
/*
LINKED LIST

Node
- data: data being stored in the node
- next: reference to the next node, null for last node

List
- head: points to first node of list; null for empty list
*/
'use strict';

function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null;

    this.append = function (element) {
        var node = new Node(element),
            current;
        if (head === null) { //first node on list
            head = node;
        } else {
            current = head;
            //loop the list until find last item
            while (current.next) {
                current = current.next;
            }
            //get last item and assign next to node to make the link
            current.next = node;
        }
        length++; //update size of list
    };
/*
    this.insert = function (position, element) { };
    this.removeAt = function (position) { };
    this.remove = function (element) { };
    this.indexOf = function (element) { };
    this.isEmpty = function () { };
    this.size = function () { };
    this.toString = function () { };
    this.print = function () { };*/
}



// usage:
let dsa = new LinkedList();
dsa.append(3);
console.log('dsa:', dsa);


/*
Traversal:
node := list.firstNode
 while node not null
     (do something with node.data)
     node := node.next
*/