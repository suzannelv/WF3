const monFilm = new URLSearchParams(window.location.search).get("id")
console.log(monFilm);
console.log(movies);

const rechercheId = (movie)=>{
    return movie._id == monFilm;
}
console.log(movies.find(rechercheId));