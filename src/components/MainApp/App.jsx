import { useRef, useEffect } from 'react'
import HomePage from '../HomePage/HomePage'
import NavBar from '../NavBar/NavBar'
import upArrow from '../../../assets/up-arrow.svg'

import './App.scss'

function App() {

	const slideToPageTopButtonRef = useRef()
	const mobileNavBarMenuRef = useRef()

	function closeNavBarMenu(e) {
		mobileNavBarMenuRef.current.classList.add('hide')
	}

	useEffect(() => {
		window.onscroll = function () {
			if (window.pageYOffset === 0) {
				slideToPageTopButtonRef.current.classList.add('hide')
			} else {
				slideToPageTopButtonRef.current.classList.remove('hide')
			}
		};

		return () => window.onscroll = null
	}, [])

	function scrollToPageTop() {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div>
			<NavBar mobileNavBarMenuRef={mobileNavBarMenuRef} scrollToPageTop={scrollToPageTop} closeNavBarMenu={closeNavBarMenu} />
			<HomePage onClick={closeNavBarMenu} />
			<div ref={slideToPageTopButtonRef} onClick={scrollToPageTop} className="slide-to-page-top-button hide">
				<img src={upArrow} alt='Go to page top' />
			</div>
		</div>
	)
}

export default App