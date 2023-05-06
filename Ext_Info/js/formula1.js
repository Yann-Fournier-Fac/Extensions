var divFormula1 = document.getElementById('divFormula1');

var year = document.getElementById('year');
// bouton
var buRaces = document.getElementById('races');
var buDrivers = document.getElementById('driverStanding');
var buConstructors = document.getElementById('constructorStanding');
// div
var races = document.getElementById('affRaces');
var drivers = document.getElementById('affDriverStanding');
var constructors = document.getElementById('affConstructorStanding');

document.getElementById('formula1').addEventListener('click', function() {
    //console.log("Formula 1");
    displayDivFormula1();
});

buRaces.addEventListener('click', function() {
    displayRaces();
});

buDrivers.addEventListener('click', function() {
    displayDrivers()
});

buConstructors.addEventListener('click', function() {
    displayConstructors();
});
// Formula 1 ************************************************************************************************************************************************************
var urlDrivers = "http://ergast.com/api/f1/current/driverStandings.json";
var urlConstructors = "http://ergast.com/api/f1/current/constructorStandings.json";

var pilots = {
    "Albon": "../images/Formula1/Drivers/albon.png",
    "Alonso": "../images/Formula1/Drivers/alonzo.png",
    "Bottas": "../images/Formula1/Drivers/bottas.png",
    "de Vries": "../images/Formula1/Drivers/devries.png",
    "Gasly": "../images/Formula1/Drivers/gasly.png",
    "Hamilton": "../images/Formula1/Drivers/hamilton.png",
    "Hülkenberg": "../images/Formula1/Drivers/hulkenberg.png",
    "Leclerc": "../images/Formula1/Drivers/leclerc.png",
    "Magnussen": "../images/Formula1/Drivers/magnussen.png",
    "Norris": "../images/Formula1/Drivers/norris.png",
    "Ocon": "../images/Formula1/Drivers/ocon.png",
    "Pérez": "../images/Formula1/Drivers/perez.png",
    "Piastri": "../images/Formula1/Drivers/piastri.png",
    "Russell": "../images/Formula1/Drivers/russell.png",
    "Sainz": "../images/Formula1/Drivers/sainz.png",
    "Sargeant": "../images/Formula1/Drivers/sargeant.png",
    "Stroll": "../images/Formula1/Drivers/stroll.png",
    "Tsunoda": "../images/Formula1/Drivers/tsunoda.png",
    "Verstappen": "../images/Formula1/Drivers/verstappen.png",
    "Zhou": "../images/Formula1/Drivers/zhou.png"
};

var constructeurs = {
    "red_bull": {
        "logo": "../images/Formula1/Teams/RedBull.png", 
        "color":"rgba(255, 255, 255, 1)", 
        "backcolor": "rgba(0, 30, 60, 1);"
    },
    "mercedes": {"logo": "../images/Formula1/Teams/mercedes.png", "color":"rgba(255,255,255,1)", "backcolor": "rgba(27, 27, 27, 1);"},
    "ferrari": {"logo": "../images/Formula1/Teams/ferrari.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(220, 0, 0, 1);"},
    "mclaren": {"logo": "../images/Formula1/Teams/mclaren.png", "color":"rgba(0, 0, 0, 1)", "backcolor": "rgba(255, 135, 0, 1);"},
    "alfa": {"logo": "../images/Formula1/Teams/alfa.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(157, 24, 53, 1);"},
    "aston_martin": {"logo": "../images/Formula1/Teams/aston_martin.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(0, 87, 81, 1);"},
    "alpine": {"logo": "../images/Formula1/Teams/alpine.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(0, 120, 201, 1);"},
    "alphatauri": {"logo": "../images/Formula1/Teams/alfatauri.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(1, 19, 33, 1);"},
    "williams": {"logo": "../images/Formula1/Teams/williams.png", "color":"rgba(255, 255, 255, 1)", "backcolor": "rgba(0, 130, 250, 1);"},
    "haas": {"logo": "../images/Formula1/Teams/haas.png", "color":"rgba(0, 0, 0, 1)", "backcolor": "rgba(255, 255, 255, 1);"}
};

function displayRaces() {
    buRaces.style = "background-color: rgba(255,255,255,0); border-style: solid;border-color:rgb(255, 86, 86);";
    buDrivers.style = "background-color: rgb(255, 86, 86);";
    buConstructors.style = "background-color: rgb(255, 86, 86);";

    constructors.style = "display:none;"
    drivers.style = "display:none;";
    races.style = "display:block;width:330px;height:322px;";
}

function displayDrivers() {
    buRaces.style = "background-color: rgb(255, 86, 86);";
    buDrivers.style = "background-color: rgba(255,255,255,0); border-style: solid; border-color:rgb(255, 86, 86);";
    buConstructors.style = "background-color: rgb(255, 86, 86);";

    races.style = "display:none;";
    constructors.style = "display:none;";
    drivers.style = "display:block;width:330px;height:322px;"; 
}

function displayConstructors() {
    buRaces.style = "background-color: rgb(255, 86, 86);";
    buDrivers.style = "background-color: rgb(255, 86, 86);";
    buConstructors.style = "background-color: rgba(255,255,255,0); border-style: solid;border-color:rgb(255, 86, 86);";

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
    icon.src = "../images/icons/form1.png";
    icon.style = "width:100px; height:50px;"
    //icon.style = "width:30px; height:30px;"
}

function Drivers(json) {
    var driv = json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    //console.log(driv);
    driv.forEach(element => {
        var division = document.createElement('div');
        division.style = "display: flex; flex-direction: row; justify-content: space-between;    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); margin-top: 5px; margin-bottom: 5px; border-radius: 10px; width: 400px; vertical-align: middle; padding-left: 0px;padding-right: 30px;font-size:80px; background-color:" + constructeurs[element.Constructors[0].constructorId].backcolor;
        //division.className = "";

        var place = document.createElement('p');
        place.innerHTML = element.position + ".";
        place.style = "display: inline; font-size:80px; margin:0px;font-family: 'Dongle', sans-serif;padding-left:20px;color:" + constructeurs[element.Constructors[0].constructorId].color;

        var divPilot = document.createElement('div');
        divPilot.style = "display: flex; flex-direction: row; justify-content: center; text-align: center;";

        var photo = document.createElement('img');
        photo.src = pilots[element.Driver.familyName];
        photo.style = "width: 70px; height:70px;border-radius: 100%;margin-right:10px;margin-top:20px;margin-bottom:0px;";

        var name = document.createElement('p');
        name.innerHTML = element.Driver.familyName;
        name.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;margin-top:35px;margin-bottom:0px;font-weight: 400;color:" + constructeurs[element.Constructors[0].constructorId].color;

        var points = document.createElement('p');
        points.innerHTML = element.points;
        points.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 50px;font-weight: 400;margin-top:20px;margin-bottom:0px;color:" + constructeurs[element.Constructors[0].constructorId].color;


        divPilot.appendChild(photo);
        divPilot.appendChild(name);
        division.appendChild(place);
        division.appendChild(divPilot);
        division.appendChild(points);
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
    constru.forEach(element => {
        var division = document.createElement('div');
        division.style = "display: flex; flex-direction: row; justify-content: space-between;    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); margin-top: 5px; margin-bottom: 5px; border-radius: 10px; width: 400px; vertical-align: middle; padding-left: 0px;padding-right: 30px;font-size:80px; background-color:" + constructeurs[element.Constructor.constructorId].backcolor;

        var place = document.createElement('p');
        place.innerHTML= element.position + ".";
        place.style = "display: inline; font-size:80px; margin:0px;font-family: 'Dongle', sans-serif;padding-left:20px; color:" + constructeurs[element.Constructor.constructorId].color;

        var divTeams = document.createElement('div');
        divTeams.style = "display: flex; flex-direction: row; justify-content: center; text-align: center;";

        var logo = document.createElement('img');
        logo.src = constructeurs[element.Constructor.constructorId].logo;
        logo.style = "width: 70px; height:70px;border-radius: 100%;margin-right:10px;margin-top:20px; margin-bottom:0px;";

        var name = document.createElement('p');
        name.innerHTML = element.Constructor.name;
        name.style = "display: inline;font-family: 'Dongle', sans-serif;margin-top:40px; margin-bottom:0px; font-size: 25px;font-weight: 400; color:" + constructeurs[element.Constructor.constructorId].color;

        var points = document.createElement('p');
        points.innerHTML = element.points;
        points.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 50px;font-weight: 400;margin-top: 25px;margin-bottom: 0px; color:" + constructeurs[element.Constructor.constructorId].color;

        divTeams.appendChild(logo);
        divTeams.appendChild(name);
        division.appendChild(place);
        division.appendChild(divTeams);
        division.appendChild(points)
        constructors.appendChild(division);
    });
    
}

fetch(urlConstructors)
.then((response) =>  {
    return response.json();
}).then((json) => Constructors(json));



