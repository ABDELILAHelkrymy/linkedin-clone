import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css'
import logo from './img/linkedin.png'
import avatarImg from './img/1590168683419.jpg'
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className='header'>

        <div className="header__left">
            <img src={logo} alt=""/>

            <div className="header__search">
                <SearchIcon/>
                <input type="text" />
            </div>

        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messagin"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={avatarImg} title="Me"/>
        </div>
    </div>
  )
}

export default Header