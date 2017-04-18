# Stack

[Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type) "wikipedia:stack") holds a collection of elements, with two principal operations: `push`, which adds an element to the collection, and `pop`, which removes the most recently added element. The way in which elements are added and removed gives the structure its alternative name, `LIFO` (Last In, First Out).


## Time Complexity

Standard stack methods (push and pop) have the same time complexity:   
- worst-case time complexity is constant:  `O(1)`   
  (all operations on stack take just 1 step to finish)


## Implementation in JS

This implementation is through `Stack` constructor function. I couldn't decide on the underlying JS type to hold the data, so I've implemented a choice between Object, Array, Map and Set.


**Methods**  
- `push()`    Add value to stack.
- `pop()`     Remove (last) value off stack and return it.
- `peek()`    Return (last) value off stack.
- `swap()`    Swap last 2 values.
- `size()`    Return number of elements in stack.
- `empty()`   Empties the stack.
- `isEmpty()` Checks if stack is empty.