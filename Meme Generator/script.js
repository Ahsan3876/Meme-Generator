const memeButton = document.querySelector(".Meme-Button");
const authorName = document.querySelector(".author");
const heading = document.querySelector(".title");
const image = document.querySelector(".image");

function getMeme() {
  fetch(`https://meme-api.com/gimme/wholesomememes`)
    .then((res) => res.json())
    .then((data) => {
      const { author, title, url } = data;
      authorName.innerText = `Meme By: ${author}`;
      heading.innerText = title;
      image.src = url;
    });
}
getMeme();

memeButton.addEventListener("click", () => {
  getMeme();
});
