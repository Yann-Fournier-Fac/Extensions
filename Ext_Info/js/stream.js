var divStream = document.getElementById('divStream');

var menuAddStream = document.getElementById('MenuAddStream');
var infoStreamerTrouver = document.getElementById('infoStreamerTrouver');
var infoStreamerTrouverImg = document.getElementById('infoStreamerTrouverImg');
var infoStreamerTrouverNom = document.getElementById('infoStreamerTrouverNom');

var menuRemStream = document.getElementById('MenuRemStream');

var addStream = document.getElementById('addStream');
var buAddStream = document.getElementById('buAddStream');
var buRemoveStream = document.getElementById('buRemoveStream');


document.getElementById('stream').addEventListener('click', function() {
    //console.log("Stream");
    displayDivStream();
});

// Add
document.getElementById('buAddStream').addEventListener('click', function() {
    // Boutton Plus
    findStreamer();
})

document.getElementById('buRes').addEventListener('click', function() {
    menuAddStream.style = "display:none";
    // Boutton annulation
})

// Remove
document.getElementById('buRemoveStream').addEventListener('click', function() {
    // boutton Croix
    menuRemStream.style = 'display:flex;';
})
document.getElementById('buValRem').addEventListener('click', function() {
    // Boutton Validation
    removeStreamer();
})
document.getElementById('buResRem').addEventListener('click', function() {
    //Bouton Annulation
    menuRemStream.style = 'display:none;';
})



// Stream ***************************************************************************************************************************************************************
let stream2 ;

let stream = [];
let savedStream = JSON.parse(localStorage.getItem('stream'));
if (Array.isArray(savedStream)) {
    //stream = savedStream;
    stream = []
} else {
    stream = [];
}

function saveStream() {
    localStorage.setItem('stream', JSON.stringify(stream));
}

var clientId = '09v5b6vch1hsywuyw8j0d5gqxik09j';
var token = 'u1336g3trrgsdwayhw33g5g3ik463f';
var twitchURL = '';
var header = {
    'Authorization': `Bearer ${token}`,
    'Client-Id': clientId
}
urlName ="https://api.twitch.tv/helix/users?login=";
urlId ="https://api.twitch.tv/helix/streams?user_id=";

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
    icon.src = "../images/icons/twitch.png";
    icon.style = "width:50px; height:50px;"
    //logo.style = "background-color: rgb(209, 114, 255);";
    //buton.style = "background-color: rgb(209, 114, 255);"
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function cb(json) {
    if (json.data.length) {
        var division = document.createElement('div');
        division.style = "border-top:1px; border-top-style:solid; width:430px;text-align: center;";

        var premierLigne = document.createElement('div');
        premierLigne.style = "display:flex; justify-content:center; height : 40px;text-align:center";

        var thumbnail = document.createElement('img');
        // thumbnail.src = json.Streamer[0].img;
        // thumbnail.style = "margin-right : 5px;border-radius:50%; width:30px; height:30px;display:inline;"
        // thumbnail.src = json2.Streamer[0].img;
        // thumbnail.style = "display: flex; radius:50%;";

        var name = document.createElement('a');
        name.href = "https://twitch.tv/" + json.data[0].user_name;
        name.target = "_blank";
        name.innerHTML = json.data[0].user_name + ":";
        name.className = "linkStream";
        name.style = "display: inline;height: 10px; font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400; margin-right:5px;";

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

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// function popDoublons() {
//     let unique = [];
//     for (let i=0; i<stream.length; i++) {
//         if(!unique.includes(stream[i])) {
//             unique.push(stream[i])
//         }
//     }
//     return unique
// }

// function renderStream() {
//     console.log("renderStream");
//     divStream.innerHTML = "";
//     divStream.innerHTML = "";
//     divStream.innerHTML = "";
//     stream = popDoublons();
//     console.log(stream);
//     stream.forEach(function (elm) {
//         fetch(urlId+String(elm.Id), { 
//             headers: header 
//         }).then((response) =>  {
//             return response.json();
//         }).then((json) => {
//             if (json.data.length) {
//                 var division = document.createElement('div');
//                 division.style = "border-top:1px; border-top-style:solid; width:430px;text-align: center;";
        
//                 var premierLigne = document.createElement('div');
//                 premierLigne.style = "display:flex; justify-content:center; height : 40px;text-align:center;margin-top:5px";
        
//                 var thumbnail = document.createElement('img');
//                 thumbnail.src = elm.Img;
//                 thumbnail.style = "margin-right : 5px;border-radius:50%; width:30px; height:30px;display:inline;"
//                 // /*thumbnail.src = json2.Streamer[0].img;
//                 // thumbnail.style = "display: flex; radius:50%;";*/
        
//                 var name = document.createElement('a');
//                 name.href = "https://twitch.tv/" + json.data[0].user_name;
//                 name.target = "_blank";
//                 name.classList = 'linkStream'
//                 name.innerHTML = json.data[0].user_name + ":";
//                 name.style = "display:inline;"
        
//                 var titre = document.createElement('p');
//                 titre.innerHTML = json.data[0].title;
//                 titre.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400;font-style: italic;";
        
//                 //division.appendChild(thumbnail);
//                 premierLigne.appendChild(thumbnail);
//                 premierLigne.appendChild(name);
//                 division.appendChild(premierLigne);
//                 division.appendChild(titre);
//                 divStream.appendChild(division);
//             } else {}
//         });
//     });
// }

// renderStream();

// function cb(json) {
//     infoStreamerTrouverImg.src = json.data[0].profile_image_url;
//     infoStreamerTrouverImg.style = "width:30px; height:30px; border-radius:25%;margin-right:10px;"
//     infoStreamerTrouverNom.innerHTML = json.data[0].display_name;
//     infoStreamerTrouverNom.style = "font-family: 'Dongle', sans-serif;display:inline;font-size: 25px;font-weight: 400;";
    
//     document.getElementById('buVal').addEventListener('click', function() {
//         addStreamer(json);
//         // Boutton validation
//     })
//     menuAddStream.style = 'display:flex;';
// }

// function findStreamer() {
//     var name = document.getElementById("inAddStream").value;
//     //console.log(url2)
//     fetch(urlName+String(name), { 
//         headers: header 
//     }).then((response) =>  {
//         return response.json();
//     }).then((json) => {
//         stream2 = JSON.parse(json);
//         console.log(json)
//         cb(json);
//     });
    
// }

// console.log(stream2);

// function addStreamer(json) {
//     divStream.innerHTML = '';
//     const id = json.data[0].id;
//     const nom = json.data[0].display_name;
//     const image = json.data[0].profile_image_url;
//     //console.log(json);
//     streamer = {Id:id, Nom:nom, Img:image};
//     stream.push(streamer);

//     saveStream();
//     renderStream();
//     menuAddStream.style = 'display:none;';
// }

// function removeStreamer() {
//     console.log(document.getElementById("inAddStream").value);

//     for (let i = 0; i < stream.length; i++) {
//         if (document.getElementById("inAddStream").value === stream[i].Nom) {
//             var nbr = stream.unshift(i, stream[i]);
//         }
//     }
//     console.log(stream);
//     menuRemStream.style = 'display:none;';
//     renderStream();
// }

// //Stream();
// // appel afficheStream() toutes les minutes
// // const when = 1545696000;
// // const periodInMinutes= 1;
// // chrome.alarms.create("Stream",{
// //     when, 
// //     periodInMinutes
// // });
// // chrome.alarms.onAlarm.addListener(() => {Stream();});
