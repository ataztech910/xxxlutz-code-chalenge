import { useSelector } from "react-redux";
import { StyledProductSorting } from "../ui/styled/StyledProductSorting";
import { ProductItem } from "./ProductItem";
import { IFurnitureItem } from "../types/interfaces/IFurnitureItem";
import { StyledProductCount } from "../ui/styled/StyledProductCount";
import { StyledProductFlexLayouts } from "./styled/StyledProductFlexLayouts";
import { StyledProductGridLayouts } from "./styled/StyledProductGridLayouts";
import { makeUID } from "../utils/makeUID";
import { sortArray } from "../utils/sortArray";

export const ProductList = ({ className } : Partial<any>) => {
    const itemsList = useSelector((state: Partial<any>) => state.catalog.itemsList);
    const sort = useSelector((state: Partial<any>) => state.catalog.sort);
    const sortKey = sort.key && sort.key.toLocaleLowerCase().includes("price")? "price" : sort.key;
    let itemsMutableList = sortKey ? sortArray(itemsList, sortKey, sort.direction) : itemsList;

    return (
        <div className={ className }>
            <StyledProductFlexLayouts alignItems="center">
                <StyledProductCount itemsCount={itemsMutableList.length} />
                <StyledProductSorting />
            </StyledProductFlexLayouts>
            <StyledProductGridLayouts>
                {
                    itemsMutableList && itemsMutableList.length > 0 && itemsMutableList.map((item: IFurnitureItem) =>
                        <ProductItem item={item} key={makeUID(6)}/>
                    )
                }
            </StyledProductGridLayouts>
        </div>
    );
};
