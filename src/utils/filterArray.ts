import { IFurnitureItem } from "../types/interfaces/IFurnitureItem";

export const filterArray = (array: Array<IFurnitureItem>, searchValue: string) => {
    return array.filter((item: IFurnitureItem) =>
        item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        item.brand.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
}
