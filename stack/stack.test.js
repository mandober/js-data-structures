var test = require('tape');
var Stack = require('./stack.js').Stack;

test('stack test', function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
});




/*
var expect = require('chai').expect;

var Stack = require('./stack.js').Stack;
// console.log('sobj: ', new Stack(0));


describe('stack with object', function () {

    it('isEmpty gives the right value', function () {
        var ll = new Stack(0);
        expect(ll.isEmpty()).to.be.true;
        ll.push(1);
        expect(ll.isEmpty()).to.be.false;
        ll.push(1);
        expect(ll.isEmpty()).to.be.false;
    });
});
*/
