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

var cards = document.querySelectorAll(".flip-card-inner");
console.log(cards);
[...cards].forEach((card) => {
    card.addEventListener( 'click', function() {
        card.classList.toggleClass('is-flipped');
      });
});
// Formula 1 ************************************************************************************************************************************************************
var urlRaces = "http://ergast.com/api/f1/current.json";
var urlDrivers = "http://ergast.com/api/f1/current/driverStandings.json";
var urlConstructors = "http://ergast.com/api/f1/current/constructorStandings.json";
var urlNextGP = "http://ergast.com/api/f1/current/next.json";

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

var Mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

function numDateToString(date) {
    if (date[8] == "0") {
        var jour = date[9];
    } else {
        var jour = date[8] + date[9];
    }
    if (date[5] === "0") {
        var mois = Mois[parseInt(date[6], 10) - 1];
    } else {
        var mois = Mois[parseInt(date[5] + date[6], 10)-1];
    }
    return jour + " " + mois
} 


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

// var date = new Date();
// console.log(date);
// console.log(date.getDate()); // jour du mois
// console.log(date.getMonth()); // mois


// transform: rotateY(180deg);
// https://www.w3schools.com/howto/howto_css_flip_card.asp

function Races(json) {
    var courses = json.MRData.RaceTable.Races;
    //console.log(courses)
    courses.forEach(element => {
        var flipCard = document.createElement('div');
        flipCard.className = "flip-card";

        var flipCardInner = document.createElement('div');
        flipCardInner.className = "flip-card-inner";

        var divisionFront = document.createElement('div');
        divisionFront.className = "divisionRacesFront"
        divisionFront.id = element.raceName;
 
        var numero = document.createElement('p');
        numero.innerHTML = element.round + ".";
        numero.style = "display: inline; font-size:50px; margin:0px;font-family: 'Dongle', sans-serif;padding-left:20px;color: rgb(0, 0, 0);";

        var gpName = document.createElement('p');
        gpName.innerHTML = element.raceName;
        gpName.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;margin-top:20px;margin-bottom:0px;font-weight: 400;color:rgb(0,0,0);";

        var date = document.createElement('p');
        date.innerHTML = numDateToString(element.date);;
        date.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 30px;font-weight: 400;margin-top:17px;margin-bottom:0px;color:rgb(0,0,0);";

        var divisionBack = document.createElement('div');
        divisionBack.className = "divisionRacesBack";
        divisionBack.id = element.raceName+"B";

        var numero2 = document.createElement('p');
        numero2.innerHTML = element.round + ".";
        numero2.style = "display: inline; font-size:50px; margin:0px;font-family: 'Dongle', sans-serif;padding-left:20px;color: rgb(0, 0, 0);";

        var gpName2 = document.createElement('p');
        gpName2.innerHTML = element.raceName;
        gpName2.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;margin-top:20px;margin-bottom:0px;font-weight: 400;color:rgb(0,0,0);";

        var date2 = document.createElement('p');
        date2.innerHTML = numDateToString(element.date);;
        date2.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 30px;font-weight: 400;margin-top:17px;margin-bottom:0px;color:rgb(0,0,0);";

        divisionFront.appendChild(numero);
        divisionFront.appendChild(gpName);
        divisionFront.appendChild(date);
        divisionBack.appendChild(numero2);
        divisionBack.appendChild(gpName2);
        divisionBack.appendChild(date2);
        flipCardInner.appendChild(divisionFront);
        flipCardInner.appendChild(divisionBack);
        flipCard.appendChild(flipCardInner);
        races.appendChild(flipCard);
    });
    var para = document.createElement('p');
    para.innerHTML = "para pour faire une bande blanche en dessous (style)";
    para.style = "color : rgb(255, 255, 255); margin-top: 9px;"
    races.appendChild(para);
}

fetch(urlRaces)
.then((response) =>  {
    return response.json();
}).then((json) => Races(json));

function NextGP(json) {
    var next = document.getElementById(json.MRData.RaceTable.Races[0].raceName);
    //console.log(next)
    next.className = "divisionNextRacesFront";

    var nextBack = document.getElementById(json.MRData.RaceTable.Races[0].raceName + "B");
    //console.log(next)
    nextBack.className = "divisionNextRacesBack";
}
fetch(urlNextGP)
.then((response) =>  {
    return response.json();
}).then((json) => NextGP(json));



function Drivers(json) {
    var driv = json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    //console.log(driv);
    driv.forEach(element => {

        var division = document.createElement('div');
        division.style = "display: flex; flex-direction: row; justify-content: space-between; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); margin-top: 5px; margin-bottom: 5px; border-radius: 10px; width: 400px;height:90px; vertical-align: middle; padding-left: 0px;padding-right: 30px;font-size:80px; background-color:" + constructeurs[element.Constructors[0].constructorId].backcolor;
        //division.className = "";

        var place = document.createElement('p');
        place.innerHTML = element.position + ".";
        place.style = "display: inline; font-size:70px; margin-top:0px;margin-bottom: 0px;font-family: 'Dongle', sans-serif;padding-left:20px;color:" + constructeurs[element.Constructors[0].constructorId].color;

        var divPilot = document.createElement('div');
        divPilot.style = "display: flex; flex-direction: row; justify-content: center; text-align: center;";

        var photo = document.createElement('img');
        photo.src = pilots[element.Driver.familyName];
        photo.style = "width: 70px; height:70px;border-radius: 100%;margin-right:10px;margin-top:10px;margin-bottom:0px;";

        var name = document.createElement('p');
        name.innerHTML = element.Driver.familyName;
        name.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;margin-top:28px;margin-bottom:0px;font-weight: 400;color:" + constructeurs[element.Constructors[0].constructorId].color;

        var points = document.createElement('p');
        points.innerHTML = element.points;
        points.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 50px;font-weight: 400;margin-top:11px;margin-bottom:0px;color:" + constructeurs[element.Constructors[0].constructorId].color;

        divPilot.appendChild(photo);
        divPilot.appendChild(name);
        division.appendChild(place);
        division.appendChild(divPilot);
        division.appendChild(points);
        drivers.appendChild(division);
    });

    var para = document.createElement('p');
    para.innerHTML = "para pour faire une bande blanche en dessous (style)";
    para.style = "color : rgb(255, 255, 255); margin-top: 9px;"
    drivers.appendChild(para);
}

fetch(urlDrivers)
.then((response) =>  {
    return response.json();
}).then((json) => Drivers(json));


function Constructors(json) {
    var constru = json.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    //console.log(constru);
    constru.forEach(element => {
        var division = document.createElement('div');
        division.style = "display: flex; flex-direction: row; justify-content: space-between; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); margin-top: 5px; margin-bottom: 5px; border-radius: 10px; width: 400px;height: 90px; vertical-align: middle; padding-left: 0px;padding-right: 30px;font-size:80px; background-color:" + constructeurs[element.Constructor.constructorId].backcolor;

        var place = document.createElement('p');
        place.innerHTML= element.position + ".";
        place.style = "display: inline; font-size:70px; margin:0px;font-family: 'Dongle', sans-serif;padding-left:20px; color:" + constructeurs[element.Constructor.constructorId].color;

        var divTeams = document.createElement('div');
        divTeams.style = "display: flex; flex-direction: row; justify-content: center; text-align: center;";

        var logo = document.createElement('img');
        logo.src = constructeurs[element.Constructor.constructorId].logo;
        logo.style = "width: 70px; height:70px;border-radius: 100%;margin-right:10px;margin-top:10px; margin-bottom:0px;";

        var name = document.createElement('p');
        name.innerHTML = element.Constructor.name;
        name.style = "display: inline;font-family: 'Dongle', sans-serif;margin-top:28px; margin-bottom:0px; font-size: 25px;font-weight: 400; color:" + constructeurs[element.Constructor.constructorId].color;

        var points = document.createElement('p');
        points.innerHTML = element.points;
        points.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 50px;font-weight: 400;margin-top: 11px;margin-bottom: 0px; color:" + constructeurs[element.Constructor.constructorId].color;

        divTeams.appendChild(logo);
        divTeams.appendChild(name);
        division.appendChild(place);
        division.appendChild(divTeams);
        division.appendChild(points)
        constructors.appendChild(division);
    });
    var para = document.createElement('p');
    para.innerHTML = "para pour faire une bande blanche en dessous (style)";
    para.style = "color : rgb(255, 255, 255); margin-top: 9px;"
    constructors.appendChild(para);
    
}

fetch(urlConstructors)
.then((response) =>  {
    return response.json();
}).then((json) => Constructors(json));



