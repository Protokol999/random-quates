import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");
const quoteAuthorElement = document.getElementById("author");
const toggleFavoriteBtn = document.getElementById("make-favorite");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;
  if (randomQuote.isFavorite) {
    toggleFavoriteBtn.classList.add("fa");
    toggleFavoriteBtn.classList.remove("far");
  } else {
    toggleFavoriteBtn.classList.remove("fa");
    toggleFavoriteBtn.classList.add("far");
  }
  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  if (currentQuote.isFavorite) {
    toggleFavoriteBtn.classList.add("fa");
    toggleFavoriteBtn.classList.remove("far");
  } else {
    toggleFavoriteBtn.classList.remove("fa");
    toggleFavoriteBtn.classList.add("far");
  }

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.setAttribute("data-quote", currentQuote.quote);
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class="author">${currentQuote.author}</p>
    `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.getAttribute("data-quote") === currentQuote.quote) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);
