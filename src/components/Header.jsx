import React from 'react';
import logoImage from '../images/logo.svg';
import userImage from '../images/user.svg';

function Header(props) {
  return (
    <header className='header'>
      <div className='header_wrap'>
        <button className='header_btn'></button>
        <div className='header_logo'>
          <a href="/">
            <img src={logoImage} alt="Logo" />
          </a>
        </div>
        <nav className='nav header_nav'>
          <div className='menu-mainmenu-container'>
            <ul id='menu-mainmenu' className='nav_list'>
              <li><a href="#">{props.menuItems[0].text}</a></li>
              <li><a href="#">{props.menuItems[1].text}</a></li>
              <li><a href="#">{props.menuItems[2].text}</a></li>
            </ul>
          </div>
        </nav>
        <div className='header_right_btn'>
          <a href="auth" className="header_user">
            <img src={userImage} alt="user" />
          </a>
          <a className="header-btn" href="registration">Старт</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
