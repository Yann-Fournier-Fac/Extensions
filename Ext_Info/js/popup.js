document.getElementById('stream').addEventListener('click', function() {
    //console.log("Stream");
    displayDivStream();
});
document.getElementById('esport').addEventListener('click', function()  {
    //console.log("Esport");
    displayDivEsport();
});
document.getElementById('home').addEventListener('click', function() {
    //console.log("Home");
    displayDivHome();
});
document.getElementById('formula1').addEventListener('click', function() {
    //console.log("Formula 1");
    displayDivFormula1();
});
document.getElementById('manga').addEventListener('click', function() {
    //console.log("Manga");
    displayDivManga()
});



var corps = document.getElementById('bod');
var icon = document.getElementById('image');
var affiche = document.getElementById('affichage')
var recherche = document.getElementById('recherche');

var boutons = document.getElementsByTagName('button')
boutons[2].style = "background-color: rgba(0, 34, 255, 0.477)";
/*for (let i=0; i<boutons.length; i++) {
    boutons[i].style.cssText ="button:hover {background-color: rgba(85, 0, 125, 0.8);}";
}*/

// Inter div ************************************************************************************************************************************************************
var divStream = document.getElementById('divStream');
var divEsport = document.getElementById('divEsport');
var divHome = document.getElementById('divHome');
var divFormula1 = document.getElementById('divFormula1');
var divManga = document.getElementById('divManga');

// Inter input (recherche)********************************************************************************************************************************************************
var addStream = document.getElementById('addStream');
var buAddStream = document.getElementById('buAddStream');

var removeStream = document.getElementById('removeStream')
var buRemoveStream = document.getElementById('buRemoveStream');

var year = document.getElementById('year');
var buYear = document.getElementById('buYear');

var titre = document.getElementById('titre');
var buTitre = document.getElementById('buTitre');

// Stream ***************************************************************************************************************************************************************
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
    } else {}
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

function Stream() {
    divStream.innerHTML = "";
    for (let streamer in streamersId) {
        getStream(streamersId[streamer]);
    }
}

function displayDivStream() {
    // affiche info
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divStream.style = "display:block;width:330px;height:222px;";

    // affiche Choice
    year.style = "display:none;";
    titre.style = "display:none;";
    addStream.style = "display:block;";
    removeStream.style = "display:block;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(85, 0, 125, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(85, 0, 125, 0.8);}";
    }
    boutons[0].style = "background-color: rgba(85, 0, 125, 0.8);";
    corps.style = "background-color: rgb(209, 114, 255);";
    icon.src = "../images/twitch.png";
    Stream();
}

//Stream();
// appel afficheStream() toutes les minutes
// const when = 1545696000;
// const periodInMinutes= 1;
// chrome.alarms.create("Stream",{
//     when, 
//     periodInMinutes
// });
// chrome.alarms.onAlarm.addListener(() => {Stream();});

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
    removeStream.style = "display:none;";
    titre.style = "display:none;";
    year.style = "display:none;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(178, 255, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(178, 255, 255, 1);}";
    }
    boutons[1].style = "background-color: rgba(178, 255, 255, 1);";
    corps.style = "background-color: rgba(0, 34, 255, 0.477);";
    icon.src = "../images/esport.png";

    Esport();
}



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
    removeStream.style = "display:none;";
    titre.style = "display:none;";
    year.style = "display:none;"; 

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        //boutons[i].classList.add("BoutonInfo")
        boutons[i].style.cssText ="button:hover {background-color: rgba(0, 34, 255, 0.477);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";
    corps.style = "background-color: rgba(178, 255, 255, 1);";
    icon.src = "../images/info.png";

    Home();
}

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

    // affiche choice
    addStream.style = "display:none;";
    removeStream.style = "display:none;";
    titre.style = "display:none;";
    year.style = "display:block;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 0, 0.97);}";
    }
    boutons[3].style = "background-color: rgba(255, 0, 0, 0.97);";
    corps.style = "background-color: rgb(255, 112, 112, 1);";
    icon.src = "../images/formula1.png";

    Formula1();
}

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

    // affiche choice
    addStream.style = "display:none;";
    removeStream.style = "display:none;";
    year.style = "display:none;";
    titre.style = "display:block;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(255, 0, 255, 0);";
        boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 255, 1);}";
    }
    boutons[4].style = "background-color: rgba(255, 0, 255, 1)";
    corps.style = "background-color: rgb(255, 133, 255);";
    icon.src = "../images/manga.png";

    Manga();
}

