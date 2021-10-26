import { IFurnitureItem } from "./IFurnitureItem";
import { ISorting } from "./ISorting";
import { CATALOG_ACTION_NAMES } from "../CatalogTypes";

export interface ICatalogActionType {
    type: keyof typeof CATALOG_ACTION_NAMES;
    payload: Array<IFurnitureItem> | ISorting | string;
}
