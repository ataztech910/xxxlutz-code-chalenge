import React from 'react';
import { render } from "@testing-library/react";
import { ProductCard } from "../ProductCard";

test('should render a card', async () => {
    const { findByText} = render(
        <ProductCard url="http://apple.com">
            Test children
        </ProductCard>
    );
    expect(await findByText('Test children')).toBeInTheDocument();
});
