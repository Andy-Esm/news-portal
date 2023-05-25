import React from 'react';
import {categoryIds} from '../../utils.js';
import Articles from '../Articles/Articles.js';
import Navigation from '../Navigation/Navigation.js';
import './app.css';

const App = () => {
	const [category, setCategory] = React.useState('index');
	const [articles, setArticles] = React.useState({
		items: [],
		categories: [],
		sources: [],
	});

	const onNavClick = (e) => {
		e.preventDefault();
		setCategory(e.currentTarget.dataset.href);
	};

	React.useEffect(() => {
		fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
			.then((res) => res.json())
			.then((res) => {
				setArticles(res);
			});
	}, [category]);

	return (
		<>
			<header className="header">
				<div className="container">
					<Navigation
						onNavClick={onNavClick}
						currentCategory={category}
						className={'header__nav'}
					/>
				</div>
			</header>
			<main className="main">
				<Articles articles={articles} />
			</main>
			<footer className="footer">
				<div className="container">
					<Navigation
						onNavClick={onNavClick}
						currentCategory={category}
						className={'footer__nav'}
					/>
					<div className="footer__column">
						<p className="footer__text">Сделанно на курсах по фронтенд разработке</p>
						<span className="footer__copyright">&copy; 2023</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default App;
