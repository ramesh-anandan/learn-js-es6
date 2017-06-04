var arr = [1, 2, 3, 4, 5];

//old method
arr.forEach(function (value) {
    console.log(value)
});

//new way
arr.forEach((value) => {
    console.log(value)
});

//newer simpler way
arr.forEach(value => console.log(value));


function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000)
}

var p = new Person();