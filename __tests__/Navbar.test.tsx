import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
describe("Navbar component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Navbar />
      </BrowserRouter>
    );
  });
  test("should renders the elements correctly", () => {
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Profile" })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBeLessThan(5);
  });
  test("should navigate to the create page upon clicking create", async () => {
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Create" }));
    });
    expect(window.location.pathname).toBe("/create");
  });
});
