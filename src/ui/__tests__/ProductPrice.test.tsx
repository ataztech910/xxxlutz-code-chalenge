import React from 'react';
import { render, screen } from "@testing-library/react";
import { ProductPrice } from "../ProductPrice";

test('should render a price in card', async () => {
    const mockItem = {
        "brand": "Smith-Bins",
        "eyecatcher": "sale",
        "id": 1,
        "image": "https://loremflickr.com/320/320/furniture,chair/all",
        "name": "Transcof",
        "price": 655,
        "priceSale": 357,
        "url": "https://soup.io/augue/quam.json"
    };
    const { findByText } = render(
        <ProductPrice isSale={!!mockItem.eyecatcher} price={mockItem.price} previousPrice={mockItem.priceSale} />
    );

    expect(screen.getByRole("price")).toBeInTheDocument();
    expect(await findByText("655:-")).toBeInTheDocument();
});
