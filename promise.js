//example 1
let promise = new Promise((resole, reject) => {
    let isRequestCompleted = true;

    if (isRequestCompleted === true) {
        resole('success');
    } else {
        reject('failed');
    }
});

promise.then(response => console.log(response)).catch(err => console.log(err));


//example 2
let action1 = function () {
    return new Promise((resolve, reject) => {
        resolve('action1 completed');
    });
};

let action2 = function (msg) {
    return new Promise((resolve, reject) => {
        resolve(`${msg} action2 completed`);
    });
};

let action3 = function (msg) {
    return new Promise((resolve, reject) => {
        resolve(`${msg} task completed`);
    });
};

//run all three tasks in sequence
action1().then(res => {
    return action2(res);
}).then(res => {
    return action3(res);
}).then(res => {
    console.log(res);
});

//run all the sequence parallely and final callback after all task completed
Promise.all([action1(), action2(), action3()]).then(response => console.log(response));

//run all the sequence parallely and final callback after any one of the task completed
Promise.race([action1(), action2(), action3()]).then(response => console.log(response));