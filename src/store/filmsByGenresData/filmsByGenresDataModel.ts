import { FilmsItemModel } from "../../models/FilmsItemModel";

export const initialFilmsByGenresState = {
    data: {
        total: 0,
        totalPages: 0,
        items: [] as FilmsItemModel[]
    },
    filters: {
        order: "RATING",
        type: "ALL",
        ratingFrom: 1,
        ratingTo: 10
    },
    currentPage: 1
};
