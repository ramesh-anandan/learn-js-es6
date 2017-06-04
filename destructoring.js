//Array destructoring
var arr = ['hello', 'bye', 'good bye'];

var [one, two, three] = arr;

console.log(one);
console.log(two);
console.log(three);

//Class destructoring
var clz = {
    hello: 'hello',
    hi: 'hi',
    bye: 'bye'
}

var {hello, hi, bye} = clz;

console.log(hello);
console.log(hi);
console.log(bye);