// == Import npm
import React from 'react';

// == Import
import './header.scss';

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      <img className="header__title__logo"
        src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo"
      />
      Les Argonautes
    </h1>
  </header>
);

export default Header;
