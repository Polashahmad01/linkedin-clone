import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';

import './Header.css';
import HeaderOption from './HeaderOption/HeaderOption';
import { logout } from '../features/userSlice';
import { auth } from '../firebase/firebase'

const Header = () => {
    const dispatch = useDispatch();


    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img className="header__logo" src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedin"/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption 
                    title="Home"
                    Icon={HomeIcon}
                />
                <HeaderOption 
                    title="My Network"
                    Icon={SupervisorAccountIcon}
                />
                <HeaderOption 
                    title="Jobs"
                    Icon={BusinessCenterIcon}
                />
                <HeaderOption 
                    title="Messaging"
                    Icon={ChatIcon}
                />
                <HeaderOption 
                    title="Notifications"
                    Icon={NotificationsIcon}
                />
                <HeaderOption
                    avatar={true}
                    title="Me"
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}

export default Header
