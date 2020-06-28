import React from 'react'

import classes from './Header.module.css'

const Header = () => (
    <header className = { classes.Header }>
        <h1 className = { classes.Title }>Fullstack Web Developer</h1>
        <p className = { classes.Tag }>Writing code. Building robust web solutions.</p>
        <img src = "/code.svg" className = { classes.Image } />
    </header>
)

export default Header