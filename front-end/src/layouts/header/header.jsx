import React from 'react';

import { Logo, UserBlock, CustomButton } from '../../components';

import './header.css';

const Header = props => (
  <header className="header">
    <Logo logoSrc="images/logo.png" />
    <UserBlock avatar={""} name={'UserName'}>
      <CustomButton text="Logout" large onClick={() => console.log('logout')} />
    </UserBlock>
  </header>
);

export default Header;