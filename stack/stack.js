/**
 * Data structures: STACK
 * @version 0.0.170418
 * @description Stack implementation in JS. Type of storage for the stack
 * is user selectable: 0 (Object), 1 (Array), 2 (Map), 3 (Set). Default is 0.
 * Pass 0-4 (inclusively) as first parameter to constructor call.
 * Choosing `set` has the usual consequences - every element is unique.
 * Methods: push(), pop(), peek(), swap(), empty(), isEmpty(), size()
 */


/**
 * Construct new stack object.
 *
 * @param {number}   storageType  Type of underlying storage:
 *        0 (Object), 1 (Array), 2 (Map), 3 (Set), Default: 0
 * @returns {Stack}  Returns the stack object.
 */
var Stack = function (storageType) {
    'use strict';

    // object is default storage
    storageType = storageType || 0;

    // cater for the case when constructor is called without the `new` keyword
    if (this === undefined) return new Stack();

    // elements counter
    this.count = 0;

    // type of storage
    switch (storageType) {
        case 0:
            this.storage = {};
            this.storageType = 0;
            break;
        case 1:
            this.storage = [];
            this.storageType = 1;
            break;
        case 2:
            this.storage = new Map();
            this.storageType = 2;
            break;
        case 3:
            this.storage = new Set();
            this.storageType = 3;
            break;
       default:
            this.storage = {};
            this.storageType = 0;
    }

    // new object is implicitly returned
}

/**
 * push() - add value to the stack.
 *
 * @param {*}  value  Value to add to the stack.
 * @returns {Stack}  Returns the stack object.
 */
Stack.prototype.push = function (value) {
    'use strict';

    // check value
    if (!value) return false;

    // object(storageType=0) and array(storageType=1):
    // set new value to current `count` index, then increment index
    if (this.storageType < 2) this.storage[this.count++] = value;

    // map (storageType=2)
    if (this.storageType === 2) this.storage.set(this.count++, value);

    // set (storageType=3):
    if (this.storageType === 3) {
        this.storage.add(value);
        this.count++;
    }

    // return stack object
    return this;
}

/**
 * pop() - remove and return (last) value off the stack.
 *
 * @returns {*}  Return the value.
 */
Stack.prototype.pop = function () {
    'use strict';
    // empty check
    if (this.count === 0) return false;
    let val;

    // object(0) and array(1):
    if (this.storageType < 2) {
        val = this.storage[this.count - 1];
        delete this.storage[--this.count];
        // array(1) only
        if (this.storageType === 1) this.storage.length = this.count;
    }

    // map (get & delete by key):
    if (this.storageType === 2) {
        val = this.storage.get(this.count - 1);
        this.storage.delete(--this.count);
    }

    // set (get with iterator, delete by value):
    if (this.storageType === 3) {
        var set = this.storage;
        var it = set.keys();
        for (var i = 0, len = set.size - 1; i < len; ++i) {
            it.next().value;
        }
        val = it.next().value;
        set.delete(val);
        this.count--;
    }

    return val;
}

/**
 * peek() - return the value off the stack.
 *
 * @returns {*}  Return the value.
 */
Stack.prototype.peek = function () {
    'use strict';
    // empty check
    if (this.count === 0) return false;

    // object(0) and array(0):
    if (this.storageType === 0) {
        return this.storage[this.count - 1];
    }

    // map (get  by key):
    if (this.storageType === 2) {
        return this.storage.get(this.count - 1);
    }

    // set (get with iterator):
    if (this.storageType === 3) {
        var set = this.storage;
        var it = set.keys();
        for (var i = 0, len = set.size - 1; i < len; ++i) {
            it.next().value;
        }
        return it.next().value;
    }
}

/**
 * Swap   the two top most elements of the stack.
 *
 * @returns {Stack}  Returns the stack object. On failure returns `false`.
 */
Stack.prototype.swap = function () {
    'use strict';
    if (this.count < 2) return false;
    // pop last and second to last element
    let last = this.pop();
    let secondToLast = this.pop();
    // push back last, then second to last element
    this.push(last);
    this.push(secondToLast);
    // return the stack
    return this;
}

/**
 * empty() - empties the stack.
 *
 * @returns {Stack}  Returns the stack object.
 */
Stack.prototype.empty = function () {
    // reset count
    this.count = 0;
    // initialize new storage
    switch (this.storageType) {
        case 0:
            this.storage = {};
            break;
        case 1:
            this.storage = [];
            break;
        case 2:
            this.storage = new Map();
            break;
        case 3:
            this.storage = new Set();
            break;
        default:
            this.storage = {};
    }
    // return the stack
    return this;
}

/**
 * size() - return the length of the stack
 *
 * @returns {int}  Returns the stack size.
 */
Stack.prototype.size = function () {
    return this.count;
}

/**
 * isEmpty() - checks if stack is empty
 *
 * @returns {boolean}  Returns `true` if stack is empty, `false` otherwise.
 */
Stack.prototype.isEmpty = function () {
    return this.count === 0;
}


// node export
if (typeof module !== "undefined") {
    module.exports = Stack;
}

