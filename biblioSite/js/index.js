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