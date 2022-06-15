import { render, screen } from "@testing-library/react";
import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import LinkTag from "./LinkTag";

interface Props {
  children?: ReactNode;
}
const MockWrapper: React.FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

describe("LinkTag Component", () => {
  it("should render", () => {
    render(
      <MockWrapper>
        <LinkTag to="/">Link</LinkTag>
      </MockWrapper>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("should display its text children", () => {
    render(
      <MockWrapper>
        <LinkTag to="/">Link</LinkTag>
      </MockWrapper>
    );
    const link = screen.getByText("Link");
    expect(link).toBeInTheDocument();
  });

  it("should have its href value as the to prop", () => {
    render(
      <MockWrapper>
        <LinkTag to="/home">Link</LinkTag>
      </MockWrapper>
    );
    const link = screen.getByText("Link");
    expect(link).toHaveAttribute("href", "/home");
  });
});
