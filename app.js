//Document selectors
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("advice-btn");
const twitterBtn = document.getElementById("twitter-btn");

//Function to get a new advice
function getNewAdvice() {
  fetch("https://api.adviceslip.com/advice") //First the fetch of the API link is done
    .then((response) => response.json()) //Use a .then to get the information in JSON format
    .then((data) => {
      //With the JSON information we access to the slip object which contains an id and an "advice" key that contains the advice itself.
      const advice = data.slip.advice; //After that, the text of the advice key of the slip object is stored in a variable.
      adviceText.textContent = advice; //Then, the text content of the adviceText element becomes whatever is in the variable advice.
      const randomColor = `rgb(${getRandomInt(256)}, ${getRandomInt(
        //Now, in a variable, an RGB value is stored, this with the help of a function that return a value between 0 and 255 (the RGB posible values)
        256
      )}, ${getRandomInt(256)})`; //For example we could get this: rgb(123,70,3)
      document.body.style.backgroundColor = randomColor; //And that value is set to the background-color property of the body element.
    })
    .catch((error) => console.error(error)); //A .catch is defined in case that something doesn't go as planned and the error is printed in the console.
}

//Function to open Twitter and get a post with the advice
function shareOnTwitter() {
  const advice = adviceText.textContent; //First a variable gets the text of the advice that was obtained through the getNewAdvice function.
  const twitterUrl = `https://twitter.com/intent/tweet?url=${advice}`; //Then, a string that contains the URL of a new twitter post that contain the advice text is stored in a variable.
  window.open(twitterUrl, "_blank"); //And with the open method of the window interface we open a new tab with the link stored before.
}

//Function to get a number between 0 and 255 fot the RGB values.
function getRandomInt(max) {
  //It has a param of max that indicates the maximum number that can be obtained
  return Math.floor(Math.random() * max); //Math.floor rounds down the number obtained through math.random (which creates a number between 0 and 1) multiplied by the number passed as parameter
}

//Event listener of the advice button
adviceBtn.addEventListener("click", () => {
  getNewAdvice(); //When the button is clicked it will execute the getNewAdvice function
});

//Event listener of the twitter button
twitterBtn.addEventListener("click", () => {
  shareOnTwitter(); //When the button is clicked it will execute the shareOnTwitter function
});

getNewAdvice(); // When the page loads, it executes the function to get an advice without pressing any button.
