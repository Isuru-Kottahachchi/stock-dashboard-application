import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

// Mock the fetch function to return a resolved Promise with mock data
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                date: '2023-07-11',
                high: 150.0,
                low: 140.0,
                open: 145.0,
            }),
    })
);

test('Navbar component renders correctly', () => {
    render(<Navbar />);
    const dateInput = screen.getByRole('textbox', { type: 'date' });
    const nameElement = screen.getByText(/Isuru Kottahachchi/i);

    expect(dateInput).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
});

test('Navbar fetches data when date is selected', async () => {
    render(<Navbar />);
    const dateInput = screen.getByRole('textbox', { type: 'date' });

    // Simulate user selecting a date
    fireEvent.change(dateInput, { target: { value: '2023-07-21' } });

    // Wait for the data to be fetched (async operation)
    await screen.findByText('High value is 150.0');

    // Assert that the fetched data is displayed on the component
    expect(screen.getByText('High value is 150.0')).toBeInTheDocument();
    expect(screen.getByText('Low value is 140.0')).toBeInTheDocument();
    expect(screen.getByText('Open value is 145.0')).toBeInTheDocument();
});
