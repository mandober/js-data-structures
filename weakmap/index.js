// DATA STRUCTURES: WeakMap
'use strict';
/*
Weak map is a data structures with key/value pairs.
Keys must be objects and are held weakly: when the only
remaining reference to the object (key) is the one in the
weakmap itself, the object gets garbage collected.
*/

// objects are created and each is referenced by a variable
let map = new Map(),
    omap = { name: "first" },
    weak = new WeakMap(),
    oweak = { name: "second" };

// both objects now get a second reference, the first
// within the map and the second within the weakmap
// (they are used as keys for the arbitrary values)
map.set(omap, 1);
weak.set(oweak, 2);

console.log('map.get(omap): ', map.get(omap));
console.log('weak.get(oweak): ', weak.get(oweak));

// when the variables no longer reference these objects
omap = oweak = null;

// with map, original object still exists,
// it can't be gotten by `map.get(obj)` but
// it is still referenced within the map itself.
map.forEach((key, val) => console.log(key, val));

// with weakmap, object is gone since the only remaining
// reference to the object is the one in the weakmap itself.
