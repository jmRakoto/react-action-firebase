import { sum } from "../../app/services/sum";

describe("Sum function test", () => {
  test("Sums numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
