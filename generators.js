function* neverEnding() {
    let index = 0;

    while(index < 5) {
        yield index++;
    }
}

let gen = neverEnding();

var value = gen.next();
while(value.done === false) {
    console.log(value);
    value = gen.next();
}
