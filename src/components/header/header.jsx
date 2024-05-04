import React, { useState } from 'react';
import styleHeader from './header.module.css'
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';

const ResponsiveMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItem = [
    'Home',
    'About',
    'Contact'
  ]

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styleHeader.header}>
       <div className={styleHeader.logo}><span>Web-Developer</span></div>
      <button className={styleHeader.menuToggle} onClick={handleToggleMenu}>
        <Icon path={mdiMenu} size={2} color="white"/>
      </button>
      <nav className={`${isMenuOpen ? styleHeader.openMenu : styleHeader.mainMenu }` }>
        <ul className={styleHeader.ul}>
          {menuItem.map((item, index) => (
            <li key={index} className={styleHeader.li}>{item}</li>
          ))}
        </ul>
      </nav>      
    </header>
  );
};

export default ResponsiveMenu;