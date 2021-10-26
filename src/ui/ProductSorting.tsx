import { getValueByLanguage } from "../utils/getValueByLanguage";
import { useSelector } from "react-redux";
import { possibleSortingArray } from "../utils/possibleSortingArray";

export const ProductSorting = ({className} : Partial<any>) => {
    const { REACT_APP_LANG } = process.env;
    const currentSorting = useSelector((state: Partial<any>) => state.catalog.sort);
    return (
        <div className={ className }>
            <div>{ getValueByLanguage(currentSorting, REACT_APP_LANG) }</div>
            <div className="sortingList">
                {
                    possibleSortingArray && possibleSortingArray.map((sortingItem) =>
                        <div key={sortingItem}>{ getValueByLanguage(sortingItem, REACT_APP_LANG) }</div>
                    )
                }
            </div>
        </div>
    );
};
