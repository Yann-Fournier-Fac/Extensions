var divFormula1 = document.getElementById('divFormula1');

var year = document.getElementById('year');
var races = document.getElementById('affRaces');
var drivers = document.getElementById('affDriverStanding');
var constructors = document.getElementById('affConstructorStanding');

document.getElementById('formula1').addEventListener('click', function() {
    //console.log("Formula 1");
    displayDivFormula1();
});

document.getElementById('races').addEventListener('click', function() {
    displayRaces();
});

document.getElementById('driverStanding').addEventListener('click', function() {
    displayDrivers()
});

document.getElementById('constructorStanding').addEventListener('click', function() {
    displayConstructors();
});
// Formula 1 ************************************************************************************************************************************************************
var urlDrivers = "http://ergast.com/api/f1/current/driverStandings.json";
var urlConstructors = "http://ergast.com/api/f1/current/constructorStandings.json"

function displayRaces() {
    constructors.style = "display:none;"
    drivers.style = "display:none;";
    races.style = "display:block;width:330px;height:322px;";
}

function displayDrivers() {
    races.style = "display:none;";
    constructors.style = "display:none;";
    drivers.style = "display:block;width:330px;height:322px;"; 
}

function displayConstructors() {
    races.style = "display:none;";
    drivers.style = "display:none;";
    constructors.style = "display:block;width:330px;height:322px;";
}
function displayDivFormula1() {
    // affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divManga.style = "display:none;";
    divFormula1.style = "display:block;width:330px;height:322px;";
    MenuAddFav.style = "display: none;"

    // affiche choice
    addStream.style = "display:none;";
    titre.style = "display:none;";
    addFav.style = "display:none";
    game.style = 'display:none';
    year.style = "display:flex; flex-direction: row; justify-content: space-between;";

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
}

function Drivers(json) {
    var driv = json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(driv);

    driv.forEach(element => {
        var division = document.createElement('div');
        division.style = "display:block;width:430px;height:70px;background-color: rgba(255, 86, 86,0.3); margin-bottom: 10px; text-align: center;border-radius: 10px;";

        drivers.appendChild(division);
    });
}

fetch(urlDrivers)
.then((response) =>  {
    return response.json();
}).then((json) => Drivers(json));


function Constructors(json) {
    var constru = json.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    console.log(constru);
    
}

fetch(urlConstructors)
.then((response) =>  {
    return response.json();
}).then((json) => Constructors(json));



