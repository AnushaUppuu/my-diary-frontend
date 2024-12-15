import React from "react";
import { act } from "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import Create from "../src/components/diary/Create";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider } from "../src/context/Authentication";

describe("Create component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AuthenticationProvider>
          <Create />
        </AuthenticationProvider>
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
  });
});
