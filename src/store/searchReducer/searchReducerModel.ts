import { BestFilmsItemModel } from "../../models/BestFilmsItemModel";

export const initialSearchState = {
    keyWords: "",
    films: [] as BestFilmsItemModel[],
    pagesCount: 1,
    currentPage: 1
};
