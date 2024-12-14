import React from "react";
import { act } from "@testing-library/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from "../src/components/register/Register";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { resolve } from "path";
global.alert = jest.fn();
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true }),
  })
) as jest.Mock;
describe("Register component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Register />
      </BrowserRouter>
    );
    global.alert = jest.fn();
  });
  afterAll(()=>{
    jest.clearAllMocks();
  })
  test("renders the elements correctly", () => {
    expect(screen.getByPlaceholderText("Enter Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Confirm The Password")
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Email Address")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
    expect(screen.getByText(/Already have an account ?/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
  it("should navigate to the login page", async () => {
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Login" }));
    });
    expect(window.location.pathname).toBe("/login");
  });
  it("should give an alert if the password and confirm password doesn't match", async () => {
    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText("Enter Username"), {
        target: { value: "Anusha" },
      });
      fireEvent.change(screen.getByPlaceholderText("Enter Password"), {
        target: { value: "anu@123" },
      });
      fireEvent.change(screen.getByPlaceholderText("Confirm The Password"), {
        target: { value: "anu@1233" },
      });
      fireEvent.change(screen.getByPlaceholderText("Enter Email Address"), {
        target: { value: "anu@123" },
      });
      fireEvent.change(screen.getByRole("combobox"), {
        target: { value: "Male" },
      });
      fireEvent.click(screen.getByRole("button", { name: "Register" }));
    });
    expect(global.fetch).toHaveBeenCalledTimes(0);
    expect(global.alert).toHaveBeenCalledWith(
      "Password should be same as the confirm password"
    );
  });
  it("should call the fetch on submit", async () => {
    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText("Enter Username"), {
        target: { value: "Anusha" },
      });
      fireEvent.change(screen.getByPlaceholderText("Enter Password"), {
        target: { value: "anu@123" },
      });
      fireEvent.change(screen.getByPlaceholderText("Confirm The Password"), {
        target: { value: "anu@123" },
      });
      fireEvent.change(screen.getByPlaceholderText("Enter Email Address"), {
        target: { value: "anu@123" },
      });
      fireEvent.change(screen.getByRole("combobox"), {
        target: { value: "Male" },
      });
      fireEvent.click(screen.getByRole("button", { name: "Register" }));
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith("User registered successfully");
  });
});
