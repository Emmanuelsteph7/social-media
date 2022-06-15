import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should display the children as its content", () => {
    render(<Button>button</Button>);
    const button = screen.getByText("button");
    expect(button).toBeInTheDocument();
  });

  it("should be disabled when the loading prop is true", () => {
    render(<Button loading>button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should be disabled when the disabled prop is true", () => {
    render(<Button disabled>button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
