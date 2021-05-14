// ADMIN PAGE

var inputTitle = document.getElementById('title');
var inputAuthor = document.getElementById('author');
var inputSynopsis = document.getElementById('synopsis');
const addBookBtn = document.getElementById('addBookBtn');
const deleteAllBtn = document.getElementById('deleteAll');
var myBooksAdmin = document.getElementById('myBooksAdmin');
var book = {
    "auteur": "",
    "titre": "",
    "synopsis": ""
};

var addBookToLocalStorage = () => {
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let synopsis = inputSynopsis.value;
    if (title && author && synopsis) {
        book.auteur = author;
        book.titre = title;
        book.synopsis = synopsis;
        // ajout au local storage avec une clé unique (les 2 premières lettres de chaque champs)
        var bookKey = `${author.substring(0, 2)}${title.substring(0, 2)}${synopsis.substring(0, 2)}`;
        localStorage.setItem(bookKey, JSON.stringify(book));
    }
};

var displayBooksAdminPage = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let localStorageKey = localStorage.key(i);
        if (localStorageKey !== "user" && localStorageKey !== "password" && localStorageKey !== "pitch") {
            let bookDetails = localStorage.getItem(localStorageKey);
            bookDetails = JSON.parse(bookDetails);
            let titre = bookDetails.titre;
            let auteur = bookDetails.auteur;
            let synopsis = bookDetails.synopsis;

            // Création d'éléments et mise en page 
            var bookDisplay = document.createElement('div');
            var bookInfo = document.createElement('p');
            bookInfo.classList.add('fs-5');
            bookDisplay.appendChild(bookInfo);
            myBooksAdmin.appendChild(bookDisplay);

            var htmlClass = `${auteur.substring(0,2)}${i+1}`;
            var htmlClassNoSpace = htmlClass.replace(" ", "");
            bookInfo.innerHTML = `<img class="me-3 modify ${htmlClassNoSpace}" style="width: 2.5em; cursor: pointer;" src="./assets/modify.svg" alt="">
            <img class="me-5 delete ${htmlClassNoSpace}" style="width: 2.5em; cursor: pointer;" src="./assets/delete.svg" alt="">"${titre}" - ${auteur} `;

            const parser = new DOMParser();
            htmlBookInfo = parser.parseFromString(bookInfo.innerHTML, "text/html");

            // Boutons modifier/supprimer
            var modifyBtn = document.querySelector(`.modify.${htmlClassNoSpace}`);
            var deleteBtn = document.querySelector(`.delete.${htmlClassNoSpace}`);
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem(localStorageKey);
                location.reload();
            });
            modifyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                inputTitle.value = titre;
                inputAuthor.value = auteur;
                inputSynopsis.value = synopsis;
            })
        }
    }
}

var deleteAll = (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();
}

displayBooksAdminPage();
addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLocalStorage();
    location.reload();
});
deleteAllBtn.addEventListener('click', deleteAll);