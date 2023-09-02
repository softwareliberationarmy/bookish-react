import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bookish link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bookish/i);
  expect(linkElement).toBeInTheDocument();
});
