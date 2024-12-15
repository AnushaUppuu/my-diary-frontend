import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import SingleDiary from "../src/components/diary/SingleDiary";
import { title } from "process";
describe("SingleDiary component",()=>{
    test("should renders the elements correctly",()=>{
        const value={
            title:"Happy",
            mood:"happy",
            date:"15-12-2024",
            messageBody:"Hello hello"
        }
        render(
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <SingleDiary diary={value}/>
            </BrowserRouter>
        )
        expect(screen.getByRole('heading',{level:1})).toBeInTheDocument();
        expect(screen.getByRole('heading',{level:3})).toBeInTheDocument();
        expect(screen.getAllByRole('paragraph').length).toBe(2);
    })
})