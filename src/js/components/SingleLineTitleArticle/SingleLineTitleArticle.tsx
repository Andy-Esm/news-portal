import {FC} from 'react';
import './single-line-title-article.css';
import {Link} from 'react-router-dom';

interface Props {
	id: number;
	image: string;
	title: string;
	text: string;
	category: string;
	source: string;
}

const SingleLineTitleArticle: FC<Props> = ({id, image, title, source, text, category}) => {
	return (
		<Link to={`/article/${id}`} className='single-line-title-article'>
			<article>
				<img className='single-line-title-article__image' src={image} alt='' />
				<span className='article-category single-line-title-article__category'>{category}</span>
				<h2 className='single-line-title-article__title'>{title}</h2>
				<p className='single-line-title-article__text'>{text}</p>
				<span className='article-source single-line-title-article__source'>{source}</span>
			</article>
		</Link>
	);
};

export default SingleLineTitleArticle;
