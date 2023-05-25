import React from 'react';
import MainArticle from '../MainArticle/MainArticle.js';
import SmallArticle from '../SmallArticles/SmallArticle.js';
import './article.css';
const Articles = ({articles}) => {
	return (
		<section className="articles">
			<div className="container grid">
				<section className="articles__big">
					{articles.items.slice(0, 3).map((item) => {
						return (
							<MainArticle
								category={articles.categories.find(({id}) => item.category_id === id).name}
								source={articles.sources.find(({id}) => item.source_id === id).name}
								title={item.title}
								description={item.description}
								image={item.image}
								key={item.title}
							/>
						);
					})}
				</section>
				<aside className="articles__small">
					{articles.items.slice(3, 12).map((item) => {
						return (
							<SmallArticle
								title={item.title}
								source={articles.sources.find(({id}) => item.source_id === id).name}
								date={new Date(item).toLocaleDateString('ru-RU', {
									month: 'long',
									day: 'numeric',
								})}
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
