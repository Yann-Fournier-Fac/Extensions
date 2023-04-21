document.getElementById('home').addEventListener('click', function() {
    //console.log("Home");
    displayDivHome();
});

document.getElementById('buAddFavori').addEventListener('click', function() {
    displayAddMenu();
})

var divHome = document.getElementById('divHome');
var addFav = document.getElementById('addFavoris')
var MenuAddFav = document.getElementById('MenuAddFav');

addFav.style = "display:flex"

// Home *****************************************************************************************************************************************************************
//Test
// var home = document.createElement('p');
// home.innerHTML="Home";
// divHome.appendChild(home);
let favoris;
const savedFavoris = JSON.parse(localStorage.getItem('favoris'));
if (Array.isArray(savedFavoris)) {
    favoris = savedFavoris;
} else {
    favoris = [];
}

function removeFavoris(idToDelete) {
    favori = favoris.filter(function (fav) {
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
        const image =   document.createElement('img');
        if(elm.Image.length !== 0) {
            image.src = elm.Image;
            division.appendChild(image);
        }

        const nom = document.createElement('a');
        nom.href = elm.Url;
        nom.innerHTML = elm.Nom;
        division.appendChild(nom);

        const deletButtom = document.createElement('button');
        deletButtom.innerText = 'Delete';
        deletButtom.style = 'margin-left: 12px;'
        deletButtom.onclick = deletFavoris;
        deletButtom.id = todo.id;
        division.appendChild(deletButtom)

        divHome.appendChild(division);
              
    });
}

renderHome();

// faire html en rapport
function addFavoris() {
    const id = '' + new Date().getTime();

    const inImage = document.getElementById('inImgFav');
    const image = inImage.value;

    const inNom = document.getElementById('inNomFav');
    const nom = inNom.value;

    const inUrl = document.getElementById('inUrlFav');
    const url = inUrl.value;

    favoris.push(
        {Id:id, Image:image, Nom:nom, Url:url}
    )

}

function deletFavoris(event) {
    const deletButtom = event.target;
    const idToDelete = deletButtom.id;
    //console.log(idToDelete);

    removeTodo(idToDelete);

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
    addFav.style = "display:flex"

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(0, 34, 255, 0);";
        boutons[i].classList = "buhome";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(0, 34, 255, 0.477);}";
    }
    boutons[2].style = "background-color: rgba(0, 34, 255, 0.477);";
    //corps.style = "background-color: rgba(178, 255, 255, 1);";
    icon.src = "../images/info.png";

    Home();
}