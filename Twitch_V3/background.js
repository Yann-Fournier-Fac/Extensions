var userId = 27115917;
var clientId = '09v5b6vch1hsywuyw8j0d5gqxik09j';
var token = 'u1336g3trrgsdwayhw33g5g3ik463f';

var url = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
var twitchURL = '';
var header = {
    'Authorization': `Bearer ${token}`,
    'Client-Id': clientId
}

let liveIsOn = false;

function cb(json) {
    // console.log(json.data.length)
    if (json.data.length && !liveIsOn) {
        // setIcon('twich.png');
        // chrome.notifications.create('LiveOn', {
        //     title: 'Kameto est en Live',
        //     iconURL: 'twitch.png',
        //     message: 'Rejoins le live dès maintenant !',
        //     type: 'basic'
        // });
        // liveIsOn = true;
        chrome.action.setBadgeText({ text: "ON"});
        chrome.action.setBadgeBackgroundColor({ color : "blue"});
    } else {
        // setIcon('twich.png');
        // liveIsOn = false;
        chrome.action.setBadgeText({ text: "OFF"});
        chrome.action.setBadgeBackgroundColor({ color : "red"});    
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

// function setIcon() {
//     chrome.action.setIcon({ path : path});
// } 

fetchTwitchAPI(url);

chrome.notifications.onClicked.addListener(() => {
    chrome.tabs.create({
        url: twitchURL
    });
});

chrome.alarms.create({ periodInMinutes: 1});

chrome.alarms.onAlarm.addListener(() => {
    fetchTwitchAPI(url);
});