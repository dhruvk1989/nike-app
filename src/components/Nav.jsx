import React from 'react'
import {headerLogo} from '../assets/images';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <div>
      <header>
        <nav>
            <a href='/'>
                <img src={headerLogo}/>
            </a>
        </nav>
      </header>
    </div>
  )
}

export default Nav
