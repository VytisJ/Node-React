import { capitalize, upperCase } from "./utils";

describe("capitalize", () => {
  test("Capitalize first letter successfully", () => {
    const result = capitalize("rokas");

    expect(result).toEqual("Rokas");
  });

  test("Check when giving empty value", () => {
    const result = capitalize("");

    expect(result).toEqual("");
  });

  test("Check when giving null value", () => {
    const result = capitalize(null);

    expect(result).toEqual("");
  });

  test("Check when giving number value", () => {
    const result = capitalize(5);

    expect(result).toEqual(5);
  });

  test("Check when giving array value", () => {
    const result = capitalize([]);

    expect(result).toEqual("");
  });
});

describe("upperCase", () => {
  test("successfull uppercasing", () => {
    const result = upperCase("rokas");

    expect(result).toEqual("ROKAS");
  });
});
