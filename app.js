const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("advice-btn");

function getNewAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      adviceText.textContent = advice;
    })
    .catch((error) => console.error(error));
}

adviceBtn.addEventListener("click", () => {
  getNewAdvice();
});

getNewAdvice(); // Load advice when the app starts
