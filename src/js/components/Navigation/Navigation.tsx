import React, {FC} from 'react';
import {categoryNames} from '../../utils';
import logo from '../../../assets/images/logo.svg';

interface Props {
	onNavClick: (event: React.MouseEvent<HTMLElement>) => void;
	currentCategory: string;
	className?: string;
}

const Navigation: FC<Props> = ({onNavClick, currentCategory, className}) => {
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
									{/*@ts-ignore*/}
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
