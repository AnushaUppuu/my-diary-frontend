import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../src/components/login/Login";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider } from "../src/context/Authentication";
global.alert=jest.fn();

describe("Login", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    ) as jest.Mock;
    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AuthenticationProvider>
        <Login />
        </AuthenticationProvider>
      </BrowserRouter>
    );
    global.alert = jest.fn();
  });
  test("should renders the elements correctly", () => {
    expect(screen.getByPlaceholderText("Enter Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });
  test("should navigate to the register", async() => {
   await act(()=>{
    fireEvent.click(screen.getByRole("button", { name: "Register" }));
    expect(window.location.pathname).toBe("/");
   }) 
  });
  it("should call fetch", async () => {
    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText("Enter Username"), {
        target: { value: "Anusha" },
      });
      fireEvent.change(screen.getByPlaceholderText("Enter Password"), {
        target: { value: "anu@123" },
      });
      fireEvent.click(screen.getByRole('button',{name:"Login"}))
    });
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/users/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({username:"Anusha",password:"anu@123"})
    });
  });
  it("Should return an alert if the status code is 300",async()=>{
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status:300,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;
    await act(async()=>{
      fireEvent.click(screen.getByRole('button',{name:"Login"}));
    })
    expect(global.alert).toHaveBeenCalledWith("Wrong credentials")
  })
  it("Should return an alert if the user not exist",async()=>{
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status:404,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;
    await act(async()=>{
      fireEvent.click(screen.getByRole('button',{name:"Login"}));
    })
    expect(global.alert).toHaveBeenCalledWith("This user not exists")
  })
  it("Should return an alert Try again if no status code matches",async()=>{
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status:500,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;
    await act(async()=>{
      fireEvent.click(screen.getByRole('button',{name:"Login"}));
    })
    expect(global.alert).toHaveBeenCalledWith("Try Again!!")
  })
  
});
