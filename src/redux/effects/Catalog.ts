import { Dispatch } from "redux";
import { ICatalogActionType } from "../../types/interfaces/ICatalogActionType";
import { IFurnitureItem } from "../../types/interfaces/IFurnitureItem";
import { setCatalogAction } from "../actions/CatalogActions";

export const setCatalog = (catalogItems: Array<IFurnitureItem>) => {
    return function (dispatch: Dispatch<ICatalogActionType>) {
        dispatch(setCatalogAction(catalogItems));
    };
};
