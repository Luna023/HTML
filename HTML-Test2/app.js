document.getElementById("addBookButton").addEventListener("click", function () {
  const title = prompt("Enter book title:");
  const author = prompt("Enter author name:");
  const description = prompt("Enter a short description:");

  const bookCard = document.createElement("div");
  bookCard.className = "book-card";

  bookCard.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Author:</strong> ${author}</p>
        <p>${description}</p>
    `;

  document.getElementById("bookList").appendChild(bookCard);
});
