import React from 'react';
import './main-article.css';
const MainArticle = ({title, image, description, category, source}) => {
	return (
		<article className="main-article" key={title}>
			<div className="main-article__img-container">
				<img className="article-img main-article__img" src={image} alt="Фото новости" />
			</div>
			<div className="main-article__content">
				<span className="article-category">{category}</span>
				<h2 className="main-article__content-title">{title}</h2>
				<p className="main-article__content-text">{description}</p>
				<span className="article-source main-article__caption">{source}</span>
			</div>
		</article>
	);
};

export default MainArticle;
