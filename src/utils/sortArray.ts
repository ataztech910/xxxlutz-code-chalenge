import { IFurnitureItem } from "../types/interfaces/IFurnitureItem";

export const sortArray = (array: Array<IFurnitureItem>, key: "price" | "name" | "eyecatcher", direction: string): Array<IFurnitureItem> => {
    const sorted = [...array];
    // @ts-ignore we should be sure that key is in the object
    direction === "asc" ? sorted.sort((a,b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)) :
    // @ts-ignore we should be sure that key is in the object
    sorted.sort((a,b) => (a[key] < b[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0));
    return sorted;
}
