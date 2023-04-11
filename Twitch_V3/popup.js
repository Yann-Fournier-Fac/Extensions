var userId = 27115917;
var clientId = '09v5b6vch1hsywuyw8j0d5gqxik09j';
var token = 'u1336g3trrgsdwayhw33g5g3ik463f';

var url = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
var header = {
    'Client-Id': clientId,
    'Authorization': `Bearer ${token}`
}


const info = document.getElementById('info');

function cb(json) {
    //info.innerHTML = json.data.length ? "Ryu est en live !" : "Ryu n'est pas en train de streamer!";
    if (json.data.length) {
        info.innerHTML = "Kamet0 est en live !"
    } else {
        info.innerHTML = "Kamet0 n'est pas en train de streamer!" 
    }
}

function fetchTwitchAPI(urlt) {
    // console.log(fetch(url, { headers: header }).then((response) => response.json()).then((json) => cb(json)))
    fetch(url, { headers: header }).then((response) => response.json()).then((json) => cb(json))
}

fetchTwitchAPI(url);