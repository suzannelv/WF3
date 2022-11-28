/**
 * sur plusieurs jours
JOUR 1 :
Je veux créer une vidéothèque, à terme, elle sera en mesure d'accueillir plusieurs centaines, voire milliers d'oeuvres. Pour le moment, je n'ai que 6 films mais je ne veux pas créer d'objets manuellement pour chacun de ceux-là.

J'ai besoin d'un titre, d'un-e réalisateur-rice, d'une durée totale en minutes, d'une durée visionnée (en cours) en minutes et d'une courte description.

Je dois afficher toutes ces oeuvres dans la console (pour le moment).
 */
let remplacement=/ /gi;
class Films {
    constructor( title, filmMaker, duration, timeWatchedMinute, description, image, years )

    {this.title = title;
    this.filmMaker = filmMaker;
    this.duration = duration;
    this.timeWatchedMinute = timeWatchedMinute;
    this.description = description;
    this.image = image;
    this.years = years; 
    this._id = title.toLowerCase().replace(remplacement, "_").replace(":", "")
}
    
}
const movies=[
    new Films ("La Ligne verte", "Frank Darabont", "3h 09min", 189,"Paul Edgecomb, Gardien-chef du pénitencier de Cold Mountain en 1935, était chargé de veiller au bon déroulement des exécutions capitales.", "./img/la ligne verte.jpg", 2014),
    new Films ("Forrest Gump", " Robert Zemeckis", "2h 20min", 140, "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.", "./img/Forrest Gump.jpg", 1998),
    new Films ("La Liste de Schindler", " Steven Spielberg", "3h 15min", 195, "Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.", "./img/La Liste de Schindler.jpg", 2005),

    new Films ("12 hommes en colère", "Sidney Lumet", "1h 35min", 95, "Lors d'un procès, un juré émet l'hypothèse que l'homme qu'il doit juger n'est peut-être pas coupable. Il va tenter de convaincre les onze autres jurés.", "./img/12 hommes en colère.jpg", 2007),
    new Films ("Le Parrain", " Francis Ford Coppola", "2h 55min", 175, "En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker. Sollozzo, 'parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue...", "./img/le-parrain-trilogie.jpg", 2015),
    new Films ("Les Evadés", "Frank Darabont", "2h 22min", 142, "Condamné à perpétuité pour le meurtre de sa femme et de son amant, un banquier s'accroche à l'espoir et se lie d'amitié avec un autre détenu pour survivre en prison.", "./img/Les Evadés.jpg", 2018)
]

console.log(movies.length)


// for (let film of movie){
//     console.log(`Film ${film.title} réalisé par ${film.filmMaker} dure ${film.duration} , en ${film.timeWatchedMinute} minutes`);
// }
// for (let summary of movie){
//     console.log(`Le résumé du film de ${summary.title}: ${summary.description}.`);
// }


// const list = document.getElementById("#list");
// for (let listfilm of movies){
//     let li = document.createElement("li");
//     li.textContent = listfilm;
//     list.appendChild(li);
// }

const h1 = document.createElement("h1");
h1.textContent = "Ma vidéothèque";
const parent=document.getElementById("contenu");
parent.appendChild(h1)





for (let movie of movies) {
let list = document.createElement("div");
parent.appendChild(list)
list.innerHTML = `
 
        <div class="col-4 card mx-auto mb-5" style="width:30em">
            <img src="${movie.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.description}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"> Réalisateur: ${movie.filmMaker}</li>
            <li class="list-group-item">Duration: ${movie.duration}</li>
            <li class="list-group-item">Année: ${movie.years}</li>
            </ul>
            <div class="card-body">
                <a href="videotheque_page2.html?id=${movie._id}" class="card-link btn btn-secondary text-decoration-none text-light">Play</a>
                <a href="#" class="card-link  btn btn-secondary text-decoration-none text-light">Pause</a>
            </div>    
        </div>

    
        `
}