import React, { Fragment } from 'react';
import classes from './Header.module.css';
import Food from '../../assets/cookies.jpg'
import logo from '../../assets/logo.svg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
            <img src={logo} alt="logo" />
                <HeaderCartButton modalHandler={props.clickHandle}/>
            </header>
            <div className={classes['main-image']}>
                <img src={Food} alt="table of cookies" />
            </div>
        </Fragment>
    );
};

export default Header;