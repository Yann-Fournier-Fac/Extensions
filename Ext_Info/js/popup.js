document.getElementById('stream').addEventListener('click', function() {
    console.log("Stream");
    afficheStream();
});
document.getElementById('esport').addEventListener('click', function()  {
    console.log("Esport");
    afficheEsport();
});
document.getElementById('home').addEventListener('click', function() {
    console.log("Home");
    afficheHome();
});
document.getElementById('formula1').addEventListener('click', function() {
    console.log("Formula 1");
    afficheFormula1();
});
document.getElementById('manga').addEventListener('click', function() {
    console.log("Manga");
    afficheManga()
});

var boutons = document.getElementsByTagName('button')
//console.log(boutons[1]);

var corps = document.getElementById('bod');
var icon = document.getElementById('image');
var affiche = document.getElementById('affichage')
boutons[2].style = "background-color: rgba(0, 34, 255, 0.477)";


// Stream ***************************************************************************************************************************************************************
function afficheStream() {
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(85, 0, 125, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(85, 0, 125, 0.8);}";
    }
    boutons[0].style = "background-color: rgba(85, 0, 125, 0.8);";
    corps.style = "background-color: rgb(209, 114, 255);";
    icon.src = "../images/twitch.png";
}

// Esport ***************************************************************************************************************************************************************
function afficheEsport() {
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(178, 255, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(178, 255, 255, 0.8);}";
    }
    boutons[1].style = "background-color: rgba(178, 255, 255, 0.8));";
    corps.style = "background-color: rgba(0, 34, 255, 0.477);";
    icon.src = "../images/esport.png";
}

// Home *****************************************************************************************************************************************************************
function afficheHome() {
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(85, 0, 125, 0.8);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";
    corps.style = "background-color: rgb(178, 255, 255);";
    icon.src = "../images/info.png";

    // Affichage
    affiche.innerHTML = "";
}

// Formula 1 ************************************************************************************************************************************************************
function afficheFormula1() {
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 0, 0.97);}";
    }
    boutons[3].style = "background-color: rgba(255, 0, 0, 0.97);";
    corps.style = "background-color: rgb(255, 112, 112, 1);";
    icon.src = "../images/formula1.png";
}

// Manga ****************************************************************************************************************************************************************
function afficheManga() {
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(255, 0, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 255, 1);}";
    }
    boutons[4].style = "background-color: rgba(255, 0, 255, 1)";
    corps.style = "background-color: rgb(255, 133, 255);";
    icon.src = "../images/manga.png";
}
