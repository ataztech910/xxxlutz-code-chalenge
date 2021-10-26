import { useSelector } from "react-redux";
import { StyledProductSorting } from "../ui/styled/StyledProductSorting";
import { ProductItem } from "./ProductItem";
import { IFurnitureItem } from "../types/interfaces/IFurnitureItem";
import { StyledProductCount } from "../ui/styled/StyledProductCount";
import { StyledProductFlexLayouts } from "./styled/StyledProductFlexLayouts";
import {StyledProductGridLayouts} from "./styled/StyledProductGridLayouts";

export const ProductList = ({ className } : Partial<any>) => {
    const items = useSelector((state: Partial<any>) => state.catalog.itemsList);

    return (
        <div className={ className }>
            <div>
                <StyledProductFlexLayouts>
                    <StyledProductCount itemsCount={items.length} />
                    <StyledProductSorting />
                </StyledProductFlexLayouts>
                <StyledProductGridLayouts>
                    {
                        items && items.length > 0 && items.map((item: IFurnitureItem) =>
                            <ProductItem item={item} key={item.name}/>
                        )
                    }
                </StyledProductGridLayouts>
            </div>
        </div>
    );
};
