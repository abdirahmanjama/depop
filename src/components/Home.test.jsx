import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './Home';

describe('ProductsPageTests', () => {
  test('should render without error', () => {
    render(<Home />);
    expect(screen.getByText('Hide Sold Items')).toBeInTheDocument();
  });
  test('Spinner should load before API call completes', () => {
    render(<Home />);
    expect(screen.getByText('Retrieving products...')).toBeInTheDocument();
  });
});
