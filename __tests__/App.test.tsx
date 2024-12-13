import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
jest.mock('react-router-dom', () => ({
  BrowserRouter:jest.fn(),
  Routes:jest.fn(),
  Route:jest.fn(),
}))
test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText('Welcome to the MyDiary')).toBeInTheDocument()
});
