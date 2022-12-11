const readline = require("readline");
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});

const factorize = num => {
    let results = [];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            results.push(i);
        }
    }
    if (results.length === 0) {
        return `${num} is a prime number.`;
    } else if (results.length > 0) {
        return results;
    }
}

rl.question("Enter num:", (answer) => {
    const result = factorize(answer);
    console.log(result)
    rl.close()
});