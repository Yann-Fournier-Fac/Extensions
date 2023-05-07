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
var Streamer =  [{
    "name": "ryulgc",
    "user_id": 884412255,
    "img": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"
    },
    {"name": "otplol_", "user_id": 622498423, "img": "https://static-cdn.jtvnw.net/jtv_user_pictures/787bd9dd-9367-45ed-a44d-d755427549b8-profile_image-70x70.png"},
    {"name": "Kamet0", "user_id": 27115917, "img": "https://static-cdn.jtvnw.net/jtv_user_pictures/9e12862d-a8d0-4df2-81aa-e2241022dc98-profile_image-70x70.jpg"},
    {"name": "Gotaga", "user_id": 24147592, "img": "https://static-cdn.jtvnw.net/jtv_user_pictures/69e324f6-fc7d-4131-89ed-227a955637cf-profile_image-70x70.png"},
    {"name": "Chipsette_FR", "user_id": 101049128,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/1c008e6b-b840-4c57-9c2e-859a5b9a4c53-profile_image-70x70.png"},
    {"name": "LCK", "user_id": 124425501,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/04b097ac-9a71-409e-b30e-570175b39caf-profile_image-70x70.png"},
    {"name": "VALORANT","user_id": 490592527,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/ab49dc0a-4b33-4dba-adb7-2a0d7ed08f3a-profile_image-70x70.png"},
    {"name": "RLEsport","user_id": 651809919,"img": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-70x70.png"},
    {"name": "RocketBaguette","user_id": 139027213,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/6019724d-4158-4cc9-bd03-75d67960be48-profile_image-70x70.png"},
    {"name": "jbzzed","user_id": 114497555,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/jbzzed-profile_image-3b2a4588b08af4b0-70x70.jpeg"},
    {"name": "Rasmelthor","user_id": 97189013,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/1dee5831-e38c-4a4d-9af5-c04df4c1398d-profile_image-70x70.png"},
    {"name": "AzleTV","user_id": 31832587,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/eb50ce67-e93f-4515-a4a9-9c7a27cda231-profile_image-70x70.png"},
    {"name": "Pokemon","user_id": 36653045,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/dd000fb5-e41d-4676-a793-8d024030ac55-profile_image-70x70.png"},
    {"name": "Skyyart","user_id": 70298660,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/f5287d16-d2c8-4a82-ad68-d621415d43f2-profile_image-300x300.png"},
    {"name": "Mickalow","user_id": 30709418,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/1c7c4302-f5e3-49d1-9559-c9afbdcf19ac-profile_image-300x300.png"},
    {"name": "FairyPeak","user_id": 78705692,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/c63b7e39-b766-4f4d-ad40-244c6f84bb14-profile_image-300x300.png"},
    {"name": "Snayzy","user_id": 122048844,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/e196f442-50f7-4397-92e3-49b8e24295be-profile_image-300x300.jpeg"},
    {"name": "PodaSaii","user_id": 127826699,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/d84fc4d7-ed83-4107-84bb-b98e26bce5e9-profile_image-300x300.png"},
    {"name": "Nayson","user_id": 729371964,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/d8fa4420-d07a-40ff-9cfa-23d006405b05-profile_image-300x300.png"},
    {"name": "Nikof","user_id": 110119637,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/6be7dd51-05b0-4e38-a8b8-44a29702bf1f-profile_image-300x300.png"},
    {"name": "FuuRy_Off","user_id": 117323707,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/00dd2b3e-a986-4693-81ae-4ba9dbea414e-profile_image-300x300.png"},
    {"name": "LPL","user_id": 124425627,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/8111888b-17e2-43b6-ac5f-10bb3451b130-profile_image-300x300.png"},
    {"name": "RocketLeague","user_id": 57781936,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/4f182bee-012a-4955-9bd2-55d903f84276-profile_image-300x300.png"},
    {"name": "Ninou","user_id": 446661471,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/0884db5e-c50e-4656-809a-034e42c01bd3-profile_image-300x300.png"},
    {"name": "Vatira_","user_id": 493309537,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/b1288865-884c-40e9-ac88-0c34656580a4-profile_image-300x300.png"},
    {"name": "Etoiles","user_id": 85800130,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/4eecaab8-4de3-4bcc-b2b7-f3a03e8273a8-profile_image-300x300.png"},
    {"name": "Mawkzy_","user_id": 625931244,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/6caeccff-e661-4ccb-838f-a6426ac7e3a5-profile_image-300x300.png"},
    {"name": "Kaydop","user_id": 63675549,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/047f3327-ef6d-4e0d-bd65-38a0586b195c-profile_image-300x300.png"},
    {"name": "GaspowRL","user_id": 121767601,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/8877e8f2-fccf-4ccf-8b28-e2c353c1eb76-profile_image-300x300.png"},
    {"name": "Akytio","user_id": 27621732,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/eeb41690-189a-40fe-a1b2-ebccf3795c21-profile_image-300x300.png"},
    {"name": "Kyedae","user_id": 482881740,"img": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"},
    {"name": "D7RL","user_id": 171183040,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/c794340d-322e-41b4-86d7-61a8f15d6686-profile_image-300x300.png"},
    {"name": "fugu_fps","user_id": 140846786,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/938e2765-7a70-4cdc-93ab-844b7b729e09-profile_image-300x300.png"},
    {"name": "Solary","user_id": 174955366,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/3b6094ef-a538-42c9-ad59-25a0fe719ee2-profile_image-300x300.png"},
    {"name": "LeBouseuh","user_id": 96562014,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/9a6e58e5-2da6-47e4-a4ce-eb91a0d1572d-profile_image-300x300.png"},
    {"name": "Mastu","user_id": 63936838,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/64e280b4-d6a1-4819-922b-9d4f8c80a3c7-profile_image-300x300.png"},
    {"name": "Squeezie","user_id": 52130765,"img": "https://static-cdn.jtvnw.net/jtv_user_pictures/df3e5800-b524-4c4e-87b0-8b3646d9185a-profile_image-300x300.png"}
]




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
        //thumbnail.src = Streamer[9].img;
        //thumbnail.style = "margin-right : 5px;border-radius:50%; width:30px; height:30px;display:inline;"
        // thumbnail.src = json2.Streamer[0].img;
        //thumbnail.style = "display: flex; radius:50%;";

        var name = document.createElement('a');
        name.href = "https://twitch.tv/" + json.data[0].user_name;
        name.target = "_blank";
        name.innerHTML = json.data[0].user_name + ":";
        name.className = "linkStream";
        name.style = "display: inline;height: 10px; font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400; margin-right:5px;";

        var titre = document.createElement('p');
        titre.innerHTML = json.data[0].title;
        titre.style = "display: inline;font-family: 'Dongle', sans-serif;font-size: 25px;font-weight: 400;font-style: italic;";

        //premierLigne.appendChild(thumbnail);
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

function Stream() {
    divStream.innerHTML = "";
    console.log()
    for (let i=0; i < Streamer.length; i++) {
        getStream(Streamer[i].user_id);
    }
}

Stream();


// fetch('../json/stream.json')
// .then((response) => {
//     return response.json();
// })
// .then((jsondata) => {
//     //cb2(jsondata)
//     //streamersId = jsondata;
//     //console.log(jsondata)
//     settruc(jsondata)
//     Stream(jsondata);
// });

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
