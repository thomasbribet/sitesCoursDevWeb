// TOGGLE ADMIN FORM

var toggleAdminMenu = function () {
    var adminBtn = document.getElementById('adminBtn');
    var adminForm = document.getElementById('adminForm');
    adminBtn.addEventListener('click', () => {
        adminForm.classList.toggle('d-none');
    })
}
toggleAdminMenu();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// ACCESS TO ADMIN PAGE

//pseudo et mot de passe valides=====================
// pseudo = moi                                    //
// mot de passe = admin                            //
//===================================================

const inputPseudo = document.getElementById('adminPseudo');
const inputPassword = document.getElementById('adminPass');
const adminValidationBtn = document.getElementById('adminValidation');


var verificationAdmin = function (e) {
    e.preventDefault();
    localStorage.setItem("user", "moi");               
    localStorage.setItem("password", "admin"); 
    const pseudo = inputPseudo.value;
    const password = inputPassword.value;

    if (pseudo && password) {
        if (localStorage.getItem("user") === pseudo && localStorage.getItem("password") === password) {
            location.href = "./admin.html";
            localStorage.removeItem("user");
            localStorage.removeItem("password");
        }
    }
}

adminValidationBtn.addEventListener('click', verificationAdmin);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// MES LIVRES

var displayBooksInPage = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let localStorageKey = localStorage.key(i);
        if (localStorageKey !== "user" && localStorageKey !== "password" && localStorageKey !== "pitch") {
            let bookDetails = localStorage.getItem(localStorageKey);
            bookDetails = JSON.parse(bookDetails);
            let titre = bookDetails.titre;
            let auteur = bookDetails.auteur;
            let synopsis = bookDetails.synopsis;

            // Creation d'éléments 
            var cardBody = document.createElement('div');
                cardBody.classList.add('col-4','shadow');
                // cardBody.classList.add('shadow');
                var htmlClass = `${auteur.substring(0,2)}${i+1}`;
                var htmlClassNoSpace = htmlClass.replace(" ", "");
                cardBody.classList.add(`${htmlClassNoSpace}`);
                cardBody.setAttribute("style", "cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 5vh; padding: 1vh; height: 20vh;")
            var cardTitle = document.createElement('h2');
                cardTitle.innerHTML = titre;
            var cardAuthor = document.createElement('p');
                cardAuthor.classList.add('text-muted');
                cardAuthor.innerHTML = auteur;
            // Mise en page des éléments créés
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardAuthor);
            const bookPreview = document.getElementById('bookPreview');
            bookPreview.appendChild(cardBody);

            const parser = new DOMParser();
            htmlBookPreview = parser.parseFromString(bookPreview.innerHTML, "text/html");
            
            // Click sur le livre -> affiche détails
            var livre = document.querySelector(`.${htmlClassNoSpace}`);
            livre.addEventListener('click', (e) => {
                const detailsLivre = document.getElementById('details');
                // On vide le contenu avant d'en ajouter un 
                detailsLivre.innerHTML = "";
                var detailsTitre = document.createElement('p');
                    detailsTitre.classList.add('h1');
                    detailsTitre.innerHTML = titre;
                var detailsAuteur = document.createElement('p');
                    detailsAuteur.classList.add('fs-4');
                    detailsAuteur.classList.add('text-muted');
                    detailsAuteur.innerHTML = auteur;
                var detailsSynopsis = document.createElement('p');
                    detailsSynopsis.classList.add('fs-5');
                    detailsSynopsis.classList.add('pe-4');
                    detailsSynopsis.setAttribute("style", "text-align: justify; height: 50%; overflow-y: scroll;");
                    detailsSynopsis.innerHTML = synopsis;
                
                detailsLivre.appendChild(detailsTitre);
                detailsLivre.appendChild(detailsAuteur);
                detailsLivre.appendChild(detailsSynopsis);
            })
        }
    }
}

displayBooksInPage();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// SI AUCUN LIVRE

var displayIfNoBook = () => {
    if(localStorage.length == 0 ) {
        var header = document.querySelector('header');
        header.classList.toggle('d-none');
        var main = document.querySelector('main');
        main.classList.toggle('d-none');
    }
}
displayIfNoBook();