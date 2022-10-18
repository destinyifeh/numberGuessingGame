function generateNumber(max, min) {
  let generateNumber = Math.floor(Math.random() * max) + min;
  return generateNumber;
}

var btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  let theUser = prompt("Please enter your username");
  if (theUser != null) {

    let guessNumber = parseInt(prompt("Predict generated number"))
    while (guessNumber !== generateNumber(2, 1)) {
      guessNumber = parseInt(prompt("Failed! Predict generated number again"))
    }
    if (guessNumber == generateNumber(2, 1)) {
      alert("Congratulations! you have been awarded a point")

    }

  }
  let guessNumber2 = parseInt(prompt("Welcome to stage 2, predict the generated number"))
  while (guessNumber2 != generateNumber(3, 1)) {
    guessNumber2 = parseInt(prompt("Failed! Predict generated number again"))
  }
  if (guessNumber2 = generateNumber(3, 1)) {
    alert("Congratulations! you have been awarded another point, totalling 2 point")

  }
})