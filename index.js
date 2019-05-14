// Code your solutions in this file
 function writeCards(array, events){
   let card = []
   for (let i = 0; i < array.length; i++){
        card.push(`Thank you, ${array[i]}, for the wonderful ${events} gift!`)
   }
   return card
}

const gifts = ["teddy bear", "drone", "doll"];

function countdown(number) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < number) {
    console.log(number);
    number -= 1;
     // the iteration move INSIDE the body of the loop!
  }
  console.log(number)
}
