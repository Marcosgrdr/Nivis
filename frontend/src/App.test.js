import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { App } from './App';

test('renders auth page by default (when not logged in)', () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/ENTRAR/i);
  expect(linkElement).toBeInTheDocument();
});