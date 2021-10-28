import { ICatalogState } from "../../types/interfaces/ICatalogState";
import { initCatalogState } from "../store/initCatalogState";
import { catalogReducer } from "../reducers/CatalogReducer";
import { CATALOG_ACTION_NAMES } from "../../types/CatalogTypes";
import { IFurnitureItem } from "../../types/interfaces/IFurnitureItem";
import { mockCatalog } from "../../mock";
import { ISorting } from "../../types/interfaces/ISorting";

let initialCatalog: ICatalogState;
let mockArray: Array<IFurnitureItem> = [];
beforeEach( () => {
    initialCatalog = initCatalogState();
    mockArray = mockCatalog;
});

test('should fill the catalog array', () => {
    const action = {
        type : CATALOG_ACTION_NAMES.SET_CATALOG,
        payload: mockArray
    }
    expect(catalogReducer(initialCatalog, action)).toEqual({
        itemsList: mockArray,
        sort: {},
        searchValue: ""
    });
});

test('should set search value', () => {
    const action = {
        type : CATALOG_ACTION_NAMES.SET_SEARCH_STRING,
        payload: "test string"
    }
    expect(catalogReducer(initialCatalog, action)).toEqual({
        itemsList: [],
        sort: {},
        searchValue: "test string"
    });
});

test('should set search value', () => {
    const action = {
        type : CATALOG_ACTION_NAMES.SET_SORTING_VALUE,
        payload: {
            key: "priceAsc",
            direction: "asc",
        } as ISorting
    };

    expect(catalogReducer(initialCatalog, action)).toEqual({
        itemsList: [],
        sort: {
            key: "priceAsc",
            direction: "asc",
        },
        searchValue: ""
    });
});
