window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  // 4-letter words list scraped from https://eslforums.com/4-letter-words/
  fetch("words.json").then((f) => f.json()).then((r) => {
    console.log(r);
  })
});