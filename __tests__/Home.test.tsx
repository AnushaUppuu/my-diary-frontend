import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../src/components/dashboard/Home";
import React from "react";
import "@testing-library/jest-dom";
describe("Home component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Home />
      </BrowserRouter>
    );
  });
  it("should renders the elements correctly", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
