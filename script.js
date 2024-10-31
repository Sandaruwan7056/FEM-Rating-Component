const container = document.getElementsByClassName("rating-start-container")[0];
const thankyoucontainer = document.getElementsByClassName("rating-thankyou-container")[0];
const ratingNumbers = document.querySelectorAll(".rating-number");
const submitBtn = document.getElementById("submit");
const yourRating = document.getElementById("yourRating");

ratingNumbers.forEach((element) => {
  element.addEventListener("click", function () {
    ratingNumbers.forEach((Element) => {
      Element.classList.remove("onclick");
    });
    element.classList.add("onclick");

    let getValue = this.getAttribute("data-value");
    console.log(getValue);

    yourRating.textContent = getValue;
  });
});

submitBtn.addEventListener("click", function () {
  container.classList.add("hidden");
  thankyoucontainer.classList.remove("hidden");
});
