export type BestFilmsItemModel = {
    countries: [{ country: string }];
    filmId: number;
    filmLength: string;
    genres: [{ genre: string }];
    nameEn: string;
    nameRu: string;
    posterUrl: string;
    posterUrlPreview: string;
    rating: string;
    ratingChange: null;
    ratingVoteCount: number;
    year: string;
};
