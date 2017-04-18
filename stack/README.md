# Stack

[Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type) "wikipedia") holds a collection of elements, with two principal operations: `push`, which adds an element to the collection, and `pop`, which removes the most recently added element. The way in which elements are added and removed gives the structure its alternative name, `LIFO` (Last In, First Out).


## Time Complexity

All methods (push, pop, peek) have the same time complexity:
* worst-case time complexity is constant:  `O(1)`


## Implementation in JS

This implementation is through `Stack` constructor function. I couldn't decide on the underlying JS type to hold the stack data, so I've implemented a choice between Object, Array, Map and Set. Still trying to find out which is most suitable for the task.