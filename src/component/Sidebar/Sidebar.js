import React from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import './Sidebar.css';
import { selectUser } from '../features/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg" alt="freecodecamp"/>
                <Avatar src={user?.photoUrl} className="sidebar__avatar" >{user?.email[0]}</Avatar>
                <h2>{user?.displayName}</h2>
                <h4>{user?.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p className="sidebar__profile">Who views your profile</p>
                    <p className="sidebar__statNumber">3,642</p>
                </div>
                <div className="sidebar__stat">
                    <p className="sidebar__profile">View your post</p>
                    <p className="sidebar__statNumber">3,256</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('computersoftware')}
                {recentItem('coding')}
                {recentItem('softwareengineer')}
                {recentItem('developer')}
                {recentItem('webdevelopment')}
            </div>
        </div>
    )
}

export default Sidebar
