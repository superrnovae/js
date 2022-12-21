const scanf = require('scanf');

// Exo 1

console.log('Saisir première chaîne');
const first = scanf("%s");

console.log('Saisir deuxième chaîne');
const second = scanf("%s");

if(first === null || second === null) {
    console.log("Au moins une chaine est vide");
}
else if(first.length / second.length >= 2) {
    console.log("La première chaine est deux fois plus grande que la deuxième");
}
else {
    console.log("La première chaine n'est pas deux fois plus grande que la deuxième");
}

console.log("");

// Exo 2

let entier;

do {
    console.log('Saisir un entier');
    entier = scanf("%d");
}
while (entier === null);

const sum = (entier * (entier+1)) / 2;

console.log(`La somme de nombre entre 1 et ${entier} === ${sum}`);

console.log("");

// Exo 3

const arr = [];

while(arr.length < 5) {
    console.log(`Saisir un entier numero ${arr.length+1}`);
    arr.push(scanf("%d"));
}

console.log(`L'index de plus grand element = ${indexOfMax(arr)}`);

const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(`La moyenne des entiers = ${average}`);

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}



