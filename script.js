const quotes = [
  "Я не дерусь… Я просто помогаю людям быстро уснуть.",
  "Я не хамлю – просто экономлю время на лишние слова.",
  "Я не проигрываю драки… Я просто даю фору.",
  "Девушки любят плохих парней. Я – самый плохой парень… для плохих парней.",
  "Если я улыбаюсь, значит, что-то пошло не так… но не у меня.",
  "Люблю спорт. Особенно тот, где надо бегать за деньгами.",
  "Я не прихожу вовремя. Время приходит ко мне.",
  "Когда меня спрашивают, как я решаю проблемы, я просто достаю костяшки пальцев.",
  "Не важно, что у тебя в голове. Важно, что у тебя в руках… а у меня – ключ на 32.",
  "Когда я захожу в лифт, лифт тоже напрягается.",
];
const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}
generateBtn.addEventListener("click", generateRandomQuote);
generateRandomQuote();
