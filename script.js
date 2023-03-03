let correctAnswer = "red";

document.getElementById("button").addEventListener("click", checkGuess);


function checkGuess() {
  let guess = document.getElementById("the_guess").value;
  guess = guess.toLowerCase().trim();
  console.log(guess);
  document.getElementById("the_guess").value = "";
  if (guess == correctAnswer) {
    alert("Correct! Great Job!")
  } else {
    alert("Wrong-o!")
  }
}
