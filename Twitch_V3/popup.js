var userId = 27115917;
var clientId = '09v5b6vch1hsywuyw8j0d5gqxik09j';
var token = 'bxckld80z22swvrzdfjhny83t2awii';

var url = `https://api/twitch.tv/helix/streams?user_id=${userId}`;
var headers = {
    'Authorization': `Bearer ${token}`,
    'Client-ID': clientId
}

const info = document.getElementById('info');

const cb = function (json) {
    //info.innerHTML = json.data.length ? "Ryu est en live !" : "Ryu n'est pas en train de streamer!";
    //console.log(json.data.length)
    if (json.data.length) {
        info.innerHTML = "Kamet0 est en live !"
    } else {
        info.innerHTML = "Kamet0 n'est pas en train de streamer!" 
    }
}

function toJson(response) {
    return response.json();
}

function fetchTwitchAPI(url, headers, cb) {
    var response =  fetch(url, {headers: headers});
    //console.log(response)
    var response2 = toJson(response);
    cb(response2);
}

fetchTwitchAPI(url, headers, cb());