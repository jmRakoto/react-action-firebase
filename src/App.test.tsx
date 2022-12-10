import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Kaiza text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Kaiza/i);
  expect(linkElement).toBeInTheDocument();
});
