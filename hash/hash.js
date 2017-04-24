/* HASH

key/value pairs:
keys:
- keys are unique (so values must be also)
- they are derived from values: by hashing a value
- the hash could be obtained by applying a transformation function to the value. eg.:
  - sum up the ASCII values of each character of the value; then convert to hex
  - get md5 hash of value
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