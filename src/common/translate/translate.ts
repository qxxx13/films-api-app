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
    YEAR: "Год выпуска",
    filmLength: "Длина фильма",
    startYear: "Год начала выпуска",
    endYear: "Год окончания выпуска",
    shortFilm: "Короткометражный фильм",
    completed: "Завершен",
    hasImax: "Поддержка Imax",
    has3D: "Поддержка 3D",
    VIDEO: "Видео",
    //?text
    notFound: `По вашему запросу ничего не найдено. Проверьте ваш поисковой запрос и сортировку`,
    search: "Поиск",
    bestFilms: "Лучшие фильмы",
    order: "Порядок",
    type: "Тип",
    ratingFrom: "Минимальный рейтинг",
    sort: "Сортировать",
    RATING: "Рейтинг",
    NUM_VOTE: "Кол-во голосов",
    ALL: "Все",
    FILM: "Фильм",
    TV_SHOW: "Тв-шоу",
    TV_SERIES: "Тв-сериал",
    MINI_SERIES: "Мини-сериал",
    watchOnKinopoisk: "Смотреть на Kinopoisk"
};

export const translate = (key: string) => {
    return dictionary[key] || key;
};
