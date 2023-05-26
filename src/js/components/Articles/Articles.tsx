import React, {FC} from 'react';
import MainArticle from '../MainArticle/MainArticle';
import SmallArticle from '../SmallArticles/SmallArticle';
import './article.css';
import {NewsApi} from '../../../types';

interface Props {
	articles: NewsApi;
	onArticleClick: (id: number) => void;
}

const Articles: FC<Props> = ({articles, onArticleClick}) => {
	return (
		<section className="articles">
			<div className="container grid">
				<section className="articles__big">
					{articles.items.slice(0, 3).map((item) => {
						const category = articles.categories.find(({id}) => item.category_id === id);
						const source = articles.sources.find(({id}) => item.source_id === id);
						return (
							<MainArticle
								category={category?.name || ''}
								source={source?.name || ''}
								title={item.title}
								description={item.description}
								image={item.image}
								key={item.title}
								onClick={() => onArticleClick(item.id)}
							/>
						);
					})}
				</section>
				<aside className="articles__small">
					{articles.items.slice(3, 12).map((item) => {
						const source = articles.sources.find(({id}) => item.source_id === id);
						return (
							<SmallArticle
								title={item.title}
								source={source?.name || ''}
								date={item.date}
								key={item.title}
							/>
						);
					})}
				</aside>
			</div>
		</section>
	);
};

export default Articles;
