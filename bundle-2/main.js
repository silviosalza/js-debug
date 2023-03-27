/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
//! Questo codice è un contatore, e stampa tutti i numeri compresi tra 5 e infinito
// Per renderlo quantomento funzionante bisogna levare cambiare la condizione di i>5 in i<5

for (let i = 0; i < 5; i++) {
    console.log(i);
}


//   ESERCIZIO 2
//! Questa funziona somma 5 ad un numero pari.
// Per funzionare bisogna cambiare = in identità ===, inserisco num+5 in una variabile total che poi andrò a ritornare. Invoco la funzione esternamente per testarla
  function addIfEven(num) {
    
      if (num % 2 === 0) {
          total = num + 5;
      }
      console.log(total);
      return total;
  }
  addIfEven(2)


// ESERCIZIO 3
//! Funzione che stampa un contatore da 0 a 4
// Per farla funzionare correggo typo error della condizione ciclo for (;), e la invoco
 function loopToFive() {
     for (let i = 0; i <= 5; i++) {
         console.log(i);
     }
 }
 loopToFive()


//  ESERCIZIO 4 (suggerimento: ci sono 8 errori)
//! Funzione che inserisce in array tutti i numeri pari di un altro array
//Ho corretto vari errori typo, ho tirato fuori dal ciclo for il return, ho pushato i numbers[i] e non gli indici
 function displayEvenNumbers() {
     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
     let evenNumbers = [];
     for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] % 2 === 0){
             evenNumbers.push(numbers[i]);
         }
     }
    console.log(evenNumbers);
    return evenNumbers;
 }
 displayEvenNumbers(); // [2,4,6,8]
 