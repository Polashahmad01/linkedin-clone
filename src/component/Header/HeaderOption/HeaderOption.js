import React from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import './HeaderOption.css';
import { selectUser } from '../../features/userSlice';

const HeaderOption = ({ title, avatar, Icon, onClick }) => {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption_avatarIcon" >{user?.email[0]}</Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
