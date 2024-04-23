//Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = [“velma”, “exploradora”, “jane”, “john”, “harry”]

const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}


/* Cree un bucle while que recorra la misma lista y también imprima los nombres. 
Nota: Recuerda crear un contador para que el ciclo no sea infinito. */

let n = 0;

while (n < miLista.length) {
    console.log(miLista[n]);
    n++;
}

//Cree una función de flecha que devuelva "Hola mundo".

const greeting = () => {
    console.log('Hola mundo');
}

greeting();