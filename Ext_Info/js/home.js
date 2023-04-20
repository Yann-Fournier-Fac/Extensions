document.getElementById('home').addEventListener('click', function() {
    //console.log("Home");
    displayDivHome();
});

// Home *****************************************************************************************************************************************************************
//Test
var home = document.createElement('p');
home.innerHTML="Home";
divHome.appendChild(home);

function Home() {}

function displayDivHome() {
    // Affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divHome.style = "display:block;width:330px;height:222px;";

    // affiche choice
    addStream.style = "display:none;";
    titre.style = "display:none;";
    year.style = "display:none;"; 

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].classList = "buhome";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(0, 34, 255, 0.477);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";
    //corps.style = "background-color: rgba(178, 255, 255, 1);";
    icon.src = "../images/info.png";

    Home();
}