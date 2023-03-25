const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("advice-btn");
const twitterBtn = document.getElementById("twitter-btn");
const container = document.querySelector(".container");

function getNewAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      adviceText.textContent = advice;
      const randomColor = `rgb(${getRandomInt(256)}, ${getRandomInt(
        256
      )}, ${getRandomInt(256)})`;
      container.style.backgroundColor = randomColor;
    })
    .catch((error) => console.error(error));
}

function shareOnTwitter() {
  const advice = adviceText.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${advice}`;
  window.open(twitterUrl, "_blank");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

adviceBtn.addEventListener("click", () => {
  getNewAdvice();
});

twitterBtn.addEventListener("click", () => {
  shareOnTwitter();
});

getNewAdvice(); // Load advice when the app starts
