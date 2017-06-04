/**
 * Function
 */
function foo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

var arr = [0 ,1 , 2];

//foo(arr);

//foo.apply(null, arr);

foo(...arr);//spread method

/**
 * Array
 */
var arr = [1, 2, 3, 4, 5, 6];
var [a, b, ...rest] = arr;

console.log(a);
console.log(b);
console.log(rest);

var arrayOne = ['hi', 'hello'];
var arrayTwo = ['bye', ...arrayOne, 'good bye'];
console.log(arrayTwo);