function sayHello(name) {
    return `Hello, ${name}!`;
}

let output = sayHello("Ska")
console.log(output)

// unsafe (IMPURE)
// because it changes a value outside of it's own scope
let count = 0;
function increment() {
    count++; // count = count + 1;
}

increment();
increment();
console.log(count);


// safer approach for similar use case would look like

function safe_increment(count) {
    return count + 1;
}

let safe_count = 0;
safe_count = safe_increment(safe_count);
safe_count = safe_increment(safe_count);

console.log(safe_count);

// this way we can easily predict the output
// or if you want to get more nuanced and safer

function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        get() {
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.get());