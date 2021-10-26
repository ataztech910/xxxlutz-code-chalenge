import { CATALOG_ACTION_NAMES } from "../../types/CatalogTypes";
import { ICatalogState } from "../../types/interfaces/ICatalogState";
import { ICatalogActionType } from "../../types/interfaces/ICatalogActionType";
import { initCatalogState } from "../store/initCatalogState";

const initialStateCatalog: ICatalogState = initCatalogState();

export const catalogReducer = (
    state = initialStateCatalog,
    action: ICatalogActionType
) => {
    switch (action.type) {
        case CATALOG_ACTION_NAMES.SET_CATALOG:
            return {
                ...state,
                itemsList: action.payload
            };

        case CATALOG_ACTION_NAMES.SET_SEARCH_STRING:
            return {
                ...state,
                searchValue: action.payload
            };

        case CATALOG_ACTION_NAMES.SET_SORTING_VALUE:
            return {
                ...state,
                sort: action.payload
            };
        default:
            return state;
    }
}
