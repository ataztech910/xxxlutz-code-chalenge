import {sortArray} from "../sortArray";
import { mockCatalog } from "../../mock";

test("should sort array by object", () => {
    const testSort = sortArray(mockCatalog, "price", "asc");
    expect(testSort[0].price).toBe(542);

    const testSortName = sortArray(mockCatalog, "name", "asc");
    expect(testSortName[0].name).toBe("Bigtax");

    const testSortEye = sortArray(mockCatalog, "name", "desc");
    expect(testSortEye[0].eyecatcher).toBe("sale");
});
