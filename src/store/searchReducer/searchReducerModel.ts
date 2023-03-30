import { BestFilmsItemModel } from "../../models/BestFilmsItemModel";

export const initialSearchState = {
    data: {
        keyword: "",
        pagesCount: 1,
        searchFilmsCountResult: 1,
        films: [] as BestFilmsItemModel[]
    },
    currentPage: 1
};
