// src/components/UserProfile.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserProfile from './UserProfile';

test('affiche les informations utilisateur', async () => {
    render(
        <BrowserRouter>
            <UserProfile />
        </BrowserRouter>
    );

    // Vérifiez que les éléments attendus s'affichent à l'écran
    await waitFor(() => {
        expect(screen.getByText(/Nom: John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/Âge: 30/i)).toBeInTheDocument();
        expect(screen.getByText(/Score du jour: 80%/i)).toBeInTheDocument();
        expect(screen.getByText(/Calories: 2000/i)).toBeInTheDocument();
        expect(screen.getByText(/Protéines: 150/i)).toBeInTheDocument();
        expect(screen.getByText(/Glucides: 300/i)).toBeInTheDocument();
        expect(screen.getByText(/Lipides: 100/i)).toBeInTheDocument();
    });
});
