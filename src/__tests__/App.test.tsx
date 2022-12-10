import { render, screen } from "@testing-library/react";
import App from "../app/App";

describe("<App />", () => {
  test("renders Kaiza text", () => {
    render(<App />);
    const linkElement = screen.getByText(/Kaiza/i);
    expect(linkElement).toBeInTheDocument();
  });
});
