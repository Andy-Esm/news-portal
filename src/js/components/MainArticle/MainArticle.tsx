import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import './main-article.css';

interface Props {
	title: string;
	image: string;
	id: number;
	category: string;
	description: string;
	source: string;
}

const MainArticle: FC<Props> = ({title, image, category, description, source, id}) => {
	return (
		<Link to={`/article/${id}`} className='main-article'>
			<article className='main-article__container'>
				<div className='main-article__image-container'>
					<img className='article-img main-article__img' src={image} alt='Фото новости' />
				</div>
				<div className='main-article__content'>
					<span className='article-category'>{category}</span>
					<h2 className='main-article__title'>{title}</h2>
					<p className='main-article__text'>{description}</p>
					<span className='article-source main-article__caption'>{source}</span>
				</div>
			</article>
		</Link>
	);
};
export default MainArticle;
