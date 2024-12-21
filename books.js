// Selecting popup elements
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");

var addPopupButton = document.getElementById("add-popup-button");
addPopupButton.addEventListener("click", function () {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

var cancelPopup = document.getElementById("cancel-popup");
cancelPopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

// Select container and input fields
var container = document.querySelector(".container");

var addBookButton = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input"); // Fixed ID
var bookDescriptionInput = document.getElementById("book-description-input");

addBookButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Hide popup
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";

    // Create a new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${bookTitleInput.value}</h2>
        <h5>${bookAuthorInput.value}</h5>
        <p>${bookDescriptionInput.value}</p>
        <button onclick="deleteBook(event)">Delete</button>
    `;

    // Append to the main container
    container.appendChild(div);

    // Clear input fields for a better UX
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";
});

// Delete function
function deleteBook(event) {
    event.target.parentElement.remove();
}
