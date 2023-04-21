var divHome = document.getElementById('divHome');
var addFav = document.getElementById('addFavoris')
var MenuAddFav = document.getElementById('MenuAddFav');

addFav.style = "display:flex"

document.getElementById('home').addEventListener('click', function() {
    //console.log("Home");
    displayDivHome();
});

document.getElementById('buAddFavori').addEventListener('click', function() {
    displayAddMenu();
})

document.getElementById('buValFav').addEventListener('click', function() {
    addFavoris();
    
})
document.getElementById('buQuiteFav').addEventListener('click', function() {
    MenuAddFav.style = "display:none";
})


// Home *****************************************************************************************************************************************************************
//Test
// var home = document.createElement('p');
// home.innerHTML="Home";
// divHome.appendChild(home);
let favoris = [];
const savedFavoris = JSON.parse(localStorage.getItem('favoris'));
if (Array.isArray(savedFavoris)) {
    favoris = savedFavoris;
    //favoris = [];
} else {
    favoris = [];
}

function removeFavoris(idToDelete) {
    favoris = favoris.filter(function (fav) {
        if (fav.Id == idToDelete) {
            return false;
        } else {
            return true;
        }
    });
    saveFavoris();
}

function saveFavoris() {
    localStorage.setItem('favoris', JSON.stringify(favoris));
}

function renderHome() {
    document.getElementById('divHome').innerHTML = '';

    favoris.forEach(function (elm) {
        const division = document.createElement('div');
        division.style = 'display: flex; flex-direction: row; justify-content: space-between; background-color: rgba(0, 34, 255, 0.477); margin-top: 5px; margin-bottom: 5px; border-radius:5px; width:330px;vertical-align:middle;';

        const image =   document.createElement('img');
        if(elm.Image.length !== 0) {
            image.src = elm.Image;
            division.appendChild(image);
        }

        const nom = document.createElement('a');
        nom.href = elm.Url;
        nom.target = "_blank";
        //nom.style = 'display: inline;'
        nom.innerHTML = elm.Nom;
        division.appendChild(nom);

        const deletButtom = document.createElement('button');
        const imgCroix = document.createElement('img');
        imgCroix.classList = 'croixFav';
        imgCroix.src = '../images/croix.png';
        deletButtom.appendChild(imgCroix);
        //deletButtom.innerText = 'Delete';
        deletButtom.style = 'margin-left: 10px;'
        deletButtom.onclick = deletFavoris;
        deletButtom.id = elm.Id;
        division.appendChild(deletButtom)

        divHome.appendChild(division);
    });
}

renderHome();

// faire html en rapport
function addFavoris() {
    const id = '' + new Date().getTime();

    const inImage = document.getElementById('inImageFav');
    const image = inImage.value;

    const inNom = document.getElementById('inNomFav');
    const nom = inNom.value;

    const inUrl = document.getElementById('inUrlFav');
    const url = inUrl.value;

    favoris.push(
        {Id:id, Image:image, Nom:nom, Url:url}
    )
    saveFavoris();
    renderHome();
}

function deletFavoris(event) {
    const deletButtom = event.target;
    const idToDelete = deletButtom.id;
    //console.log(idToDelete);

    removeFavoris(idToDelete);

    renderHome();
}

function displayAddMenu() {
    MenuAddFav.style = "display: block;"
}

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
    addFav.style = "display:flex";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].classList = "buhome";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(0, 34, 255, 0.477);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";
    //corps.style = "background-color: rgba(178, 255, 255, 1);";
    icon.src = "../images/info.png";
}