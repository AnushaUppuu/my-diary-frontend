import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom'
test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText('Welcome to the MyDiary')).toBeInTheDocument()
});
