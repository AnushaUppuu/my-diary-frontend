import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../src/components/dashboard/Home";
import React from "react";
import "@testing-library/jest-dom";
import { Authentication, AuthenticationProvider } from "../src/context/Authentication";
describe("Home component", () => {
  it("should renders the elements correctly", () => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AuthenticationProvider>
          <Home />
        </AuthenticationProvider>
      </BrowserRouter>
    );
    expect(screen.getByRole("button", { name: "Go to main" })).toBeInTheDocument();
  });
  it("should go to the initial page upon clicking go to main button", async() => {
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AuthenticationProvider>
          <Home />
        </AuthenticationProvider>
      </BrowserRouter>
    );
   await act(async()=>{
     fireEvent.click(screen.getByRole('button',{name:"Go to main"}))
   })
   expect(window.location.pathname).toBe('/')
  });
  it("Should renders the navbar and content upon login",()=>{
    const token="token";
    const setToken=jest.fn();
    const username="something";
    const setUsername=jest.fn();
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      > 
        <Authentication.Provider value={{username,setUsername,token,setToken}}>
          <Home />
        </Authentication.Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('button',{name:"Home"})).toBeInTheDocument();
  })
});
