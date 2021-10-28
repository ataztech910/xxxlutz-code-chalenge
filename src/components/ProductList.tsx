import { useSelector } from "react-redux";
import { StyledProductSorting } from "../ui/styled/StyledProductSorting";
import { ProductItem } from "./ProductItem";
import { IFurnitureItem } from "../types/interfaces/IFurnitureItem";
import { StyledProductCount } from "../ui/styled/StyledProductCount";
import { StyledProductFlexLayouts } from "./styled/StyledProductFlexLayouts";
import { StyledProductGridLayouts } from "./styled/StyledProductGridLayouts";
import { makeUID } from "../utils/makeUID";
import { sortArray } from "../utils/sortArray";
import { StyledProductFilter } from "./styled/StyledProductFilter";
import { getValueByLanguage } from "../utils/getValueByLanguage";
import { filterArray } from "../utils/filterArray";

export const ProductList = ({ className } : Partial<any>) => {
    const { REACT_APP_LANG } = process.env;
    const itemsList = useSelector((state: Partial<any>) => state.catalog.itemsList);
    const sort = useSelector((state: Partial<any>) => state.catalog.sort);
    const searchValue = useSelector((state: Partial<any>) => state.catalog.searchValue);
    const sortKey = sort.key && sort.key.toLocaleLowerCase().includes("price")? "price" : sort.key;
    let itemsMutableList = [...itemsList];
    if (searchValue.length >= 2) {
        itemsMutableList = filterArray(itemsMutableList, searchValue);
    }
    itemsMutableList = sortKey ? sortArray(itemsMutableList, sortKey, sort.direction) : itemsMutableList;

    return (
        <div className={ className }>
            <StyledProductFlexLayouts alignItems="center">
                <StyledProductCount itemsCount={itemsMutableList.length} />
                <StyledProductFilter />
                <StyledProductSorting />
            </StyledProductFlexLayouts>
            <StyledProductGridLayouts>
                {
                    itemsMutableList && itemsMutableList.length > 0 && itemsMutableList.map((item: IFurnitureItem) =>
                        <ProductItem item={item} key={makeUID(6)}/>
                    )
                }
            </StyledProductGridLayouts>
            {
                (!itemsMutableList || itemsMutableList.length === 0) &&
                <div role="card">{ getValueByLanguage("noValue", REACT_APP_LANG) }</div>
            }
        </div>
    );
};
