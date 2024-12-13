import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText("Welcome to the MyDiary")).toBeInTheDocument();
});
