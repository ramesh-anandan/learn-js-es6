var handler = {
    get: function(target, name) {
        if(name in target) {
            return target[name];
        } else {
            return 'Error!!!!!';
        }
    }
};

var p = new Proxy({}, handler);
p.foo = 'foo';
p.bar = 'bar';
console.log(p.foo, p.bar);
console.log(p.baz);