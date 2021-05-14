// TOGGLE BTN & MENU
var toggleMenu = (btnParam, menuParam) => {
    var btn = document.getElementById(btnParam);
    var menu = document.getElementById(menuParam);
    btn.addEventListener('click', () => {
        menu.classList.toggle('d-none');
    })
}
toggleMenu('infosBtn', 'infos');
toggleMenu('servicesBtn', 'services');
toggleMenu('aProposBtn', 'aPropos');
toggleMenu('menuLogo', 'menu');


// CARTE 
var mymap = L.map('mapid').setView([5.5202756, -87.062392], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidG9tdG9tYnJpIiwiYSI6ImNrbW1ndjRlaDFraTcydnFrbjFwcXV3d3UifQ.TxJFiJoHp-3TSB7zl3eHcA'
}).addTo(mymap);