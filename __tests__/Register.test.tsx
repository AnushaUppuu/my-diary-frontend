import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../src/components/Register';
import '@testing-library/jest-dom'
describe("Register component",()=>{
    test("renders the elements correctly",()=>{
        render(<Register/>);
        expect(screen.getByTestId('username')).toBeInTheDocument();
        expect(screen.getByTestId('password')).toBeInTheDocument();
        expect(screen.getByTestId('confirm-password')).toBeInTheDocument();
        expect(screen.getByTestId('gender')).toBeInTheDocument();
        expect(screen.getByTestId('profile-picture')).toBeInTheDocument();
        expect(screen.getByTestId('email-address')).toBeInTheDocument();
    })
})