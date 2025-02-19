import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import React from "react";
import "@testing-library/jest-dom";
import {
  Authentication,
  AuthenticationProvider,
} from "../src/context/Authentication";
import Home from "../src/components/Dashboard/Home";
global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    })
  ) as jest.Mock;
describe("Home component",()=>{
  
    it("Should call the fetch",async()=>{
        const token = "token";
        const setToken = jest.fn();
        const username = "something";
        const setUsername = jest.fn();
        const setDiaries=jest.fn();
        global.fetch = jest.fn(() =>
            Promise.resolve({
              ok: true,
              json: () => Promise.resolve({ success: true }),
            })
          ) as jest.Mock;
        render(
            <BrowserRouter  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Authentication.Provider value={{token,setToken,username,setUsername}}>
                <Home/>
            </Authentication.Provider>
            </BrowserRouter>
        )
        expect(screen.getByText("All your diaries"));
        expect(global.fetch).toHaveBeenCalledTimes(1);
    })
    it("Should not call the fetch",()=>{
        global.fetch = jest.fn(() =>
            Promise.resolve({
              ok: true,
              json: () => Promise.reject({ success: true }),
            })
          ) as jest.Mock;
        render(
            <BrowserRouter  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <AuthenticationProvider>
                <Home/>
            </AuthenticationProvider>
            </BrowserRouter>
        )
        expect(global.fetch).toHaveBeenCalledTimes(0);
    })
})