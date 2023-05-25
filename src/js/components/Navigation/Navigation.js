import React from 'react';
import {categoryNames} from '../../utils.js';
import logo from '../../../assets/images/logo.svg';

const Navigation = ({onNavClick, currentCategory, className}) => {
	return (
		<>
			<nav className={`nav grid ${className}`}>
				<a href="#" className="nav__logo" data-href="index">
					<img src={logo} alt="ks-news logo" className="nav__img" />
				</a>
				<ul className="nav__list" role="list">
					{['index', 'fashion', 'tech', 'politic', 'sport'].map((item) => {
						return (
							<li className="nav__item" key={item}>
								<a
									href="./index.html"
									data-href={item}
									className={`nav__link ${currentCategory === item ? 'nav__link--active' : ''}`}
									onClick={onNavClick}
								>
									{categoryNames[item]}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
