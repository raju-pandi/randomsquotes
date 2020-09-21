const quote = document.getElementById("quote");
const author = document.getElementById("author");

document.getElementById("developer").innerHTML = "Developed by 'Raju' ";

function fetchQuotes() {
  let random = Math.floor(Math.random() * Math.floor(645));

  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = " ' " + data[random].text + " ' ";
      author.innerHTML = " ' " + data[random].author + " ' ";
    });
}

fetchQuotes();
