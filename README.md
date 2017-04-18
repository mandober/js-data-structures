# Data structures

- Linked List
- Stack
- Queue
- Binary Search Tree


# Linked List

[Singly linked list](https://www.wikiwand.com/en/Linked_list) is a linear collection of data elements, called nodes, where each node is composed of data (payload) and a reference (a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. 

The first node is refered as the `head` and it gives access to the whole list (it acts as the handler for the list); the `tail` referes to either the rest of nodes, or only to the final node. Usually, the final node points to `null`.

Linked list is found in JavaScript: prototype chain is a form of linked list, where an object (node) has properties (data) and the `__proto__` (next) link that points to the next object. The final node (Object.prototype) links to null.

Nomenclature of linked lists: Singly linked list, Doubly linked list, Multiply linked list, Circular Linked list.


**Time complexity**
- Indexing: O(n)
- Insert/delete at beginning: O(1)
- Insert/delete at end:   
  O(1) when last element is known    
  O(n) when last element is unknown    
- Insert/delete in middle: search time + O(1)

* Wasted space: O(n) (average)



# Stack
- LIFO (last in first out)
- time complexity: worst-case time complexity is constant: O(1)
- methods time complexity:
  - push: Constant — O(1)
  - pop: Constant — O(1)
  - peek: Constant — O(1)
  - empty: Constant — O(1)
  - size: Constant — O(1)
  - swap: Constant — O(1)



# Queue

- FIFO (first in, first out)
- methods:
  - enqueue() : Adds a node (value)
  - dequeue() : Removes and returns the next node in the queue
  - peek() : Returns the node at the front of the queue (without removing)
  - isEmpty() : Returns True if the queue is empty, otherwise returns false
  - For each method on the queue, the worst-case time complexity is constant — O(1)



# Binary Search Tree

A binary search tree (BST) is a node-based tree data structure in which each node 
can have at most two children:
- For each node, every value found in the left sub-tree of node is less than the 
  value found in node.
- For each node, every value found in the right sub-tree of node is greater than the
  value found in node.
i.e. A BST is a tree where each left child has a value that's less than the parent's
value, and a right child that has a value that's greater than the parent’s value.

## Methods:
- `insert(value)`: Accepts a value and places in the tree in the correct position.
- `contains(value)`: Accepts a value and returns a boolean reflecting whether or not 
  the value is contained in the tree.
- `depthFirstLog(callback)`: Accepts a callback and executes it on every value 
  contained in the tree.
- `delete(value)`: Accepts a value and deletes that specific value within the BST

### Insert
The insert method performs binary search on the root node, moving to the left child
if n is less than the current node or right if n is greater than the current node. 
This continues until the left or right child does not exist, which is where the new 
node will then be inserted.

### Contains
The search operation performs binary search much like the insert operation to 
determine whether n exists.

### Depth First Log
The depthFirstLog method accepts a callback and applies the callback to each value 
in the BST. This means we need recursion to traverse down each BST to apply the 
callback function to each node.

### Delete
The search operation performs binary search much like the insert operation to 
determine whether n exist. If it does:
* if value is a leaf, just delete it.
* if value is a node with 1 child, promote that child to its place.
* if value is a node with 2 children: search node's right subtree for the smallest
  value (leaf with the smallest value, keep going left) that is bigger than node's
  value; promote that leaf to node's place.


## Time complexity
Methods on a BST always start at the root node and work their way down, due to this,
the maximum time each operation takes is based on how high the tree is. For example 
a tree with n nodes where there are no right children will take O(n) time, a complete
BST however (every level except the last is completely filled, with nodes on the last
as left as possible) has the worst case time of O(logn).

- delete:        Linear — O(n), or O(log n) in average case
- insert:        Linear — O(n), or O(log n) in average case
- contains:      Linear — O(n), or O(log n) in average case
- depthFirstLog: Linear — O(n), or O(log n) in average case







