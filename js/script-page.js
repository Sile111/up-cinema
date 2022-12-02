'use strict';

let pagePlace = document.querySelector('.page');

let currentPage = window.location.href.toString();

for (let i = 0; i < movies.length; i++) {
    if (i === +currentPage.substr(currentPage.length - 1)) {
        pagePlace.innerHTML += ` <img src=${movies[i].pic} alt="poster" class="page__img">
                <div class="page__infoWrapper">
                    <div class="page__titleWrapper">
                        <h1 class="page__title">${movies[i].name}</h1>
                        <p class="page__genre">${movies[i].genre}</p>
                    </div>
                    <p class="page__year">Год выпуска: ${movies[i].year}</p>
                    <p class="page__age">${movies[i].age}</p>
                    <p class="page__desc">${movies[i].desc}</p>
                    <p class="page__rating">Рейтинг: ${movies[i].rating}</p>
                    <iframe width="560" height="315"
                    src=${movies[i].trailer} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen class="page__trailer"></iframe>
                </div>`;
    }
}

