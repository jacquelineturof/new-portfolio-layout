import React from 'react'

import classes from './Intro.module.css'

const Intro = () => (
    <div className = { classes.Intro }>
        <img src = "/jackie.png" className = { classes.Image } />
        <h1 className = { classes.Hello }>Hello, I'm Jackie Turof!</h1>
        <p className = { classes.Bio }>
            My coding journey began with classes at Oregon State University.
            I began to fall in love with programming while taking a Data Structure course.
            After my academic training I became interested in web development and earned
            my certification in Java 8. I have since moved to a Javascript stack and love
            the open community I have found. I strive to learn something new each day and I'm
            looking forward to a long, happy career as a web developer. I can't wait to see what
            we can do!
        </p>
    </div>
)

export default Intro