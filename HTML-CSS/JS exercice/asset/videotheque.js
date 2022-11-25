

class Films {
    constructor( title, filmMaker, duration, timeWatchedMinute,view, description, image, years,site)

    {this.title = title;
    this.filmMaker = filmMaker;
    this.duration = duration;
    this.timeWatchedMinute = timeWatchedMinute;
    this.view = view;
    this.description = description;
    this.image = image;
    this.years = years;
   
}
    
}
const movies=[
    new Films ("La Ligne verte", "Frank Darabont", "3h 09min", 189, 20,"Paul Edgecomb, Gardien-chef du pénitencier de Cold Mountain en 1935, était chargé de veiller au bon déroulement des exécutions capitales.", "./img/la ligne verte.jpg", 2014),
    new Films ("Forrest Gump", " Robert Zemeckis", "2h 20min", 140, 40, "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.", "./img/Forrest Gump.jpg", 1998),
    new Films ("La Liste de Schindler", " Steven Spielberg", "3h 15min", 195,100, "Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.", "./img/La Liste de Schindler.jpg", 2005),

    new Films ("12 hommes en colère", "Sidney Lumet", "1h 35min", 95,50, "Lors d'un procès, un juré émet l'hypothèse que l'homme qu'il doit juger n'est peut-être pas coupable. Il va tenter de convaincre les onze autres jurés.", "./img/12 hommes en colère.jpg", 2007),
    new Films ("Le Parrain", " Francis Ford Coppola", "2h 55min", 175,70, "En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker. Sollozzo, 'parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue...", "./img/le-parrain-trilogie.jpg", 2015),
    new Films ("Les Evadés", "Frank Darabont", "2h 22min", 142, 45,"Condamné à perpétuité pour le meurtre de sa femme et de son amant, un banquier s'accroche à l'espoir et se lie d'amitié avec un autre détenu pour survivre en prison.", "./img/Les Evadés.jpg", 2018)
]

console.log(movies.length)


let addfilm="";

for (let movie of movies){
    
    toHourFilm=""
    toHourFilm=Math.floor(movie.timeWatchedMinute/60)+"h"+(movie.timeWatchedMinute%60)+"min";
    

    addfilm +=
    `<div class="col-sm-12 col-md-4 card mx-auto mb-5" style="width:25em">
    <img src="${movie.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.description}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"> Réalisateur: ${movie.filmMaker}</li>
    <li class="list-group-item">Duration: ${toHourFilm} 
     <i class="bi bi-play-circle ps-5"></i>    Temps regardé: ${movie.view}  </li>
    <li class="list-group-item"> Visonné: ${Math.floor((movie.view/movie.timeWatchedMinute)*100)}%</li>
    <li class="list-group-item">Année: ${movie.years}</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link-play btn btn-secondary text-decoration-none text-light">Regarder</a>
        <a href="#" class="card-link  btn btn-secondary text-decoration-none text-light">Télécharger</a>
    </div>    
</div>`
    // function toHourFilm(minutes){
    //     return (Math.floor(minutes/60)+"h"+(minutes%60)+"min");
    // }
    // toHourFilm(movie.timeWatchedMinute)
    // console.log(toHourFilm(movie.timeWatchedMinute))

}


document.getElementById("parent").innerHTML=addfilm 

// let url= new URL ('https://myvideotheque.fr/search');
// let url1= new URL('tester', url);


const movie = new URLSearchParams(window.location.search).get('la_ligne_verte');
      






// let i=0
// let sum = 0
// while ( i<movies.lenght){
//     sum+=movies.view
// }
// console.log(sum);


// let totalView= 0
// while (i<movie.length){
//     totalView+=movie.view
//     movie.view++
// }
// console.log(total.view) 

// let injectContent= document.getElementById("totalvu");
// injectContent.innerHTML = `Vous avez regardé ${} % dans votre vodéothèque`;

const titleH1 = document.getElementById("titre");
 
titleH1.style.color = "black";
 
titleH1.style.fontWeight = "bold";
 
const changeStyle = document.getElementById("changeStyle");
 
 changeStyle.style.background = "white";
// let hourfilm = movies.timeWatchedMinute;
// let result = 0;
//  if (hourfilm>=60){
//     result=Math.fllor(hourfilm/60) +"h" + (minutes%60) +"min";
//  }else{
//     result=hourfilm;
//  }
 


