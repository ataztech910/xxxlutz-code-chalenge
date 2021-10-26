import { IFurnitureItem } from "../../types/interfaces/IFurnitureItem";
import {ICatalogActionType } from "../../types/interfaces/ICatalogActionType";
import { CATALOG_ACTION_NAMES } from "../../types/CatalogTypes";
import {ISorting} from "../../types/interfaces/ISorting";

export const setCatalogAction = (catalog: Array<IFurnitureItem>): ICatalogActionType => {
    return {
        type: CATALOG_ACTION_NAMES.SET_CATALOG,
        payload: catalog
    };
};

export const setSetSearchStringAction = (searchString: string): ICatalogActionType => {
    return {
        type: CATALOG_ACTION_NAMES.SET_SEARCH_STRING,
        payload: searchString
    };
};

export const setSortingValueAction = (sortingValue: ISorting): ICatalogActionType => {
    return {
        type: CATALOG_ACTION_NAMES.SET_SORTING_VALUE,
        payload: sortingValue
    };
};

