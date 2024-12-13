import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../src/components/login/Login";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
  beforeEach(() => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Login />
      </BrowserRouter>
    );
  });
  test("should renders the elements correctly", () => {
    expect(screen.getByPlaceholderText("Enter Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });
  test("should navigate to the register", () => {
    fireEvent.click(screen.getByRole("button", { name: "Register" }));
    expect(window.location.pathname).toBe("/");
  });
});
