// ------------- 1st example


// function * test () {
//     console.log('created');
//     const a = yield 'Please Enter first Number'
//     console.log('value of a', a);
//     const b = yield 'Please Enter second Number'
//     console.log('value of b', b);
//     return a+b;
// }

// const x = test();
// console.log(x.next());
// console.log(x.next(10));
// console.log(x.next(100));






//-------------- 2nd example


function * test () {
    let count = 0;
    while (true) {
        yield(++count);
    }
}

const x = test();
console.log(x.next());
console.log(x.next());
console.log(x.next());

// inside while loop true is entered, but its not happening infinite times because whenever generator function reads a yield it will stop the program Important point is When code reads the yield it will stop and when its find the next() it will continue where it was last left
