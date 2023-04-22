var divStream = document.getElementById('divStream');
var findResearch = document.getElementById('findResearch');

var addStream = document.getElementById('addStream');
var buAddStream = document.getElementById('buAddStream');
var buRemoveStream = document.getElementById('buRemoveStream');


document.getElementById('stream').addEventListener('click', function() {
    //console.log("Stream");
    displayDivStream();
});
document.getElementById('buAddStream').addEventListener('click', function() {
    addStreamer();
})
document.getElementById('buRemoveStream').addEventListener('click', function() {
    removeStreamer();
})

// Stream ***************************************************************************************************************************************************************
/*let streamersId = {
    "otplol_": 622498423, 
    "Kamet0": 27115917, 
    "Gotaga": 24147592,
    "Chipsette_FR": 101049128, 
    "LCK": 124425501,
    "VALORANT": 490592527,
    "RLEsport" : 651809919,
    "RocketBaguette": 139027213,
    "jbzzed": 114497555,
    "Rasmelthor": 97189013,
    "AzleTV": 31832587,
    "Pokémon": 36653045
};*/

var clientId = '09v5b6vch1hsywuyw8j0d5gqxik09j';
var token = 'u1336g3trrgsdwayhw33g5g3ik463f';
var twitchURL = '';
var header = {
    'Authorization': `Bearer ${token}`,
    'Client-Id': clientId
}

function cb(json) {
    if (json.data.length) {
        var division = document.createElement('div');
        division.style = "border-top:1px; border-top-style:solid; width:430px;text-align: center;";

        var premierLigne = document.createElement('div');
        premierLigne.style = "display:flex; justify-content:center; height : 40px;text-align:center";

        var thumbnail = document.createElement('img');
        //thumbnail.src = "https://static-cdn.jtvnw.net/jtv_user_pictures/787bd9dd-9367-45ed-a44d-d755427549b8-profile_image-70x70.png";
        //thumbnail.style = "margin-right : 5px;"
        /*thumbnail.src = json2.Streamer[0].img;
        thumbnail.style = "display: flex; radius:50%;";*/

        var name = document.createElement('a');
        name.href = "https://twitch.tv/" + json.data[0].user_name;
        name.target = "_blank";
        name.classList = 'linkStream'
        name.innerHTML = json.data[0].user_name + ":";

        var titre = document.createElement('p');
        titre.innerHTML = json.data[0].title;
        titre.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400;font-style: italic;";

        //division.appendChild(thumbnail);
        premierLigne.appendChild(thumbnail);
        premierLigne.appendChild(name);
        division.appendChild(premierLigne);
        division.appendChild(titre);
        divStream.appendChild(division);
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
    fetchTwitchAPI(url);
}

function Stream(streamersId) {
    divStream.innerHTML = "";
    console.log()
    for (let i=0; i < streamersId.Streamer.length; i++) {
        getStream(streamersId.Streamer[i].user_id);
    }
}
var Truc ;
function settruc(truc){
    Truc = truc;
}

fetch('../json/stream.json')
.then((response) => {
    return response.json();
})
.then((jsondata) => {
    //cb2(jsondata)
    //streamersId = jsondata;
    //console.log(jsondata)
    settruc(jsondata)
    Stream(jsondata);
});


console.log(Truc)
//console.log(truc)
var resp = fetch('../json/stream.json');
console.log(resp);
//var resp2 = resp.json();
//console.log(resp2);



function displayDivStream() {
    // affiche info
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divStream.style = "display:block;width:330px;height:222px;";
    MenuAddFav.style = "display: none;"

    // affiche Choice
    year.style = "display:none;";
    titre.style = "display:none;";
    addFav.style = "display:none"
    game.style = 'display:none';
    addStream.style = "display:flex;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(85, 0, 125, 0);";
        boutons[i].classList = "bustream";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(85, 0, 125, 0.8);}";
    }
    boutons[0].style = "background-color: rgba(85, 0, 125, 0.8);";
    //corps.style = "background-color: rgba(255, 255, 255, 1);";
    icon.src = "../images/twitch.png";
    //logo.style = "background-color: rgb(209, 114, 255);";
    //buton.style = "background-color: rgb(209, 114, 255);"
}

function addStreamer() {
    console.log("ajout");
    console.log(document.getElementById("inAddStream").value);
}
function removeStreamer() {
    console.log("retrait");
    console.log(document.getElementById("inAddStream").value);
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
