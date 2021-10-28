import React from 'react';
import store from "../../redux/store";
import {setCatalogAction, setSortingValueAction} from "../../redux/actions/CatalogActions";
import {render, screen} from "@testing-library/react";
import { mockCatalog } from "../../mock";
import { ProductSorting } from "../ProductSorting";
import {Provider} from "react-redux";
import { getValueByLanguage } from "../../utils/getValueByLanguage";

beforeEach( () => {
    store.dispatch(setSortingValueAction({
        key: "priceAsc",
        direction: "asc",
    }));
    store.dispatch(setCatalogAction(mockCatalog));
});

test('should render a sorting in page', async () => {
    const { REACT_APP_LANG } = process.env;
    const { findByText } = render(
        <Provider store={ store }>
            <ProductSorting />
        </Provider>
    );
    expect(screen.getByRole("sort")).toBeInTheDocument();
    expect(await findByText(getValueByLanguage("priceAsc", REACT_APP_LANG))).toBeInTheDocument();
});
