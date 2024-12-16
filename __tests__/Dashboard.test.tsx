import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../src/components/dashboard/Dashboard";
import React from "react";
import "@testing-library/jest-dom";
import {
  Authentication,
  AuthenticationProvider,
} from "../src/context/Authentication";

describe("Home component", () => {
  it("should renders the elements correctly", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.reject({ success: true }),
      })
    ) as jest.Mock;
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AuthenticationProvider>
          <Dashboard />
        </AuthenticationProvider>
      </BrowserRouter>
    );
    expect(
      screen.getByRole("button", { name: "Go to main" })
    ).toBeInTheDocument();
  });
  it("should go to the initial page upon clicking go to main button", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.reject({ success: true }),
      })
    ) as jest.Mock;
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AuthenticationProvider>
          <Dashboard />
        </AuthenticationProvider>
      </BrowserRouter>
    );
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Go to main" }));
    });
    expect(window.location.pathname).toBe("/");
  });
  it("Should renders the navbar and content upon login", () => {
    const token = "token";
    const setToken = jest.fn();
    const username = "something";
    const setUsername = jest.fn();

    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Authentication.Provider
          value={{ username, setUsername, token, setToken }}
        >
          <Dashboard />
        </Authentication.Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
  });
});
