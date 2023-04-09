const dictionary: Record<string, string> = {
    reviewsCount: "Количество отзывов",
    ratingGoodReview: "Рейтинг Good Review",
    ratingGoodReviewVoteCount: "Количество голосов на Good Review",
    ratingKinopoisk: "Рейтинг kinopoisk",
    ratingKinopoiskVoteCount: "Количество голосов на kinopoisk",
    ratingImdb: "Рейтинг Imdb",
    ratingImdbVoteCount: "Количество голосов на Imdb",
    ratingFilmCritics: "Оценки критиков",
    ratingFilmCriticsVoteCount: "Количество критиков",
    ratingAwaitCount: "Ожидает подсчет количества",
    ratingRfCriticsVoteCount: "Оценки Российских критиков",
    year: "Год выпуска",
    filmLength: "Длина фильма",
    ratingAwait: "Ожидает подсчет",
    startYear: "Год начала выпуска",
    endYear: "Год окончания выпуска"
};

export const translate = (key: string) => {
    return dictionary[key] || key;
};
