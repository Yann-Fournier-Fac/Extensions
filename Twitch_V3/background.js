const userId = 13123;
const clientId = '';
const token = '';
const url = `https://api/twitch.tv/helix/streams?user_id=${userId}`;
const twitchURL = '';
const headers = {
    'Authorization': `Bearer ${token}`,
    'Client-ID': clientId
}

let liveIsOn = false;

const cb = function (json) {
    console.log(json.data.length)
    if (json.data.length && !liveIsOn) {
        // setIcon('twich.png');
        // chrome.notifications.create('LiveOn', {
        //     title: 'Kameto est en Live',
        //     iconURL: 'twitch.png',
        //     message: 'Rejoins le live dès maintenant !',
        //     type: 'basic'
        // });
        // liveIsOn = true;
        chrome.browserAction.setBadgeText({ text: 'ON'});
        chrome.browserAction.setBadgeBackgroundColor({ color : 'blue'});
    } else {
        // setIcon('twich.png');
        // liveIsOn = false;
        chrome.browserAction.setBadgeText({ text: 'OFF'});
        chrome.browserAction.setBadgeBackgroundColor({ color : 'red'});    
    }
}

function fetchTwitchAPI(url, headers, cb) {
    fetch(url, {
        headers: headers
    }).then((response) => {
        return response.json();
    }).then((json) => cb(json))
}

function setIcon() {
    chrome.action.setIcon({ path : path});
} 

fetchTwitchAPI(url, headers, cb) 

chrome.notifications.onClicked.addListener(() => {
    chrome.tabs.create({
        url: twitchURL
    });
});

chrome.alarms.create({ periodInMinutes: 1});

chrome.alarms.onAlarm.addListener(() => {
    fetchTwitchAPI(url, headers, cb) 
});