'use strict';
/*
DATA STRUCTURES: hash (hashmap, dictionary, associative array)

Hash is a collection of key/value pairs.

A hash (table) is a way of organize data (values); since values can be of any type and size, for their optimal organization into manageble data structure it would be good to have some sort of handle for each value, a handle that is derived from the value itself and is small enough to be used as key that will represent that value. It turns out it is impossible to derive such an perfect handle (perfect hash). In fact, "hash"" refers to a transformation function that is used on the value to convert that value into the corresponding key.

For example, an imperfect, but cheap (in terms of processing power), transformation functioncan could be a simple function that takes each character of a value and turns it into a ASCII hex number. Then it would sum up all those hex numbers and come up with, probably still too big, a number to be suitable for a key. In order to further decrease its size, such number can be processes by applying modulo to it, where modulo must be big enough number to avoid having duplicated keys for different values.

An approach where keys are just integers starting from zero and increamenting when a new value is added is not a hash, but a look-up table. In hash table, it must be possible to derive a key from the value i.e. by transforming the value corresponding key must be produced.

There are many hashing algorithmas, most common are md5, sha1, crc
*/

var hexHash = function (key) {
    let hash = i = 0,
        keycode, len;
    for (len = key.length; i < len; i++) {
        keycode = key.codePointAt(i);
        console.log(key[i], keycode);
        hash += keycode;
    }
    console.log('hash:', hash);
    hash = hash.toString(16);
    return hash;
};

console.log('hexHash:', hexHash("a%"));
console.log('hexHash:', hexHash("a%%"));



/*

'ABC'.codePointAt(1); // 66
'\uD800\uDC00'.codePointAt(0); // 65536


let unlink = function (o) {
    o = Object.setPrototypeOf(o, null);
    return o;
};


let o1 = {
    a: "abec",
    b: "quebec",
    c: "ribec"
}

let a1 = [111, 222, 333, 444];

o1 = unlink(o1);
console.log(o1);

o1.d = "babec";
console.log(o1);
*/