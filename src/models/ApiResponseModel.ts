import { ApiItemModel } from "./ApiItemModel";

export type ApiResponseModel = {
    total: number;
    totalPages: number;
    items: ApiItemModel[];
};
