/* 
    Arrow Function
*/

const power = function(x) {
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n) {
    process.stdout.write(`${n}:${power(n)}\t`);
});

console.log("\n ----- \n");

const pow = x => x * x;

numbers.forEach(function(n) {
    // let result = (function(x) {
    //     return x * x;
    // }) (n);

    // let result = (x => {
    //     return x * x;
    // }) (n);

    let result = (x => x * x)(n);

    process.stdout.write(`${n}:${pow(n)}\t`);  
});

// ex2
