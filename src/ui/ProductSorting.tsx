import { getValueByLanguage } from "../utils/getValueByLanguage";
import {useDispatch, useSelector} from "react-redux";
import { possibleSortingArray } from "../utils/possibleSortingArray";
import {MutableRefObject, useRef, useState} from "react";
import {useOnClickOutside} from "../utils/clickOutsideHook";
import {setSortingValueAction} from "../redux/actions/CatalogActions";

export const ProductSorting = ({className} : Partial<any>) => {
    const { REACT_APP_LANG } = process.env;
    const dispatch = useDispatch();
    const ref: MutableRefObject<any> = useRef();
    const currentSorting = useSelector((state: Partial<any>) => state.catalog.sort);
    const [showList, setVisibility] = useState(false);
    useOnClickOutside(ref, () => setVisibility(false));
    const selectSorting = (sortingItem: string) => {
        dispatch(setSortingValueAction({
            key: sortingItem,
            direction: !sortingItem.toLocaleLowerCase().includes("desc") ? "asc" : "desc",
        }));
        setVisibility(false);
    };

    return (
        <div className={ className } ref={ref}>
            <div className="sortingValue" onClick={() => setVisibility(!showList)}>
                <div>{ getValueByLanguage(currentSorting.key, REACT_APP_LANG) }</div>
                <div>
                    <img src="/arrow.svg" alt=""/>
                </div>
            </div>
            <div className="sortingList">
                {
                    showList && possibleSortingArray && possibleSortingArray.map((sortingItem) =>
                        <div key={sortingItem}
                             onClick={() => selectSorting(sortingItem)}>
                            { getValueByLanguage(sortingItem, REACT_APP_LANG) }
                        </div>
                    )
                }
            </div>
        </div>
    );
};
