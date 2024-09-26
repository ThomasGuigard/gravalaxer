import {describe, expect, expectTypeOf, it} from "vitest";
import {c} from "vite/dist/node/types.d-aGj9QkWt";


describe("calculate-quantities tests", () => {

  it("should return quantities after a calcul", () => {
    const quantitiesCalculator = new QuantitiesCalculator();

    const calculatedQuantities = quantitiesCalculator.calculateQuantitiesFor(0);

    expectTypeOf(calculatedQuantities).toBeObject();
  })

  it("should return 0 in all quantities when grams are 0", () => {
    const quantitiesCalculator = new QuantitiesCalculator();

    const calculatedQuantities = quantitiesCalculator.calculateQuantitiesFor(0);

    expectTypeOf(calculatedQuantities).toBeObject();
    expect
  })
});

class QuantitiesCalculator {
  calculateQuantitiesFor(num: number): CalculatedQuantities {
    return new CalculatedQuantities();
  }
}

class CalculatedQuantities {

}