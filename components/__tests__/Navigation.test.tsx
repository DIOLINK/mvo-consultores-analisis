import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import Navigation from '../Navigation';

describe('Navigation', () => {
  it('renders the navigation links', () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );

    const homeLink = screen.getByText(/Inicio/i);
    const proposalLink = screen.getByText(/Propuesta de Migración/i);
    const reportLink = screen.getByText(/Reporte Técnico/i);
    const dataLink = screen.getByText(/Datos Técnicos/i);

    expect(homeLink).toBeInTheDocument();
    expect(proposalLink).toBeInTheDocument();
    expect(reportLink).toBeInTheDocument();
    expect(dataLink).toBeInTheDocument();
  });
});
