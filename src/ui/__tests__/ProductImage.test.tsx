import React from 'react';
import { render, screen } from "@testing-library/react";
import { ProductImage } from "../ProductImage";
import { getValueByLanguage } from "../../utils/getValueByLanguage";

test('should render a card', async () => {
    const { REACT_APP_LANG } = process.env;
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
    render(
        <ProductImage
            image={mockItem.image}
            title={mockItem.name}
            isSale={!!mockItem.eyecatcher}
            id={mockItem.id} />
);
    expect(screen.getByRole("title")).toHaveTextContent(getValueByLanguage("saleTitle", REACT_APP_LANG))
    expect(screen.getByRole("img")).toBeInTheDocument();

});
