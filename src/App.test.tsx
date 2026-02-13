import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calendar component library', () => {
  render(<App />);
  const linkElement = screen.getByText(/calendar component library/i);
  expect(linkElement).toBeInTheDocument();
});

