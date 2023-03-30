import { FilmsItemModel } from "../../models/FilmsItemModel";

export const initialFilmsState = {
    data: {
        total: 0,
        totalPages: 0,
        items: [] as FilmsItemModel[]
    },
    currentPage: 1
};
