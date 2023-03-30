import { FilmsItemModel } from "./FilmsItemModel";

export type FilmsModel = {
    total: number;
    totalPages: number;
    items: FilmsItemModel[];
};
