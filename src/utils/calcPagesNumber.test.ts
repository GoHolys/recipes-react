import { calcPagesNumber } from "./calcPagesNumber";

describe("calcPagesNumber", () => {
  it("should return 0 when totalRecords is 0", () => {
    expect(calcPagesNumber(0, 10)).toBe(0);
  });

  it("should return 1 when totalRecords is less than or equal to recordsPerPage", () => {
    expect(calcPagesNumber(10, 10)).toBe(1);
    expect(calcPagesNumber(5, 10)).toBe(1);
  });

  it("should return the correct number of pages when totalRecords is greater than recordsPerPage", () => {
    expect(calcPagesNumber(15, 10)).toBe(2);
    expect(calcPagesNumber(100, 10)).toBe(10);
    expect(calcPagesNumber(101, 10)).toBe(11);
  });
});
