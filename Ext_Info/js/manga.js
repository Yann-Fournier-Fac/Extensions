var divManga = document.getElementById('divManga');

var titre = document.getElementById('titre');
var buTitre = document.getElementById('buTitre');

document.getElementById('manga').addEventListener('click', function() {
    //console.log("Manga");
    displayDivManga()
});

// Manga ****************************************************************************************************************************************************************
//Test
var man = document.createElement('p');
man.innerHTML="Manga";
divManga.appendChild(man);

const urlManga = 'https://anilistmikilior1v1.p.rapidapi.com/getAnimeList';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'd851300a01mshbd5199c8ec6fa3ap18ade3jsn969e73f40282',
		'X-RapidAPI-Host': 'Anilistmikilior1V1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		userId: 'Ryu LGC'
	})
};


function Manga() {
    // fetch(urlManga, options)
    // .then((response) => {
    //     console.log("2");
    //     return response.json();
    // }).then((json) => console.log(json))
}

function displayDivManga() {
    // affiche info
    divStream.style = "display:none;";
    divEsport.style = "display:none;";
    divHome.style = "display:none;";
    divFormula1.style = "display:none;";
    divManga.style = "display:block;width:330px;height:222px;";
    MenuAddFav.style = "display: none;"

    // affiche choice
    addStream.style = "display:none;";
    year.style = "display:none;";
    addFav.style = "display:none";
    game.style = 'display:none';
    titre.style = "display:flex;";

    // Changement d'ambiance
    for (let i=0; i<boutons.length; i++) {
        boutons[i].style = "background-color: rgba(255, 0, 255, 0);";
        boutons[i].classList = "bumanga";
        //boutons[i].style.cssText ="button:hover {background-color: rgba(255, 0, 255, 1);}";
    }
    boutons[4].style = "background-color: rgba(255, 0, 255, 1)";
    //corps.style = "background-color: rgb(255, 133, 255);";
    icon.src = "../images/icons/manga.png";
    icon.style = "width:50px; height:50px;"

    Manga();
}





