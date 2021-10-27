import {ICatalogState} from "../../types/interfaces/ICatalogState";

export const initCatalogState = (): ICatalogState => {
    return {
        itemsList: [],
        sort: {},
        searchValue: "",
    };
};
