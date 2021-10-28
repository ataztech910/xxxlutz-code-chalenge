import { makeRandomImage } from "../makeRandomImage";

test("should filter array by object", () => {
    const checkFilter = makeRandomImage("some-fancy-url", 66);
    expect(checkFilter).toEqual("some-fancy-url?id=66")
});
