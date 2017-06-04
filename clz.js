class foo {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    get total() {
        return this.first + this.second;
    }
}

var p = new foo(6 , 5);
console.log(p.total);


class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes noise.`)
    }
}

class Lion extends Cat {
    speak() {
        console.log(`${this.name} makes roars.`)
    }
}

var cat = new Cat('puppy');
var lion = new Lion('king');

cat.speak();
lion.speak();