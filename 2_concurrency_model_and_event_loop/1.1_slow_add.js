const slowAdd = (a, b) => {
    for (let index = 0; index < 999999999; index++) {
        
    }
    return a + b;
}

const a = slowAdd(3, 3);
const b = slowAdd(4, 4);
const c = slowAdd(5, 5);

console.log(a);
console.log(b);
console.log(c);

const slowAdd2 = (a, b) => {
    setTimeout(() => {
        console.log(a+b)
    }, 5000)
}
// setTimeout is not part of V8 it's provided by Node
// setTimeout is wired in away to work with the event loop asynchronously
slowAdd2(3,3);
slowAdd2(4,4);