import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders correctly", () => {
    render(<App />);
    const headerElement = screen.getByText("Hi");
    expect(headerElement).toBeInTheDocument();
  });
});
