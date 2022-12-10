import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Counter component", () => {
  // render the component on virtual dom
  render(<Counter />);

  //select the elements you want to interact with
  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");
  const decrementBtn = screen.getByTestId("decrement");

  // click incrementBtn
  fireEvent.click(incrementBtn);

  // assert the expected result
  // after incrementBtn clicked
  expect(counter).toHaveTextContent("1");

  // click decrementBtn
  fireEvent.click(decrementBtn);

  // assert the expected result
  // after decrementBtn clicked
  expect(counter).toHaveTextContent("0");

  // click decrementBtn
  fireEvent.click(decrementBtn);

  // assert the expected result
  // after decrementBtn clicked
  expect(counter).toHaveTextContent("1");
});
