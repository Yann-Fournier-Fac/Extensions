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
var Streamer =  {
    "ryulgc": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png",
    "otplol_": "https://static-cdn.jtvnw.net/jtv_user_pictures/787bd9dd-9367-45ed-a44d-d755427549b8-profile_image-70x70.png",
    "Kamet0": "https://static-cdn.jtvnw.net/jtv_user_pictures/9e12862d-a8d0-4df2-81aa-e2241022dc98-profile_image-70x70.jpg",
    "Gotaga": "https://static-cdn.jtvnw.net/jtv_user_pictures/69e324f6-fc7d-4131-89ed-227a955637cf-profile_image-70x70.png",
    "Chipsette_FR": "https://static-cdn.jtvnw.net/jtv_user_pictures/1c008e6b-b840-4c57-9c2e-859a5b9a4c53-profile_image-70x70.png",
    "LCK": "https://static-cdn.jtvnw.net/jtv_user_pictures/04b097ac-9a71-409e-b30e-570175b39caf-profile_image-70x70.png",
    "VALORANT": "https://static-cdn.jtvnw.net/jtv_user_pictures/375c4db6-af2a-489e-842a-5e5b3ce287a2-profile_image-70x70.png",
    "RLEsport": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-70x70.png",
    "RocketBaguette": "https://static-cdn.jtvnw.net/jtv_user_pictures/6019724d-4158-4cc9-bd03-75d67960be48-profile_image-70x70.png",
    "jbzzed": "https://static-cdn.jtvnw.net/jtv_user_pictures/jbzzed-profile_image-3b2a4588b08af4b0-70x70.jpeg",
    "Rasmelthor": "https://static-cdn.jtvnw.net/jtv_user_pictures/1dee5831-e38c-4a4d-9af5-c04df4c1398d-profile_image-70x70.png",
    "AzleTV": "https://static-cdn.jtvnw.net/jtv_user_pictures/eb50ce67-e93f-4515-a4a9-9c7a27cda231-profile_image-70x70.png",
    "Pokemon": "https://static-cdn.jtvnw.net/jtv_user_pictures/dd000fb5-e41d-4676-a793-8d024030ac55-profile_image-70x70.png",
    "Skyyart": "https://static-cdn.jtvnw.net/jtv_user_pictures/f5287d16-d2c8-4a82-ad68-d621415d43f2-profile_image-300x300.png",
    "Mickalow": "https://static-cdn.jtvnw.net/jtv_user_pictures/1c7c4302-f5e3-49d1-9559-c9afbdcf19ac-profile_image-300x300.png",
    "FairyPeak": "https://static-cdn.jtvnw.net/jtv_user_pictures/c63b7e39-b766-4f4d-ad40-244c6f84bb14-profile_image-300x300.png",
    "Snayzy": "https://static-cdn.jtvnw.net/jtv_user_pictures/e196f442-50f7-4397-92e3-49b8e24295be-profile_image-300x300.jpeg",
    "PodaSaii": "https://static-cdn.jtvnw.net/jtv_user_pictures/d84fc4d7-ed83-4107-84bb-b98e26bce5e9-profile_image-300x300.png",
    "Nayson": "https://static-cdn.jtvnw.net/jtv_user_pictures/d8fa4420-d07a-40ff-9cfa-23d006405b05-profile_image-300x300.png",
    "Nikof": "https://static-cdn.jtvnw.net/jtv_user_pictures/6be7dd51-05b0-4e38-a8b8-44a29702bf1f-profile_image-300x300.png",
    "FuuRy_Off": "https://static-cdn.jtvnw.net/jtv_user_pictures/00dd2b3e-a986-4693-81ae-4ba9dbea414e-profile_image-300x300.png",
    "LPL": "https://static-cdn.jtvnw.net/jtv_user_pictures/8111888b-17e2-43b6-ac5f-10bb3451b130-profile_image-300x300.png",
    "RocketLeague": "https://static-cdn.jtvnw.net/jtv_user_pictures/4f182bee-012a-4955-9bd2-55d903f84276-profile_image-300x300.png",
    "Ninou": "https://static-cdn.jtvnw.net/jtv_user_pictures/0884db5e-c50e-4656-809a-034e42c01bd3-profile_image-300x300.png",
    "Vatira_": "https://static-cdn.jtvnw.net/jtv_user_pictures/b1288865-884c-40e9-ac88-0c34656580a4-profile_image-300x300.png",
    "Etoiles": "https://static-cdn.jtvnw.net/jtv_user_pictures/4eecaab8-4de3-4bcc-b2b7-f3a03e8273a8-profile_image-300x300.png",
    "Mawkzy_": "https://static-cdn.jtvnw.net/jtv_user_pictures/6caeccff-e661-4ccb-838f-a6426ac7e3a5-profile_image-300x300.png",
    "Kaydop": "https://static-cdn.jtvnw.net/jtv_user_pictures/047f3327-ef6d-4e0d-bd65-38a0586b195c-profile_image-300x300.png",
    "GaspowRL": "https://static-cdn.jtvnw.net/jtv_user_pictures/8877e8f2-fccf-4ccf-8b28-e2c353c1eb76-profile_image-300x300.png",
    "Akytio": "https://static-cdn.jtvnw.net/jtv_user_pictures/eeb41690-189a-40fe-a1b2-ebccf3795c21-profile_image-300x300.png",
    "Kyedae": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png",
    "D7RL": "https://static-cdn.jtvnw.net/jtv_user_pictures/c794340d-322e-41b4-86d7-61a8f15d6686-profile_image-300x300.png",
    "fugu_fps": "https://static-cdn.jtvnw.net/jtv_user_pictures/938e2765-7a70-4cdc-93ab-844b7b729e09-profile_image-300x300.png",
    "Solary": "https://static-cdn.jtvnw.net/jtv_user_pictures/3b6094ef-a538-42c9-ad59-25a0fe719ee2-profile_image-300x300.png",
    "LeBouseuh": "https://static-cdn.jtvnw.net/jtv_user_pictures/9a6e58e5-2da6-47e4-a4ce-eb91a0d1572d-profile_image-300x300.png",
    "Mastu": "https://static-cdn.jtvnw.net/jtv_user_pictures/64e280b4-d6a1-4819-922b-9d4f8c80a3c7-profile_image-300x300.png",
    "Squeezie": "https://static-cdn.jtvnw.net/jtv_user_pictures/df3e5800-b524-4c4e-87b0-8b3646d9185a-profile_image-70x70.png",
    "RomainLanery": "https://static-cdn.jtvnw.net/jtv_user_pictures/a9602247-c501-4406-a091-3c1df93fbc72-profile_image-70x70.png"
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
    boutons[0].style = "background-color: rgba(215, 143, 245,1);";
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
        division.style = "width:430px;text-align: center;background-color: rgba(215, 143, 248,0.5); margin-bottom:10px;border-radius: 10px;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);";

        var premierLigne = document.createElement('div');
        premierLigne.style = "display:flex; justify-content:center; height : 40px;text-align:center; padding-top:10px;";

        var thumbnail = document.createElement('img');
        thumbnail.src = Streamer[json.data[0].user_name];
        thumbnail.style = "margin-right : 5px;border-radius:50%; width:30px; height:30px;display:inline;"
        // thumbnail.src = json2.Streamer[0].img;
        //thumbnail.style = "display: flex; radius:50%;";

        var name = document.createElement('a');
        name.href = "https://twitch.tv/" + json.data[0].user_name;
        name.target = "_blank";
        name.innerHTML = json.data[0].user_name + ":";
        name.className = "linkStream";
        name.style = "display: inline;height: 10px; font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400; margin-right:5px;";

        var ligne = document.createElement('p');
        ligne.innerHTML = "-----------------------";
        ligne.style = "font-family: 'Dongle', sans-serif; margin:0px;";

        var titre = document.createElement('p');
        titre.innerHTML = json.data[0].title;
        titre.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400;font-style: italic; padding-bottom: 10px;padding-right:5px; padding-left:5px;";

        premierLigne.appendChild(thumbnail);
        premierLigne.appendChild(name);
        division.appendChild(premierLigne);
        division.appendChild(ligne);
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

function Stream(json) {
    divStream.innerHTML = "";
    console.log()
    for (let i=0; i < json.Streamer.length; i++) {
        getStream(json.Streamer[i].user_id);
    }
    
}

fetch('../json/stream.json')
.then((response) => {
    return response.json();
})
.then((jsondata) => {
    Stream(jsondata);
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let stream = [];
// let savedStream = JSON.parse(localStorage.getItem('stream'));
// if (Array.isArray(savedStream)) {
//     //stream = savedStream;
//     stream = []
// } else {
//     stream = [];
// }

// function saveStream() {
//     localStorage.setItem('stream', JSON.stringify(stream));
// }

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
