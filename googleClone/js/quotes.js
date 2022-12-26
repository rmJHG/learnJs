const quotes = [
  {
    quote: "Life is something that happens when you can't get to sleep.",
    author: "Fran Lebowitz",
  },
  {
    quote: "At 20 years of age the will reigns, at 30 the wit, at 40 the judgment.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Your beliefs become your thoughts. Your thoughts become your words. Your words become your actions. Your actions become your habits. Your habits become your values. Your values become your destiny.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Life is not fair; get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
    author: "Albert Einstein",
  },
  {
    quote:
      "I actually thought that it would be a little confusing during the same period of your life to be in one meeting when you're trying to make money, and then go to another meeting where you're giving it away.",
    author: "Bill Gates",
  },
  {
    quote: "Before he sets out, the traveler must possess fixed interests and facilities to be served by travel.",
    author: "George Santayana",
  },
  {
    quote: "Life is a foreign language; all men mispronounce it.",
    author: "Christopher Morley",
  },
  {
    quote: "If youth only knew: if age only could.",
    author: "Henri Estienne",
  },
  {
    quote: "Life is a long lesson in humility.",
    author: "James M. Barrie",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const ramdomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = ramdomQuote.quote;
author.innerText = ramdomQuote.author;
