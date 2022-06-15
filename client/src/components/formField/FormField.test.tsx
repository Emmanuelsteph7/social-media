import { render, screen } from "@testing-library/react";
import FormField from "./index";

const mockFn = jest.fn();

// const ParentComponent = () => {
//   const 
// }

describe("FormField Component", () => {
  it("should render", () => {
    render(<FormField name="" onChange={mockFn} value="" />);
    const formField = screen.getByTestId("formField");
    expect(formField).toBeInTheDocument();
  });

  it("should have the name of input as name prop", () => {
    render(<FormField name="firstName" onChange={mockFn} value="" />);
    const formFieldInput = screen.getByRole("textbox");
    expect(formFieldInput).toHaveAttribute("name", "firstName");
  });

  it("should have the value of input as value prop", () => {
    render(<FormField name="" onChange={mockFn} value="John" />);
    const formFieldInput = screen.getByRole("textbox");
    expect(formFieldInput).toHaveValue("John");
  });

  it("should have the error of input as error prop", () => {
    render(
      <FormField error="This is an error" name="" onChange={mockFn} value="" />
    );
    const formFieldErrorField = screen.getByTestId("formField-error");
    expect(formFieldErrorField).toBeInTheDocument();
    expect(formFieldErrorField).toContainHTML("This is an error");
  });
});
