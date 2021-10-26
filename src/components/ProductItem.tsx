import { StyledProductCard } from "../ui/styled/StyledProductCard";
import { StyledProductImage } from "../ui/styled/StyledProductImage";
import { StyledProductName } from "../ui/styled/StyledProductName";
import { StyledProductPrice } from "../ui/styled/StyledProductPrice";
import { IFurnitureItem } from "../types/interfaces/IFurnitureItem";
import { StyledProductFlexLayouts } from "./styled/StyledProductFlexLayouts";

export const ProductItem = ({ item } : { item: IFurnitureItem }) => {
    return (
        <>
            <StyledProductCard>
                <StyledProductImage image={item.image} title={item.name} isSale={!!item.eyecatcher} />
                <StyledProductFlexLayouts>
                    <StyledProductName name={item.name} categoryName={item.brand} />
                    <StyledProductPrice price={item.priceSale} previousPrice={item.price} />
                </StyledProductFlexLayouts>
            </StyledProductCard>
        </>
    );
};
