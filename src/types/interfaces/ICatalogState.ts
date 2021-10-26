import { IFurnitureItem } from "./IFurnitureItem";
import { ISorting } from "./ISorting";

export interface ICatalogState {
  itemsList: Array<IFurnitureItem>;
  sort: ISorting;
  searchValue: string;
}
