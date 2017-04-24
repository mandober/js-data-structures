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


## Defining properties
Considered as a linear data structure, or more abstractly, a sequential collection, the `push` and `pop` operations occur only at one end of the structure, referred to as the `top` of the stack. This makes it possible to implement a stack as a singly linked list and a pointer to the top element. 

A stack may be implemented to have a bounded capacity. A stack can be easily implemented either through an `array` or a `linked list`. What identifies the data structure as a stack in either case is not the implementation, but the interface: the user is only allowed to pop or push items onto the array or linked list, with few other helper operations.

Some environments may provide additional operations, for example:
- `Duplicate`: the top item is popped, and then pushed again (twice), so that an additional copy of the former top item is now on top, with the original below it.
- `Peek`: the topmost item is inspected (or returned), but the stack pointer is not changed, and the stack size does not change (meaning that the item remains on the stack). This is also called top operation in many articles.
- `Swap` or `exchange`: the two topmost items on the stack exchange places.
- `Rotate` (or `Roll`): the n topmost items are moved on the stack in a rotating fashion. For example, if n=3, items 1, 2, and 3 on the stack are moved to positions 2, 3, and 1 on the stack, respectively. Many variants of this operation are possible, with the most common being called left rotate and right rotate.

