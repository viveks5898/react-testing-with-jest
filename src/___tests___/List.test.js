import { render, screen } from '@testing-library/react';
import React from "react";
import List from "../List/List";

test("check the list", () => {
  render(<List />);
  const Listitems = screen.getAllByRole("Listitem");
  expect(Listitems.length).toEqual(3)
});
