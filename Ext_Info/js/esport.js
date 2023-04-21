document.getElementById('esport').addEventListener('click', function()  {
    //console.log("Esport");
    displayDivEsport();
});

// Esport ***************************************************************************************************************************************************************
//Test
var esp = document.createElement('p');
esp.innerHTML="Esport";
divEsport.appendChild(esp);

function Esport() {}

function displayDivEsport() {
    // affiche info
    divStream.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divEsport.style = "display:block;width:330px;height:222px;";

    // affiche choice
    addStream.style = "display:none;";
    titre.style = "display:none;";
    year.style = "display:none;";
    addFav.style = "display:none"

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(178, 255, 255, 0);";
        boutons[i].classList = "buesport";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(178, 255, 255, 1);}";
    }
    boutons[1].style = "background-color: rgba(178, 255, 255, 1);";
    //corps.style = "background-color: rgba(0, 34, 255, 0.477);";
    icon.src = "../images/esport.png";

    Esport();
}
