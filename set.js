var mySet = new Set();

mySet.add(10);
mySet.add('hiii')
mySet.add({hello: 'hello'});

console.log(mySet.size);

mySet.forEach(value => console.log(value));
