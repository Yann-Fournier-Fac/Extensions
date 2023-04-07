const userId = 13123;
const clientId = '';
const token = '';
const url = `https://api/twitch.tv/helix/streams?user_id=${userId}`;
const headers = {
    'Authorization': `Bearer ${token}`,
    'Client-ID': clientId
}

const info = document.getElementById('info');

const cb = function (json) {
    //info.innerHTML = json.data.length ? "Ryu est en live !" : "Ryu n'est pas en train de streamer!";
    console.log(json.data.length)
    if (json.data.length) {
        info.innerHTML = "Ryu est en live !"
    } else {
        info.innerHTML = "Ryu n'est pas en train de streamer!" 
    }
}

function fetchTwitchAPI(url, headers, cb) {
    fetch(url, {
        headers: headers
    }).then((response) => {
        return response.json();
    }).then((json) => cb(json))
}

fetchTwitchAPI(url, headers, cb) 