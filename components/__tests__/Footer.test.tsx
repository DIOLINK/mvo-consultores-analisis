import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  // Assuming Navigation is the component being tested
  it('renders the footer', () => {
    render(<Footer />);
    const footer = screen.getByText(/Análisis Técnico MVO Consultores/i);
    expect(footer).toBeInTheDocument();
  });
});
