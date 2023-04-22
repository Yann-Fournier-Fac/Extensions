var divManga = document.getElementById('divManga');

var titre = document.getElementById('titre');
var buTitre = document.getElementById('buTitre');

document.getElementById('manga').addEventListener('click', function() {
    //console.log("Manga");
    displayDivManga()
});

// Manga ****************************************************************************************************************************************************************
//Test
var man = document.createElement('p');
man.innerHTML="Manga";
divManga.appendChild(man);

function Manga() {}

function displayDivManga() {
    // affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:block;width:330px;height:222px;";
    MenuAddFav.style = "display: none;"

    // affiche choice
    addStream.style = "display:none;";
    year.style = "display:none;";
    addFav.style = "display:none"
    titre.style = "display:flex;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(255, 0, 255, 0);";
        boutons[i].classList = "bumanga";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 255, 1);}";
    }
    boutons[4].style = "background-color: rgba(255, 0, 255, 1)";
    //corps.style = "background-color: rgb(255, 133, 255);";
    icon.src = "../images/manga.png";

    Manga();
}