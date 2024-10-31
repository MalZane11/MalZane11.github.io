import React from 'react';
import Button from './Button';
import './Header.css';
import logo from '../../images/ACM Retro Red.png';

const Header = () => {

    /** Header will have multiple buttons in a row that link to other pages */
    return (
        <div className='GenericHeader'>
            <img src={logo} alt='logo' className='HeaderLogo'/>
            <Button text='Home' link='/' name='HeaderButton' />
            <Button text='Events' link='/events' name='HeaderButton' />
            <Button text='Officers' link='/officers' name='HeaderButton' />
            <Button text='Settings' link='/settings' name='HeaderButton' />
        </div>
    )



}


export default Header;
