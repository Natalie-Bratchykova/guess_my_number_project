"using strict";

const generateRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

let requiredNumber = generateRandomNumber(1, 20);
let userRating = Number(document.querySelector(".current_score").textContent);
console.log(requiredNumber);

document.querySelector(".check").addEventListener("click", () => {
  let usersVariant = Number(document.querySelector(".number_input").value);
  console.log(usersVariant);

  if (usersVariant === requiredNumber) {
    document.querySelector(".question_mark").innerHTML = requiredNumber;
    userRating++;
    document.querySelector(".current_score").innerHTML = userRating;
    document.querySelector(".messege").innerHTML = `good job`;
    if (
      userRating > Number(document.querySelector(".highest_score").textContent)
    ) {
      document.querySelector(".highest_score").innerHTML = userRating;
    }
  } else {
    document.querySelector(".messege").innerHTML = `Your number is ${
      usersVariant > requiredNumber ? "greater" : "less"
    } than mine`;
    userRating = userRating > 0 ? userRating - 1 : 0;
    document.querySelector(".current_score").innerHTML = userRating;
  }
});

// again
document.querySelector(".again_button").addEventListener("click", () => {
  requiredNumber = generateRandomNumber(1, 20);
  console.log(requiredNumber);
  document.querySelector(".number_input").innerHTML = "";
  document.querySelector(".question_mark").innerHTML = `?`;
  document.querySelector(".messege").innerHTML = "";
});
