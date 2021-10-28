import { mockCatalog } from "../../mock";
import { filterArray } from "../filterArray";

test("should filter array by object", () => {
    const checkFilter = filterArray(mockCatalog, "Strosin Inc");
    expect(checkFilter[0]).toEqual({
        "brand": "Strosin Inc",
        "eyecatcher": null,
        "id": 2,
        "image": "https://loremflickr.com/320/320/furniture,chair/all",
        "name": "Konklux",
        "price": 669,
        "priceSale": 389,
        "url": "https://eepurl.com/quam/pharetra.jsp"
    });
});
