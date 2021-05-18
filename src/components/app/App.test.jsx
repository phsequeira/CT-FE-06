import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('RandMContainer', () => {
    it('renders a list of characters from rick and morty', async () => {
        render(<App />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', {name: 'characters'});
        expect(ul).toMatchSnapshot();
    })
})