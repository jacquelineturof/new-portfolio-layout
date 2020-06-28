import React from 'react'

import Header from '../components/Header'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const styles = {
    container: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
    }
}

const Index = () => (
    <section style = { styles.container }>
        <Header />
        <Intro />
        <Skills />
        <Projects />
        <Footer />
    </section>
)

export default Index