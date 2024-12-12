import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';
test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText('Welcome to the MyDiary')).toBeInTheDocument()
});
