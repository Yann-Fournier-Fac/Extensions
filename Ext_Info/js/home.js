var divHome = document.getElementById('divHome');
var addFav = document.getElementById('addFavoris')
var MenuAddFav = document.getElementById('MenuAddFav');

addFav.style = "display:flex"

// Mise en forme Home
for (let i=0; i<boutons.length; i++) {
    boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
    boutons[i].classList.add("buhome");
}
boutons[2].style = "background-color: rgba(0, 34, 255, 0.477)";


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
let favoris = [];
const savedFavoris = JSON.parse(localStorage.getItem('favoris'));
if (Array.isArray(savedFavoris)) {
    favoris = savedFavoris;
} else {
    favoris = [];
}

function saveFavoris() {
    localStorage.setItem('favoris', JSON.stringify(favoris));
}

function renderHome() {
    document.getElementById('divHome').innerHTML = '';

    favoris.forEach(function (elm) {
        const division = document.createElement('div');
    division.classList = "divisionFav";

        const image =   document.createElement('img');
        if(elm.Image.length !== 0) {
            image.src = '../images/' + elm.Image;
            image.style = "width: 30px; height:30px;"
            division.appendChild(image);
        }

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
        imgCroix.src = '../images/croix.png';
        deletButtom.appendChild(imgCroix);
        //deletButtom.innerText = 'Delete';
        deletButtom.onclick = deletFavoris;
        deletButtom.id = elm.Id;
        imgCroix.id = elm.Id
        //console.log(deletButtom.id);
        division.appendChild(deletButtom)

        divHome.appendChild(division);
    });
}

renderHome();

// faire html en rapport
function addFavoris() {
    const id = '' + new Date().getTime();
    //console.log(id);

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
    const deleteButtom = event.target;
    console.log(deleteButtom)
    const idToDelete = deleteButtom.id;
    console.log(idToDelete);
    //console.log(idToDelete);

    favoris = favoris.filter(function (fav) {
        if (fav.Id === idToDelete) {
            //console.log(fav.id);
            return false;
        } else {
            return true;
        }
    });
    //console.log(favoris);
    saveFavoris();
    renderHome();
    //console.log(favoris);
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
        boutons[i].className = 'buhome';
        //boutons[i].style.cssText ="button:hover {background-color: rgba(0, 34, 255, 0.477);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";
    //corps.style = "background-color: rgba(178, 255, 255, 1);";
    icon.src = "../images/info.png";
}