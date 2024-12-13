import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Register from '../src/components/Register';
import '@testing-library/jest-dom'
describe("Register component",()=>{
    test("renders the elements correctly",()=>{
        render(<Register/>);
        expect(screen.getByLabelText('Enter Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Enter Password')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm The Password')).toBeInTheDocument();
        expect(screen.getByLabelText('Enter Gender')).toBeInTheDocument();
        expect(screen.getByLabelText('Enter Email Address')).toBeInTheDocument();
        expect(screen.getByTestId('profile-picture')).toBeInTheDocument();
    })
   
})