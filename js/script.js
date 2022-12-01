'use strict';

const movies = [];

movies[0] = {
    name: 'Добыча',
    genre: 'Триллеры',
    year: 2022,
    age: '18+',
    desc: 'Север Великих равнин. Девушка Нару из племени команчей больше всего на свете хочет стать достойной охотницей, но близкие не воспринимают её увлечение всерьёз. Когда отряд бывалых охотников идёт в лес на поиски атакованного пумой соплеменника, Нару как опытный следопыт отправляется с ними и вскоре замечает странные следы...',
    rating: 6.6,
    pic: '../img/prey.jpg',

    valueGenre: 'thriller',
    valueYear: '2022',
    id: 0,
    trailer: 'https://www.youtube.com/embed/pP4e3qPyFQM'
};

movies[1] = {
    name: 'Никто',
    genre: 'Боевики',
    year: 2021,
    age: '18+',
    desc: 'Cемьянин Хатч живёт жизнью обычного аудитора, пока в его дом не вламываются грабители. И это бы сошло им с рук, если бы они не забрали браслетик его маленькой дочки. Не в силах это терпеть, Хатч отправляется на поиски наглецов, а на обратном пути ввязывается в драку с пьяными хулиганами.',
    rating: 7.4,
    pic: '../img/nobody.jpg',

    valueGenre: 'action',
    valueYear: '2021',
    id: 1,
    trailer: 'https://www.youtube.com/embed/bZOHmDYCo2I'
};

movies[2] =  {
    name: 'Красное уведомление',
    genre: 'Комедии',
    year: 2021,
    age: '12+',
    desc: 'Более двух тысяч лет назад влюблённый в Клеопатру древнеримский генерал Марк Антоний подарил ей три яйца, украшенные золотом и драгоценными камнями. В начале XX века не были обнаружены две из них: теперь одно яйцо выставляется в музее Рима, другое содержится в частной коллекции, а местонахождение третьего неизвестно.',
    rating: 6.5,
    pic: '../img/red.jpg',

    valueGenre: 'comedy',
    valueYear: '2021',
    id: 2,
    trailer: 'https://www.youtube.com/embed/a4Yur6CsRz4'
};

movies[3] = {
    name: 'Охотник на монстров',
    genre: 'Фэнтези',
    year: 2020,
    age: '16+',
    desc: 'Параллельно нашему миру существует иной — мир, где правят крайне опасные и наделенные невероятной силой монстры. Именно сюда через пространственный портал попадают капитан Артемис и ее отряд элитных бойцов. И теперь им предстоит проверить себя на прочность перед лицом невиданной ранее угрозы.',
    rating: 5.8,
    pic: '../img/monsterHunter.jpg',

    valueGenre: 'fantasy',
    valueYear: '2020',
    id: 3,
    trailer: 'https://www.youtube.com/embed/JNQjVWLgOw4'
};

movies[4] = {
    name: 'Клоун',
    genre: 'Хорроры',
    year: 2014,
    age: '18+',
    desc: 'Любящий отец специально для дня рождения сына находит костюм клоуна, надевает его и выступает на празднике к радости детей. Но он и не подозревал, что снять клоунские одежды окажется не так просто - на костюм наложено проклятие, которое превращает его владельца в адского пожирателя детей.',
    rating: 5.3,
    pic: '../img/clown.jpg',

    valueGenre: 'horror',
    valueYear: '2014-2010',
    id: 4,
    trailer: 'https://www.youtube.com/embed/zldqxkd44u4'
};

movies[5] = {
    name: 'Капернаум',
    genre: 'Драмы',
    year: 2018,
    age: '18+',
    desc: '12-летний Зейн не может точно ответить на вопрос, сколько у него братьев и сестер, но уверен, что детей в его семье должно было быть меньше. Несмотря на юный возраст, Зейн нелегально работает, следит за младшими, помогает старшим, ищет деньги и документы на эмиграцию в Швецию. Он смотрит на мир с нескрываемой ненавистью.',
    rating: 8.1,
    pic: '../img/kap.jpg',

    valueGenre: 'drama',
    valueYear: '2018',
    id: 5,
    trailer: 'https://www.youtube.com/embed/pMfwm3mBFDM'
};

movies[6] = {
    name: 'Бладшот',
    genre: 'Боевики',
    year: 2020,
    age: '16+',
    desc: 'Военный Рэй Гаррисон возвращается из очередной горячей точки к любимой красавице-жене. Супруги проводят отпуск в Европе, но счастье длится недолго — террористы, не сумев вытянуть из Рэя нужную им информацию, убивают жену, а затем и его самого.  Но вскоре корпорация RST возвращает его к жизни.',
    rating: 5.8,
    pic: '../img/blood.jpg',

    valueGenre: 'action',
    valueYear: '2020',
    id: 6,
    trailer: 'https://www.youtube.com/embed/svubabeEoYY'
};

movies[7] = {
    name: 'Шазам!',
    genre: 'Фэнтези',
    year: 2019,
    age: '12+',
    desc: 'Благодаря древнему волшебнику 14-летний парень превращается во вполне себе взрослого супергероя Шазама. В душе он остается ребенком, поэтому ведёт себя соответствующе и оттягивается на полную катушку. Шазам проверяет границы своих возможностей с бесшабашностью ребенка.',
    rating: 6.7,
    pic: '../img/shazam.jpg',

    valueGenre: 'fantasy',
    valueYear: '2019',
    id: 7,
    trailer: 'https://www.youtube.com/embed/rvJdxDjn6nI'
};

movies[8] = {
    name: 'Календарь дьявола',
    genre: 'Хорроры',
    year: 2020,
    age: '18+',
    desc: 'Бывшая танцовщица Ева прикована к инвалидному креслу. Однажды подруга дарит ей на день рождения старинный деревянный календарь похожий на маленький комод. Оказывается, что за каждой дверцей календаря, которые нужно открывать в соответствующие числа месяца, лежит волшебная конфета — исполнение желания.',
    rating: 6.3,
    pic: '../img/calendar.jpg',

    valueGenre: 'horror',
    valueYear: '2020',
    id: 8,
    trailer: 'https://www.youtube.com/embed/XZzd5aFQxx4'
};

movies[9] = {
    name: 'Маленькие Женщины',
    genre: 'Мелодрамы',
    year: 2019,
    age: '16+',
    desc: 'История взросления четырёх непохожих друг на друга сестер. Где-то бушует Гражданская война, но проблемы, с которыми сталкиваются девушки, актуальны как никогда: первая любовь, горькое разочарование, томительная разлука и непростые поиски себя и своего места в жизни.',
    rating: 7.8,
    pic: '../img/women.jpg',

    valueGenre: 'soapOpera',
    valueYear: '2019',
    id: 9,
    trailer: 'https://www.youtube.com/embed/SnwKCS6kkvE'
};

let filteredByAll = [];
let filteredByAllReserve = [];
let sortedByAll;


let cardsPlace = document.querySelector('.cards');

let cardLink = document.createElement('a');
cardLink.href = './page.html?=0'
cardLink.classList.add('cards__link');

let card = document.createElement('div');
card.classList.add('cards__card');

let cardImg = document.createElement('img');
cardImg.src = 'img/monsterHunter.jpg';
cardImg.classList.add('cards__img');
cardImg.alt = 'poster'

let cardsInfo = document.createElement('div');
cardsInfo.classList.add('cards__info');
let name = document.createElement('h1');
name.classList.add('cards__name');
let genre = document.createElement('p');
genre.classList.add('cards__genre');

let otherInfo = document.createElement('div');
otherInfo.classList.add('cards__otherInfo')
let year = document.createElement('p');
year.classList.add('cards__year');
let age = document.createElement('p');
age.classList.add('cards__age');


let rating = document.createElement('div');
rating.classList.add('cards__rating');
let ratingText = document.createElement('p');
ratingText.classList.add('cards__ratingText');
let ratingNum = document.createElement('p');
ratingNum.classList.add('cards__ratingNum');


let getName;
let getGenre;
let getYear;
let getAge;
let getDesc;
let getRating;
let getRatingText;
let getPic;
let getCards;
let getLink;


let getAllInfo = () => {
    getName = document.querySelectorAll('.cards__name');
    getGenre = document.querySelectorAll('.cards__genre');
    getYear = document.querySelectorAll('.cards__year');
    getAge = document.querySelectorAll('.cards__age');
    getDesc = document.querySelectorAll('.cards__desc');
    getRating = document.querySelectorAll('.cards__ratingNum');
    getRatingText = document.querySelectorAll('.cards__ratingText');
    getPic = document.querySelectorAll('.cards__img');
    getCards = document.querySelectorAll('.cards__card');
    getLink = document.querySelectorAll('.cards__link');
}

let cardsCreate = () => {
    cardLink.appendChild(cardImg.cloneNode(cardImg));

    cardsInfo.appendChild(name.cloneNode(name));
    cardsInfo.appendChild(genre.cloneNode(genre));

    otherInfo.appendChild(year.cloneNode(year));
    otherInfo.appendChild(age.cloneNode(age));
    cardsInfo.appendChild(otherInfo.cloneNode(otherInfo));

    rating.appendChild(ratingText.cloneNode(ratingText));
    rating.appendChild(ratingNum.cloneNode(ratingNum))
    cardsInfo.appendChild(rating.cloneNode(rating));

    cardLink.appendChild(cardsInfo.cloneNode(cardsInfo));

    card.appendChild(cardLink.cloneNode(cardLink));
}

let filter = () => {
    sortedByAll = movies.filter(function (elem) {
        if (elem.valueYear === document.getElementById('year').value
            || elem.valueGenre === document.getElementById('genre').value) {
            filteredByAll[filteredByAll.length] = elem;
        }
    })
}

// let filterGenreNull = () => {
//     sortedByAll = movies.filter(function (elem) {
//         if (elem.valueYear === document.getElementById('year').value) {
//             filteredByAll[filteredByAll.length] = elem;
//         }
//     })
// }
// let filterYearNull = () => {
//     sortedByAll = movies.filter(function (elem) {
//         if (elem.valueGenre === document.getElementById('genre').value) {
//             filteredByAll[filteredByAll.length] = elem;
//         }
//     })
// }

let sortArr = (arr) => {
    getAllInfo();

    for (let i = 0; i < arr.length; i++) {
        cardsPlace.appendChild(card.cloneNode(card));
    }

    getAllInfo();

    for (let i = 0; i < arr.length; i++) {
        getName[i].innerHTML = arr[i].name;
        getGenre[i].innerHTML = arr[i].genre;
        getYear[i].innerHTML = arr[i].year;
        getAge[i].innerHTML = arr[i].age;
        getRating[i].innerHTML = arr[i].rating;
        getRatingText[i].innerHTML = 'Рейтинг: ';
        getPic[i].src = arr[i].pic;
        getLink[i].href = `./page.html?=${arr[i].id}`
    }

    getAllInfo();

    if (getCards.length !== filteredByAll) {
        for (let i = filteredByAll.length; i < getCards.length; i++) {
            getCards[i].remove();
        }
    }
    console.log(filteredByAll);
    filteredByAll.splice(0, filteredByAll.length);
}

let resetFunc = () => {
    document.getElementById('year').value = 'null';
    document.getElementById('genre').value = 'null';
    filteredByAll.splice(0, filteredByAll.length);
    filteredByAll.push.apply(filteredByAll, movies);
    sortArr(filteredByAll);
    console.log('ev');
}

let genreSelect = document.querySelector('.filter__genre');
genreSelect.addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'null':
            getAllInfo();
            filter();
            sortArr(filteredByAll);
            break
        default:
            getAllInfo();
            filter();
            sortArr(filteredByAll);
    }
});

let yearSelect = document.querySelector('.filter__year');
yearSelect.addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'null':
            getAllInfo();
            filter();
            sortArr(filteredByAll);
            break
        default:
            getAllInfo();
            filter();
            sortArr(filteredByAll);
    }
});

let resetButton = document.querySelector('.filter__reset');
resetButton.addEventListener('onclick', (event) => {
    resetFunc();
})


cardsCreate();
filteredByAll.push.apply(filteredByAll, movies);
sortArr(filteredByAll);
