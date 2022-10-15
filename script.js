var user = document.getElementById("username")

user.addEventListener("click", () => {

  const generatedNumber = Math.floor(Math.random() * 2) + 1;

  let theUser = prompt("Please enter your username");
  if (theUser != null) {

    let guessNumber = parseInt(prompt("Predict generated number"))
    while (guessNumber !== generatedNumber) {
      guessNumber = parseInt(prompt("Predict generated number again"))
    }
    if (guessNumber == generatedNumber) {
      alert("Congratulations! you have been awarded a point")

    }

  }

  const generatedNumber2 = Math.floor(Math.random() * 3) + 1;
  let guessNumber2 = parseInt(prompt("Welcome to stage 2, predict the generated number"))
  while (guessNumber2 !== generatedNumber2) {
    guessNumber2 = parseInt(prompt("Predict generated number again"))
  }
  if (guessNumber2 == generatedNumber2) {
      alert("Congratulations! you have been awarded another point, totalling 2 point")

    }
})