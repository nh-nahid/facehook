import React from 'react';
import { useNavigate } from 'react-router';
import LogoutIcon from '../../assets/icons/logout.svg'
import { useAuth } from '../../hooks/useAuth';

const Logout = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const handleLogout = () => {
        setAuth({})
        navigate('/login')
    }
    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={LogoutIcon} alt="logout" />
        </button>
    );
};

export default Logout;