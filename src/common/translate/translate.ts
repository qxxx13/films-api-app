const dictionary: Record<string, string> = {
    ratingGoodReview: "Рейтинг Good Review",
    ratingGoodReviewVoteCount: "Количество голосов на Good Review",
    ratingKinopoisk: "Рейтинг Kinopoisk",
    ratingKinopoiskVoteCount: "Количество голосов на Kinopoisk",
    ratingImdb: "Рейтинг IMDb",
    ratingImdbVoteCount: "Количество голосов на IMDb",
    ratingFilmCritics: "Оценки критиков",
    ratingFilmCriticsVoteCount: "Количество критиков",
    year: "Год выпуска",
    filmLength: "Длина фильма",
    //?text
    notFound: `По вашему запросу ничего не найдено. Проверьте ваш поисковой запрос и сортировку`,
    search: "Поиск",
    bestFilms: "Лучшие фильмы",
    order: "Порядок",
    type: "Тип",
    ratingFrom: "Минимальный рейтинг",
    sort: "Сортировать",
    rating: "Рейтинг",
    voteCount: "Кол-во голосов",
    all: "Все",
    film: "Фильм",
    tvShow: "Тв-шоу",
    tvSerial: "Тв-сериал",
    miniSerial: "Мини-сериал"
};

export const translate = (key: string) => {
    return dictionary[key] || key;
};
