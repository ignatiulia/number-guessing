const button = document.getElementById('submit');

let answer = document.getElementById('answer');
let message2 = document.getElementById('tries');

let i = 0;

let number = Math.floor(Math.random() * 100) + 1;
let tries = 0;

function play() {
  let userNumber = document.getElementById('number').value;

  if (userNumber < 0 || userNumber > 100) {
    answer.innerText = 'Please enter a number between 0 and 100.';
  } else if (userNumber === '') {
    answer.innerText = "Oops, you didn't enter a number.";
  } else {
    if (userNumber == number) {
      answer.innerText = "I knew you'd guess eventually!";
      i++;
      resetNumber();
    } else if (userNumber < number) {
      answer.innerText = 'Think bigger!';
      tries += 1;
    } else if (userNumber > number) {
      answer.innerText = 'Think smaller!';
      tries++;
    }

    message2.innerText = `Your tries: ${tries}`;
  }
}

function resetNumber() {
  number = Math.floor(Math.random() * 100) + 1;
}

button.addEventListener('click', play);
