import { FilmsItemModel } from "../../models/FilmsItemModel";

export const initialFilmsState = {
    data: {
        total: 0,
        totalPages: 0,
        items: [] as FilmsItemModel[]
    },
    filters: {
        order: "RATING",
        type: "ALL",
        ratingFrom: 1
    },
    keyWords: "",
    currentPage: 1
};
