import React from "react";
import { screen, render } from "@testing-library/react";
import Sum from "../Sum/Sum";
test("sum testing", () => {
  render(<Sum />);
  const TestSumid = screen.getByTestId("my-testid");
  const TestSumTitle = screen.getByTitle("Sum");
  expect(TestSumTitle.textContent).toBe("85");
});
