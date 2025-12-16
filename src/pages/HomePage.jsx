import React from 'react';
import Header from '../components/common/Header';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router';

const HomePage = () => {
    const {auth} = useAuth();
    console.log(auth);
    
    return (
        <>
        <Link to='/me'>Profile</Link>
        </>
    );
};

export default HomePage;