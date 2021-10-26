import React from 'react';
import { ProductCount } from "../ProductCount";
import store from "../../redux/store";
import { mockCatalog } from "../../__tests__/mock";
import { setCatalogAction } from "../../redux/actions/CatalogActions";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

beforeEach( () => {
        store.dispatch(setCatalogAction(mockCatalog));
});

test('should render a card with the details of the Todo', async () => {
        const { findByText } = render(
            <Provider store={store}>
                 <ProductCount />
            </Provider>
        );
        expect(await findByText('articles')).toBeInTheDocument();
        expect(await findByText('2')).toBeInTheDocument();
});
