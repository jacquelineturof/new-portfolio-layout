import React from 'react'

import classes from './Skills.module.css'

const Column = ({ children }) => (
    <div className = { classes.Column }>
        { children }
    </div>
)

const Skills = () => (
    <section className = { classes.Background }>
        <div className = { classes.Container }>
            <Column>
                <div className = { classes.IconContainer }>
                    <img src = "/frontend1.svg" className = { classes.Icon } />
                </div>
                <h3 className = { classes.Label }>Frontend</h3>
                <p className = { classes.Tag }>
                    Simple, Clean, Intuitive.
                </p>
                <ul className = { classes.SkillList }>
                    <li className = { classes.Skill }>React</li>
                    <li className = { classes.Skill }>React Native</li>
                    <li className = { classes.Skill }>SSR - Next</li>
                    <li className = { classes.Skill }>Angular</li>
                    <li className = { classes.Skill }>CSS3</li>
                    <li className = { classes.Skill }>HTML5</li>
                    <li className = { classes.Skill }>Sass</li>
                    <li className = { classes.Skill }>jQuery</li>
                </ul>
            </Column>
            <Column>
                <div className = { classes.IconContainer }>
                    <img src = "/backend.svg" className = { classes.Icon } />
                </div>
                <h3 className = { classes.Label }>Backend</h3>
                    <p className = { classes.Tag }>
                        Secure, Efficient, Scalable.
                    </p>
                    <ul className = { classes.SkillList }>
                        <li className = { classes.Skill }>Node</li>
                        <li className = { classes.Skill }>Java/Spring</li>
                        <li className = { classes.Skill }>Python</li>
                        <li className = { classes.Skill }>SQL</li>
                        <li className = { classes.Skill }>NoSQL - Mongo</li>
                        <li className = { classes.Skill }>Kubernetes</li>
                        <li className = { classes.Skill }>Docker</li>
                        <li className = { classes.Skill }>Microservices</li>
                        <li className = { classes.Skill }>Firebase</li>
                        <li className = { classes.Skill }>Blockchain</li>
                    </ul>
            </Column>
        </div>
    </section>
)

export default Skills