import { setTimeout } from "node:timers/promises";
import { Readable } from "node:stream";
async function* generateNumbers() {

    while (true) {
        yield Math.floor(Math.random() * 100);
        await setTimeout(10);
    }
}
// const generateNumbers = {
//     [Symbol.asyncIterator]: async function* () {
//         while (true) {
//             yield Math.floor(Math.random() * 100);
//             await setTimeout(200);
//         }
//     }
// }
// Readable.from(generateNumbers)

// async iterators helpers in Node.js come from Readable Streams
// in the future, they'd be supported by the javascript standard
// so you'd use like await generateNumbers().filter().map().forEach()

Readable.from(generateNumbers())
    .filter(number => number % 2 === 0)
    .take(10)
    .map(number => number * 2)
    .forEach((number) => console.log(`number: ${number}`));

// ou puramente async iterators (sem helpers)
// for await (const number of generateNumbers()) {
//     console.log(`number: ${number}`);
// }
