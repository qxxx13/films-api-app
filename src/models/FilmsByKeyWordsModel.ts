import { BestFilmsItemModel } from "./BestFilmsItemModel";

export type FilmsByKeyWordsModel = {
    keyword: string;
    pagesCount: number;
    searchFilmsCountResult: number;
    films: BestFilmsItemModel[];
};
