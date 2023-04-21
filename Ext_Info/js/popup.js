var corps = document.getElementById('bod');
var logo = document.getElementById('logo');
var icon = document.getElementById('image');
var buton = document.getElementById('bouton')
var affiche = document.getElementById('affichage')
var recherche = document.getElementById('recherche');

var boutons = [];
boutons.push(document.getElementById('stream'));
boutons.push(document.getElementById('esport'));
boutons.push(document.getElementById('home'));
boutons.push(document.getElementById('formula1'));
boutons.push(document.getElementById('manga'));

for (let i=0; i<boutons.length; i++) {
    boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
    boutons[i].classList.add("buhome");
}
boutons[2].style = "background-color: rgba(0, 34, 255, 0.477)";

// Inter div ************************************************************************************************************************************************************
var divStream = document.getElementById('divStream');
var findResearch = document.getElementById('findResearch');
var divEsport = document.getElementById('divEsport');

var divFormula1 = document.getElementById('divFormula1');
var divManga = document.getElementById('divManga');

// Inter input (recherche)********************************************************************************************************************************************************
var addStream = document.getElementById('addStream');
var buAddStream = document.getElementById('buAddStream');
var buRemoveStream = document.getElementById('buRemoveStream');



var year = document.getElementById('year');
var buYear = document.getElementById('buYear');

var titre = document.getElementById('titre');
var buTitre = document.getElementById('buTitre');
