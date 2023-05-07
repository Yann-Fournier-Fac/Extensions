var divHome = document.getElementById('divHome');
var addFav = document.getElementById('addFavoris')
var menuAddFav = document.getElementById('MenuAddFav');
var menuRemFav = document.getElementById('MenuRemFav');

addFav.style = "display:flex";

// Mise en forme Home
for (let i=0; i<boutons.length; i++) {
    boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
    boutons[i].classList.add("buhome");
}
boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";


document.getElementById('home').addEventListener('click', function() {
    //console.log("Home");
    displayDivHome();
});

document.getElementById('buAddFavori').addEventListener('click', function() {
    displayAddMenu();
});

document.getElementById('buValFav').addEventListener('click', function() {
    addFavoris();
    
});
document.getElementById('buQuiteFav').addEventListener('click', function() {
    menuAddFav.style = "display:none";
});

document.getElementById('buValRemF').addEventListener('click', function() {
    // en attente
});

function displayDivHome() {
    // Affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:none;";
    divHome.style = "display:block;width:330px;height:222px;";

    // affiche choice
    addStream.style = "display:none;";
    titre.style = "display:none;";
    year.style = "display:none;";
    game.style = 'display:none';
    addFav.style = "display:flex";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].className = 'buhome';
        //boutons[i].style.cssText ="button:hover {background-color: rgba(0, 34, 255, 0.477);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";
    //corps.style = "background-color: rgba(178, 255, 255, 1);";
    icon.src = "../images/icons/info.png";
    icon.style = "width:50px; height:50px;"
}


// Home *****************************************************************************************************************************************************************

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// let favoris = [];
// const savedFavoris = JSON.parse(localStorage.getItem('favoris'));
// if (Array.isArray(savedFavoris)) {
//     favoris = savedFavoris;
// } else {
//     favoris = [];
// }

// function saveFavoris() {
//     localStorage.setItem('favoris', JSON.stringify(favoris));
// }

function renderHome(array) {
    document.getElementById('divHome').innerHTML = '';

    array.forEach(function (elm) {
        const division = document.createElement('div');
        division.classList = "divisionFav";

        const image =   document.createElement('img');
        if(elm.Image.length !== 0) {
            image.src = '../images/favoris/' + elm.Image;
            
        } else {
            image.src = '../images/favoris/interrogation.png';
        }
        if (elm.Id === "13") {
            image.style = "width: 50px; height:25px;"
        } else if (elm.Id === "5") {
            image.style = "width: 45px; height:30px;"
        }else if (elm.Id === "10") {
            image.style = "width: 35px; height:25px;"
        } else {
            image.style = "width: 30px; height:30px;"
        }
        division.appendChild(image);

        const nom = document.createElement('a');
        nom.href = elm.Url;
        nom.target = "_blank";
        nom.classList = 'linkHome';
        nom.innerHTML = elm.Nom;
        division.appendChild(nom);

        const deletButtom = document.createElement('button');
        deletButtom.classList = 'buDeleteFav'
        const imgCroix = document.createElement('img');
        imgCroix.classList = 'croixFav';
        imgCroix.src = '../images/icons/croix.png';
        deletButtom.appendChild(imgCroix);
        //deletButtom.onclick = deletFavoris;
        deletButtom.id = elm.Id;
        imgCroix.id = elm.Id
        //console.log(deletButtom.id);
        division.appendChild(deletButtom)

        divHome.appendChild(division);
    });
}

//renderHome(favoris);

// // faire html en rapport
// function addFavoris() {
//     const id = '' + new Date().getTime();
//     //console.log(id);

//     const inImage = document.getElementById('inImageFav');
//     var image;
//     if (inImage.value.length === 0) {
//         image = 'interrogation.png';
//     } else {
//         image = inImage.value;
//     }

//     const inNom = document.getElementById('inNomFav');
//     var nom;
//     if (inNom.value.length === 0) {
//         nom = 'inconnu';
//     } else {
//         nom = inNom.value;
//     }

//     const inUrl = document.getElementById('inUrlFav');
//     var url;
//     if (inUrl.value.length === 0) {
//         url = 'https://google.com'
//     } else {
//         url = inUrl.value;
//     }

//     favoris.push(
//         {Id:id, Image:image, Nom:nom, Url:url}
//     )
//     saveFavoris();
//     menuAddFav.style = "display:none";
//     renderHome(favoris);
// }

// function val(idToDelete) {
//     favoris = favoris.filter(function (fav) {
//         if (fav.Id === idToDelete) {
//             //console.log(fav.id);
//             return false;
//         } else {
//             return true;
//         }
//     });
//     //console.log(favoris);
//     saveFavoris();
//     renderHome(favoris);
//     //console.log(favoris);
// }

// function deletFavoris(event) {
//     const deleteButtom = event.target;
//     console.log(deleteButtom)
//     const idToDelete = deleteButtom.id;
//     console.log(idToDelete);
//     //console.log(idToDelete);

//     val(idToDelete);

    
// }

// function displayAddMenu() {
//     MenuAddFav.style = "display: block;"
// }

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

fetch('../json/home.json')
.then((response) => {
    return response.json();})
.then((jsondata) => {
    renderHome(jsondata.Favoris);
});