import { BestFilmsItemModel } from "../../models/BestFilmsItemModel";

export const initialBestFilmsState = {
    data: {
        pagesCount: 0,
        films: [] as BestFilmsItemModel[]
    },
    currentPage: 1
};
