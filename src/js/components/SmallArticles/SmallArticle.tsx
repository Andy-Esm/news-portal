import React, {FC} from 'react';
import './small-article.css';
import {beautifyDate} from '../../utils';

interface Props {
	title: string;
	source: string;
	date: string;
	onArticleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const SmallArticle: FC<Props> = ({title, source, date, onArticleClick}) => {
	return (
		<article className="small-article" onClick={onArticleClick}>
			<h2 className="small-article__title">{title}</h2>
			<span className="article-date">{source}</span>
			<span className="article-source">{beautifyDate(date)}</span>
		</article>
	);
};
export default SmallArticle;
