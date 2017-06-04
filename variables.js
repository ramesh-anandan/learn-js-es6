//var - Original functional scope
//let - Original block scope
//const - Can't be reassigned

function display() {
    if(true){
        var var1 = 'hi';
        let var2 = 'hello';
    }

    var var3 = {
        hello: 'hello',
        bye: {
            goodbye: 'good bye'
        }
    }

    console.log(var1);

    var3.bye.goodbye = 'bye bye';

    console.log(var3);
}

display();