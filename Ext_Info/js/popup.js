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



var corps = document.getElementById('bod');
var icon = document.getElementById('image');
var affiche = document.getElementById('affichage')

var boutons = document.getElementsByTagName('button')
//console.log(boutons[1]);
boutons[2].style = "background-color: rgba(0, 34, 255, 0.477)";
/*for (let i=0; i<boutons.length; i++) {
    boutons[i].style.cssText ="button:hover {background-color: rgba(85, 0, 125, 0.8);}";
}*/

var divHome = document.createElement('div');
affiche.appendChild(divHome);
divHome.style = "display:block;";



// Stream ***************************************************************************************************************************************************************
var divStream = document.createElement('div');
affiche.appendChild(divStream);
divStream.style = "display:none;";

let streamersId = {
    "otplol_": 622498423, 
    "Kamet0": 27115917, 
    "Gotagga": 24147592, 
    "Chipsette_FR": 101049128, 
    "LCK": 124425501,
    "VALORANT": 490592527,
    "RLEsport" : 651809919,
    "RocketBaguette": 139027213,
    "jbzzed": 114497555,
    "Rasmelthor": 97189013,
    "AzleTV": 31832587
};
var clientId = '09v5b6vch1hsywuyw8j0d5gqxik09j';
var token = 'u1336g3trrgsdwayhw33g5g3ik463f';


var twitchURL = '';
var header = {
    'Authorization': `Bearer ${token}`,
    'Client-Id': clientId
}

function cb(json) {
    if (json.data.length) {
        let para = document.createElement('p');
        para.innerHTML = json.data[0].user_name;
        divStream.appendChild(para);
    } else {
        console.log('non');
    }
}

function fetchTwitchAPI(url) {
    // console.log(fetch(url, { headers: header }).then((response) => response.json()).then((json) => cb(json)))
    fetch(url, { 
        headers: header 
    }).then((response) =>  {
        return response.json();
    }).then((json) => cb(json));
}

function getStream(id) {
    var url = `https://api.twitch.tv/helix/streams?user_id=${id}`;
    fetchTwitchAPI(url)
}

function displayDivStream() {
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divStream.style = "display:block;";
}

function afficheStream() {
    displayDivStream();
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(85, 0, 125, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(85, 0, 125, 0.8);}";
    }
    boutons[0].style = "background-color: rgba(85, 0, 125, 0.8);";
    corps.style = "background-color: rgb(209, 114, 255);";
    icon.src = "../images/twitch.png";

    for (let streamer in streamersId) {
        getStream(streamersId[streamer]);
    }
}

// Esport ***************************************************************************************************************************************************************
var divEsport = document.createElement('div');
affiche.appendChild(divEsport);
divEsport.style = "display:none;";

//Test
var esp = document.createElement('p');
esp.innerHTML="Esport";
divEsport.appendChild(esp);

function displayDivEsport() {
    divStream.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divEsport.style = "display:block;";
}

function afficheEsport() {
    displayDivEsport();
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(178, 255, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(178, 255, 255, 1);}";
    }
    boutons[1].style = "background-color: rgba(178, 255, 255, 1);";
    corps.style = "background-color: rgba(0, 34, 255, 0.477);";
    icon.src = "../images/esport.png";
    affiche.innerHTML = ""
}

// Home *****************************************************************************************************************************************************************
//Test
var home = document.createElement('p');
home.innerHTML="Home";
divHome.appendChild(home);

function displayDivHome() {
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divHome.style = "display:block;";
}

function afficheHome() {
    displayDivHome();
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(0, 34, 255, 0.477);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";
    corps.style = "background-color: rgba(178, 255, 255, 1);";
    icon.src = "../images/info.png";

    // Affichage
    affiche.innerHTML = "";
}

// Formula 1 ************************************************************************************************************************************************************
var divFormula1 = document.createElement('div');
affiche.appendChild(divFormula1);
divFormula1.style = "display:none;";

//Test
var form = document.createElement('p');
form.innerHTML="Formula 1";
divFormula1.appendChild(form);

function displayDivFormula1() {
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divManga.style = "display:none;";
    divFormula1.style = "display:block;";
}

function afficheFormula1() {
    displayDivFormula1();
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 0, 0.97);}";
    }
    boutons[3].style = "background-color: rgba(255, 0, 0, 0.97);";
    corps.style = "background-color: rgb(255, 112, 112, 1);";
    icon.src = "../images/formula1.png";
    affiche.innerHTML = ""
}

// Manga ****************************************************************************************************************************************************************
var divManga = document.createElement('div');
affiche.appendChild(divManga);
divManga.style = "display:none;";

//Test
var man = document.createElement('p');
man.innerHTML="Manga";
divManga.appendChild(man);

function displayDivManga() {
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:block;";
}

function afficheManga() {
    displayDivManga();
    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(255, 0, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 255, 1);}";
    }
    boutons[4].style = "background-color: rgba(255, 0, 255, 1)";
    corps.style = "background-color: rgb(255, 133, 255);";
    icon.src = "../images/manga.png";
    affiche.innerHTML = ""
}
