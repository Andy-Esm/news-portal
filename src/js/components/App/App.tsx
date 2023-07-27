
import { useEffect } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Articles from '../Articles/Articles';
import './app.css';
import ArticleItem from '../ArticleItem/ArticleItem';


const App = () => {
	
	const {pathname} = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	
	}, [pathname])
	


	return (
		<>
			<header className='header'>
				<div className='container'>
					<Navigation
						placement='header'
						className='header__navigation'
					/>
				</div>
			</header>

			<main>
				<Routes>
					<Route path='/' element={<Articles />} />
					<Route path='/:categoryId' element={<Articles />} />
					<Route
						path='/article/:id'
						element={<ArticleItem />}
					/>
				</Routes>
			</main>

			<footer className='footer'>
				<div className='container'>
					<Navigation
						placement='footer'
						className='footer__navigation'
					/>
					<div className='footer__bottom'>
						<p className='footer__text'>Сделано в качестве учебного проекта</p>
						<p className='footer__text footer__text--gray'>© 2023</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default App;
