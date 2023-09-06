import React from 'react';
import vkIcon from '../images/vk-icon.svg';
import tgIcon from '../images/tg-icon.svg';
import nezhnoIcon from '../images/Nezhno.svg';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="menu-mainmenu-container">
          <ul id="menu-mainmenu" className="nav_list">
            <li>
              <a href="#">{props.menuItems[0].text}</a>
            </li>
            <li>
              <a href="#">{props.menuItems[1].text}</a>
            </li>
            <li>
              <a href="#">{props.menuItems[2].text}</a>
            </li>
          </ul>
        </div>
        <div className="center-footer">
          <ul className="footer-documents">
            <li>
              <a href="contract">Договор публичной оферты</a>
            </li>
            <li>
              <a href="privacy-politic">Политика конфиденциальности</a>
            </li>
          </ul>
          <div className="footer-info-container">
            <ul className="footer-info">
              <li>ИП Ларькина К.Ю.</li>
              <li>ИНН 525801278469</li>
              <li>ОГРНИП 318527500097073</li>
            </ul>
          </div>
        </div>
        <div className="soc_networks">
            <ul className="socials">
              <li>
                <a href="https://vk.com/nezhno.space" target="_blank">
                  <img src={vkIcon} alt="VK" />
                </a>
              </li>
              <li>
                <a href="https://t.me/nezhno_space" target="_blank">
                  <img src={tgIcon} alt="Telegram" />
                </a>
              </li>
              <li>
                <a href="mailto:care@nezhno.space" target="_blank">
                  <img src={nezhnoIcon} alt="Email" />
                </a>
              </li>
            </ul>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
