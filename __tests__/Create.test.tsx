import React from "react";
import { act } from "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import Create from "../src/components/diary/Create";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import {
  Authentication,
  AuthenticationProvider,
} from "../src/context/Authentication";

global.alert = jest.fn();
describe("Create component", () => {
  beforeEach(() => {
    const username = "Anusha";
    const setUsername = jest.fn();
    const token = "token";
    const setToken = jest.fn();
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Authentication.Provider
          value={{ username, setUsername, token, setToken }}
        >
          <Create />
        </Authentication.Provider>
      </BrowserRouter>
    );
  });
  it("Should render the elements correctly", () => {
    expect(screen.getByText("Create a Diary")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter title")).toBeInTheDocument();
    expect(screen.getAllByRole("radio").length).toBeLessThan(6);
    expect(
      screen.getByPlaceholderText("Enter the Message body")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("date")).toBeInTheDocument();
  });
  it("Should calls the fetch and navigate to the home", async () => {
    global.alert = jest.fn();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    ) as jest.Mock;
    await act(async () => {
      const radioButtons = screen.getAllByRole("radio");
      const happyRadioButton = radioButtons.find(
        (radio) => (radio as HTMLInputElement).value == "happy"
      );
      fireEvent.change(screen.getByPlaceholderText("Enter title"), {
        target: { value: "Happy" },
      });
      fireEvent.click(screen.getByLabelText("happy"));
      fireEvent.change(screen.getByPlaceholderText("Enter the Message body"), {
        target: { value: "Happy Happy Happy" },
      });
      fireEvent.change(screen.getByPlaceholderText("date"), {
        target: { value: "2024-12-25" },
      });
      fireEvent.click(screen.getByRole("button", { name: "Create" }));
    });
    expect(screen.getByLabelText("happy") as HTMLInputElement).toBeChecked();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith(
      "Diary page created successfully"
    );
    expect(window.location.pathname).toBe("/home");
  });
  it("should display an alert in case of fetch result is failed", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.reject({ success: true }),
      })
    ) as jest.Mock;
    await act(async () => {
      const radioButtons = screen.getAllByRole("radio");
      const happyRadioButton = radioButtons.find(
        (radio) => (radio as HTMLInputElement).value == "happy"
      );
      fireEvent.change(screen.getByPlaceholderText("Enter title"), {
        target: { value: "Happy" },
      });
      fireEvent.click(screen.getByLabelText("happy"));
      fireEvent.change(screen.getByPlaceholderText("Enter the Message body"), {
        target: { value: "Happy Happy Happy" },
      });
      fireEvent.change(screen.getByPlaceholderText("date"), {
        target: { value: "2024-12-25" },
      });
      fireEvent.click(screen.getByRole("button", { name: "Create" }));
    });
    expect(global.alert).toHaveBeenCalledWith("Try again!");
  });
});
