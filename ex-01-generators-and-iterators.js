function * getHumans() {
    yield "Erick Wendel";
    yield "Fabio Akita";
    yield "Ana Neri";
    yield "Xuxa da Silva";
}

const humans = getHumans();
console.log(humans.next());

while (true) {
    const human = humans.next();
    if (human.done) break;
    console.log(human.value);
}

// for (const human of humans) {
//     console.log(human);
// }