import React from 'react';
import { render } from "@testing-library/react";
import {ProductBrand} from "../ProductBrand";

test('should render a brand element in card', async () => {
    const { findByText } = render(
        <ProductBrand name="Apple" />
    );
    expect(await findByText('Apple')).toBeInTheDocument();
});
