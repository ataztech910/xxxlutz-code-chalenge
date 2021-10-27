import { StyledProductCard } from "../ui/styled/StyledProductCard";
import { StyledProductImage } from "../ui/styled/StyledProductImage";
import { StyledProductName } from "../ui/styled/StyledProductName";
import { StyledProductPrice } from "../ui/styled/StyledProductPrice";
import { IFurnitureItem } from "../types/interfaces/IFurnitureItem";
import { StyledProductFlexLayouts } from "./styled/StyledProductFlexLayouts";
import { StyledProductBrand } from "../ui/styled/StyledProductBrand";

export const ProductItem = ({ item } : { item: IFurnitureItem }) => {
    return (
        <>
            <StyledProductCard url={item.url}>
                <StyledProductImage
                    image={item.image}
                    title={item.name}
                    isSale={!!item.eyecatcher}
                    id={item.id} />
                <StyledProductBrand name={item.brand}/>
                <StyledProductFlexLayouts>
                    <StyledProductName name={item.name} />
                    <StyledProductPrice isSale={!!item.eyecatcher} price={item.price} previousPrice={item.priceSale} />
                </StyledProductFlexLayouts>
            </StyledProductCard>
        </>
    );
};
