import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import LoginView from "./LoginView";

const mockFn = jest.fn();

interface Props {
  children?: ReactNode;
}
const MockWrapper: React.FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const errors = {
  userName: "",
  password: "",
};

const form = {
  userName: "",
  password: "",
};

describe("Login View Component", () => {
  it("should render", () => {
    render(
      <MockWrapper>
        <LoginView
          errors={errors}
          isLoading={false}
          form={form}
          handleChange={mockFn}
          handleSubmit={mockFn}
        />
      </MockWrapper>
    );

    const loginComponent = screen.getByTestId("loginView");
    expect(loginComponent).toBeInTheDocument();
  });
});
