import React from 'react';
import { ProductCount } from "../ProductCount";
import { render } from "@testing-library/react";
import { getValueByLanguage } from "../../utils/getValueByLanguage";

test('should render a count of items in page', async () => {
        const { REACT_APP_LANG } = process.env;
        const { findByText } = render(
            <ProductCount itemsCount="5" />
        );
        expect(await findByText(getValueByLanguage("articlesCount", REACT_APP_LANG))).toBeInTheDocument();
        expect(await findByText('5')).toBeInTheDocument();
});
