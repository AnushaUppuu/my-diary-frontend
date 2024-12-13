import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from "../src/components/register/Register";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
describe("Register component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Register />
      </BrowserRouter>
    );
  });
  test("renders the elements correctly", () => {
    expect(screen.getByPlaceholderText("Enter Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Confirm The Password")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Gender")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Email Address")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
    expect(screen.getByText(/Already have an account ?/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
  it("should navigate to the login page", () => {
    fireEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(window.location.pathname).toBe("/login");
  });
});
