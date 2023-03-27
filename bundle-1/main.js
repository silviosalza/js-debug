/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }

// checkAge();

//!Questa funziona controlla l'età di un utente e dichiara se esso è maggiorenne o meno.
// Per funzionare va aggiunto un argomento a checkAge che poi andremo a riprendere all'interno della funzione.
// MyAge non va dichiarata all'interno della funzione
// Per rendere il codice più fruibile si implementa un prompt che chiede l'età dell'utente dentro all'invocazione della nostra funzione

 function checkAge(myAge) {

     let message = '';

     if (myAge < 18) {
         message = `Sei troppo giovane! Hai ${myAge} anni!`;
     } else {
         message = 'Hai più di 18 anni!';
     }
     console.log(message);
     return message
    
 }
 checkAge(parseInt(prompt("Quanti anni hai?")));







// ESERCIZIO 2
// function printColorsNumber() {
//      const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//      console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
//  }
// printColorsNumber();

//!Questa funzione conta il numero di colori presenti in un array
// L'array lo dichiariamo esternamente alla funzione, a cui si da un argomento
// Correggiamo il typo error length
// invochiamo la funzione con il nostro array dichiarato esternamente

 const colors = ["blue", "red", "yellow", "green", "black"];
 function printColorsNumber(colorArray) {
     console.log(`Nella mia palette ci sono ${colorArray.length} colori!`);
 }
 printColorsNumber(colors);





// ESERCIZIO 3
//  function addNumbers() {
//      const userNumber = prompt('Inserisci un numero');
//      const total = userNumber + 12;

//      console.log(`Il risultato finale è ${total}`);
//  }
//  addNumbers();

//! Questa funzione aumenta di 12 un numero chiesto all'utente tramite prompt
// implemento un controllo sul prompt trasformandolo in numero intero e dando errore nel caso in cui l'utente scriva delle lettere
// dichiaro total fuori dal ciclo if
// eseguo il console log di total solo se viene rispettata la condizione
 
 function addNumbers() {
      const userNumber = parseInt(prompt('Inserisci un numero'));
      let total = 0
      if (isNaN(userNumber)){
         alert("Hai inserito una stringa, per favore inserisci un numero")
      } else{
         total = userNumber + 12;
         console.log(`Il risultato finale è ${total}`);
      }
  }
  addNumbers();




  
//  ESERCIZIO 4
//  function checkAccess() {
//      const addresses = [
//          'mymail@mail.com',
//          'yourmail@mail.com',
//          'hermail@mail.com',
//          'hismail@mail.com',
//      ];
//      const userEmail = prompt('Inserisci il tuo indirizzo email');

//      let grantAccess = 'false';

//      if (addresses.includes(userEmail)) {
//          grantAccess = 'true';
//      }

//      if (grantAccess === true) {
//          console.log('Accesso consentito!');
//      } else {
//          console.log('Accesso negato!');
//      }
//  }
//  checkAccess();


//! Questa funziona controlla se il prompt di un utente è uguale ad uno degli elementi dell'array indirizzi mail, nel caso fosse presente verrà stampato in console accesso garantito.
// Per il corretto funzionamento della funzione bisogna eliminare la variabile flag, e completare il ciclo if con l'operazione .includes

 function checkAccess() {
     const addresses = ['mymail@mail.com','yourmail@mail.com','hermail@mail.com','hismail@mail.com'
     ];
     const userEmail = prompt('Inserisci il tuo indirizzo email');

     if (addresses.includes(userEmail)) {
         console.log('Accesso consentito!')
      
     } else{
        console.log('Accesso negato!');
     }
 }
 checkAccess();
