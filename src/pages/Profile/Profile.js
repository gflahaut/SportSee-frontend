import React from 'react';
import UserProfile from '../../components/UserProfile';
import { useParams } from 'react-router-dom';
import { UserProfileProvider } from '../../context/UserProfileContext';

export default function Profile() {
    const { id } = useParams();
    return (
        <main className='profile'>
            <UserProfileProvider>
                <UserProfile userid={ id } />
            </UserProfileProvider>
        </main>
    );
}