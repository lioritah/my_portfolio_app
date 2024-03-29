import React from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

import './HomePage.scss'

export default function HomePage({ onClick }) {

	return (
		<div onClick={onClick} className='home-page-container'>
			<Hero />
			<About />
			<Projects />
			<ContactMe />
			<Footer />
		</div>
	)
}
