//ripetere le istruzioni indicate, fino a quando l'indice che parte da 0,
//viene incrementato a 100 di un numero alla volta utilizzando un ciclo for
for (let i = 1; i <= 100; i++) {

    //se il resto dell'indice è divisibile sia per 5 che per 3
    if ((i % 3 === 0) && (i % 5 === 0)) {

        //stampiamo Fizzbuzz
        console.log('FizzBuzz');

    //altrimenti se il resto dell'indice è un numero divisibile per 3
    } else if (i % 3 === 0) {

        //stampiamo Fizz
        console.log('Fizz');

    //altrimenti se il resto dell'indice è un numero divisibile per 5
    } else if (i % 5 === 0) {

        //stampiamo Buzz
        console.log('Buzz');

    //altrimenti
    } else {

        ////stampiamo il valore dell'indice
        console.log(i);
    }
}