import { getValueByLanguage } from "../getValueByLanguage";

test("should return value by language", () => {
    const check = getValueByLanguage("saleTitle", "eng");
    expect(check).toEqual("Sale");
    const checkEng = getValueByLanguage("saleTitle", "eng");
    expect(checkEng).not.toEqual("Распродажа");
    const checkDefault = getValueByLanguage("saleTitle");
    expect(checkDefault).toEqual("Sale");
});
