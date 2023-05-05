var divFormula1 = document.getElementById('divFormula1');

var year = document.getElementById('year');
var buYear = document.getElementById('buYear');
var inYear = document.getElementById('inYear');

document.getElementById('formula1').addEventListener('click', function() {
    //console.log("Formula 1");
    displayDivFormula1();
});

document.getElementById('buChoseYear').addEventListener('click', function() {
    console.log(inYear.value);
});
// Formula 1 ************************************************************************************************************************************************************
//Test
var form = document.createElement('p');
form.innerHTML="Formula 1";
divFormula1.appendChild(form);

function Formula1() {}

function displayDivFormula1() {
    // affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divManga.style = "display:none;";
    divFormula1.style = "display:block;width:330px;height:222px;";
    MenuAddFav.style = "display: none;"

    // affiche choice
    addStream.style = "display:none;";
    titre.style = "display:none;";
    addFav.style = "display:none";
    game.style = 'display:none';
    year.style = "display:flex;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].classList = "buformula1";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 0, 0.97);}";
    }
    boutons[3].style = "background-color: rgba(255, 0, 0, 0.97);";
    //corps.style = "background-color: rgb(255, 112, 112, 1);";
    icon.src = "../images/F1.png";
    //icon.style = "width:30px; height:30px;"

    Formula1();
}