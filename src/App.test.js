import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Todo List/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders pending filter button', () => {
  render(<App />);
  const pendingButton = screen.getByText(/Pending/i);
  expect(pendingButton).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search todos.../i);
  expect(searchInput).toBeInTheDocument();
});

test('renders theme toggle button', () => {
  render(<App />);
  const themeBtn = screen.getByRole('button', { name: /Switch to light mode/i });
  expect(themeBtn).toBeInTheDocument();
});
