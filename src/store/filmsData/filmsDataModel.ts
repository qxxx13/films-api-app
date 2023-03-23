import { ApiItemModel } from "../../models/ApiItemModel";

export const initialFilmsState = {
    data: {
        total: 0,
        totalPages: 0,
        items: [] as ApiItemModel[]
    },
    isLoading: false,
    page: 1
};
