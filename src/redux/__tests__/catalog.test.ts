import { ICatalogState } from "../../types/interfaces/ICatalogState";
import { initCatalogState } from "../store/initCatalogState";
import { catalogReducer } from "../reducers/CatalogReducer";
import { CATALOG_ACTION_NAMES } from "../../types/CatalogTypes";
import { IFurnitureItem } from "../../types/interfaces/IFurnitureItem";
import { mockCatalog } from "../../__tests__/mock";

let initialCatalog: ICatalogState;
let mockArray: Array<IFurnitureItem> = [];
beforeEach( () => {
    initialCatalog = initCatalogState();
    mockArray = mockCatalog;
});

test('set catalog action should fill the catalog array', () => {
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
