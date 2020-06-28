import React from 'react'

import classes from './Projects.module.css'

const Header = () => (
    <header className = { classes.Header }>
        <h2 className = { classes.Heading }>My Projects</h2>
        <p className = { classes.SubHeading }>
            Updated regularly! Always working on something new to learn a new skill.
        </p>
    </header>
)

const Project = ({ image, label, href, alt }) => (
    <a className = { classes.ProjectCard } href = { href } _target = "blank">
        <img src = { image } className = { classes.Image } alt = { alt } />
        <div className = { classes.Overlay }>

        </div>
        <div className = { classes.Label }>
            <p className = { classes.LabelText }>{ label }</p>
        </div>
    </a>
)

const ProjectList = () => (
    <div className = { classes.Container }>
        <div className = { classes.Row }>
            <Project 
                image = "/space.webp"
                alt = "outer space" 
                label = "nasa viewer" 
                href = "https://intense-falls-62836.herokuapp.com/" />
            <Project 
                image = "/weather.webp" 
                alt = "lighting"
                label = "forecast" 
                href = "https://sleepy-lowlands-66314.herokuapp.com/" />
            <Project 
                image = "/book.webp" 
                label = "bookshelf" 
                href = "https://turof-book-app.herokuapp.com/"
                alt = "books" />
        </div>
        {/* <div className = { classes.Row }>

        </div> */}
    </div>
)

const Projects = () => (
    <section className = { classes.Projects }>
        <Header />
        <ProjectList />
    </section>
)

export default Projects