localStorage.setItem("testLocalStorage", JSON.stringify({test: "sa fonctionne"}))
localStorage.setItem("testLocalStorage", JSON.stringify({test: "sa fonctionne tu est sur ?"}))
chrome.alarms.create({ periodInDay: 1});
chrome.alarms.onAlarm.addListener(() => {console.log("Alarm Works !!!!!!!");});