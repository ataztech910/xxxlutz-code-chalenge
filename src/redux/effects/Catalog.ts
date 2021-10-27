import { Dispatch } from "redux";
import { ICatalogActionType } from "../../types/interfaces/ICatalogActionType";
import { IFurnitureItem } from "../../types/interfaces/IFurnitureItem";
import { setCatalogAction, setSortingValueAction } from "../actions/CatalogActions";
import { sortArray } from "../../utils/sortArray";

export const setCatalog = () => {
    return async function (dispatch: Dispatch<ICatalogActionType>) {
        const { REACT_APP_CATALOG_JSON } = process.env;
        try {
            await fetch(`${REACT_APP_CATALOG_JSON}`)
                .then(res => res.json())
                .then(result => {
                    dispatch(setSortingValueAction({
                        key: "priceAsc",
                        direction: "asc",
                    }));
                    result.map((item: IFurnitureItem) => {
                        if (item.eyecatcher !== null) {
                            const priceBuffer = Number(item.price);
                            item.price =  Number(item.priceSale);
                            item.priceSale = priceBuffer;
                        }
                    });
                    const sorted = sortArray(result, "price", "asc");
                    dispatch(setCatalogAction(sorted));
                });
        } catch (e) {}
    };
};
