let elList = document.querySelector('.list');
let elForm = document.querySelector('.form');;
let elInputTitle = document.querySelector('.input__title');
let elInputOverview = document.querySelector('.input__overview');
let elInputGenres = document.querySelector('.input__genres');
let elInputUrl = document.querySelector('.input__url');
let elBtn = document.querySelector('.form__btn');


  


function normalizeDate (dateFormat) {

    let date = new Date (dateFormat);
    let day = String(date.getDate()).padStart(2, 0);
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let year = String(date.getFullYear()).padStart(2, 0);

    return (day + '.' + month + '.' + year);
}

function filmRender (movies, renderList) {
    for (let i = 0; i < movies.length; i++) {
        let elem = films[i];

        let newLi = document.createElement('li');
        let newHeading = document.createElement('h3');
        let newImg = document.createElement('img');
        let newGenre = document.createElement('p');
        let newTime = document.createElement('time');
        let newText = document.createElement('p');
        let newUl = document.createElement('Ul');

        newLi.setAttribute('class', 'list__item');
        newImg.setAttribute('width', 300);
        newImg.setAttribute('height', 250);
        newImg.setAttribute('alt', 'render__img');
        newTime.setAttribute('class', 'film__time');
        newUl.setAttribute('class', 'newUlList');

        newHeading.textContent = elem.title;
        newImg.src = elem.poster;
        newGenre.textContent = elem.overview
        newTime.textContent = normalizeDate(films[i].release_date)
        newText.textContent = films[i].genres.join(',')


        for (let j = 0; j < films[i].genres.length; j++) {
            let newGenreLi = document.createElement('li');
            newGenreLi.textContent = films[i].genres[j];
            newUl.appendChild(newGenreLi)
        }


        newLi.appendChild(newImg)
        newLi.appendChild(newHeading)
        newLi.appendChild(newGenre)
        newLi.appendChild(newTime)
        newLi.appendChild(newUl)


        renderList.appendChild(newLi)
    }

}
filmRender(films, elList)

function dataMovie(title, overview, genres, poster, movies) {
    var newMovieTitle = title.value.trim();
    var newMovieOverview = overview.value.trim();
    var newMovieGenres = genres.value.trim().split(" ");
    var newMoviePoster = poster.value.trim();
  
    var newMovie = {
      title: newMovieTitle,
      poster: newMoviePoster,
      overview: newMovieOverview,
      genres: newMovieGenres,
    };
  
    movies.unshift(newMovie);
  }
  
  var renderDataMovie = function (e) {
    e.preventDefault();
  
    dataMovie(
        elInputTitle,
        elInputOverview,
        elInputGenres,
        elInputUrl,
        films
    );
    filmRender(films, elList)
    console.log('ok');
  };

  filmRender(films, elList)
  
  
  elBtn.addEventListener("click", renderDataMovie);

  console.log(films);