import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Footer.module.css'

const Footer = () => (
    <footer className = { classes.Footer }>
        <h1 className = { classes.Name }>Jackie Turof</h1>
        <div className = { classes.Links }>     
                <a className = { classes.Link } _target = "blank" href = "https://github.com/jacquelineturof">
                    <FontAwesomeIcon 
                        icon = { [ 'fab', 'github' ] } 
                        className = { classes.Icon } /> 
                </a>
                <a className = { classes.Link } _target = "blank" href = "https://www.linkedin.com/in/jacqueline-turof-339089143/">
                    <FontAwesomeIcon 
                        icon = { [ 'fab', 'linkedin' ] } 
                        className = { classes.Icon } /> 
                </a>
        </div>
    </footer>
)

export default Footer