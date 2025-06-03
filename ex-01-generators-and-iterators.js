function * getHumans() {
    yield "Erick Wendel";
    yield "Fabio Akita";
    yield "Ana Neri";
    yield "Xuxa da Silva";
}

const humans = getHumans()
    .take(2)
    .map(human => human.toUpperCase())
    .filter(human => human.length > 10)
    .forEach(human => console.log(human));

// console.log(humans.next());

// while (true) {
//     const human = humans.next();
//     if (human.done) break;
//     console.log(human.value);
// }
// Symbol.iterator
// for (const human of humans) {
//     console.log(human);
// }