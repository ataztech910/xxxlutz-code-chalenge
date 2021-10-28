import React from 'react';
import { render } from "@testing-library/react";
import { ProductName } from "../ProductName";

test('should render a brand element in card', async () => {
    const { findByText } = render(
        <ProductName name="Apple" />
    );
    expect(await findByText('Apple')).toBeInTheDocument();
});
