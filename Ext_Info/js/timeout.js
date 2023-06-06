let minutes = 1;
let heures = 1;
let secondes = 0;

var minute = setInterval(function () {
    console.log("Ca fait : " + minutes + " minutes");
    localStorage.setItem('minutes', minutes)
    minutes += 1
}, 60_000);

var hours = setInterval(function () {
    console.log("Ca fait : " + heures + " heures");
    localStorage.setItem('heures', heures)
    heures += 1
}, 3_600_000);



function resolveAfter5Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(x);
      }, 5000);
    });
}



async function testing() {
    const delay = millis => new Promise((resolve, reject) => {
        setTimeout(_ => resolve(), millis);
    });
    await delay(2000)

    console.log("ca fait " + secondes+" secondes")
    secondes += 1;
    return true
}

for (let i = 0; i < 15; i++) {
    testing();
}


async function f1() {
    var x = await resolveAfter5Seconds(10);
    console.log(x); // 10
}
f1();


currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
console.log(`The week number of the current date is ${result}.`);
