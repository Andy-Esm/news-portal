import React from 'react';
import {categoryIds} from '../../utils';
import Articles from '../Articles/Articles';
import Navigation from '../Navigation/Navigation';
import './app.css';
import {NewsApi} from '../../../types';

const App = () => {
	const [category, setCategory] = React.useState('index');
	const [articles, setArticles] = React.useState<NewsApi>({
		items: [],
		categories: [],
		sources: [],
	});
	const [articleId, setArticleId] = React.useState<number | null>(null);

	const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const category = e.currentTarget.dataset.href;
		if (category) {
			setCategory(category);
		}
	};

	const onArticleClick = (id: number) => {
		setArticleId(id);
	};

	React.useEffect(() => {
		// @ts-ignore
		fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
			.then((res) => res.json())
			.then((res: NewsApi) => {
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
				<Articles articles={articles} onArticleClick={onArticleClick} />
			</main>
			<footer className="footer">
				<div className="container">
					<Navigation
						onNavClick={onNavClick}
						currentCategory={category}
						className={'footer__nav'}
					/>
					<div className="footer__column">
						<p className="footer__text">Сделано на курсах по фронтенд разработке</p>
						<span className="footer__copyright">&copy; 2023</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default App;
