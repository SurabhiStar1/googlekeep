import React from 'react';
import logo from './images/logo.jpeg';

const Header = ()=>{
    return (
        <>
            <div className='header'>
                <img  src={logo} alt='logo' width="70" height="50" />
                <h1>Note Points</h1>
            </div>
        </>
    )
}

export default Header
