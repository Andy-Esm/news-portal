import {FC} from 'react';
import {categoryNames} from '../../utils';
import './navigation.css';
import logo from '../../../assets/images/logo.svg';
import {NavLink} from 'react-router-dom';

interface Props {
	className?: string;
	placement: 'header' | 'footer';
	
}

const Navigation: FC<Props> = ({className = '', placement = 'header'}) => {

	

	return (
		<nav className={`grid navigation navigation--${placement} ${className}`}>
			<NavLink className='navigation__logo' to='/'>
				<img className='navigation__logo-image' src={logo} alt='Логотип' />
			</NavLink>
			<ul className='navigation__list'>
				{['index', 'fashion', 'technologies', 'sport'].map((item) => {
					return (
						<li className='navigation__item' key={item}>
							<NavLink
								to={`/${item}`} 
								className={({isActive, isPending}) => isPending ? '' : isActive ? 'navigation__link--active' : 'navigation__link'}
							>
								{categoryNames[item]}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
export default Navigation;
