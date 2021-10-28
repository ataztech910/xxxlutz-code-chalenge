import { getValueByLanguage } from "../utils/getValueByLanguage";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { setSetSearchStringAction } from "../redux/actions/CatalogActions";
import debounce from 'lodash.debounce';

export const ProductFilter = ({className} : Partial<any>) => {
    const { REACT_APP_LANG } = process.env;
    const dispatch = useDispatch();
    const searchValue = useSelector((state: Partial<any>) => state.catalog.searchValue);
    const [text, setText] = useState(searchValue ? searchValue : "");

    const debouncedSaveSearch = useCallback(
        debounce(nextValue => dispatch(setSetSearchStringAction(nextValue)), 300),
        [],
    );

    const updateFilterString = (filterString: string) => {
        setText(filterString);
        debouncedSaveSearch(filterString);
    };

    return (
        <div className={className}>
            <input type="text" value={text} onChange={(e) => updateFilterString(e.target.value)} placeholder={ getValueByLanguage("filter", REACT_APP_LANG) } />
        </div>
    );
};
