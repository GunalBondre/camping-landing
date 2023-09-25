import { useState } from 'react';
import './header.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = (e) => {
		e.stopPropagation();
		setOpen(!open);
	};
	return (
		<nav>
			<div className='nav__wrapper container'>
				<div className='logo'>Aww Camp</div>
				<ul className='nav__menu'>
					<li className='nav__menu-items'>
						<a href=''>Home</a>
					</li>
					<li className='nav__menu-items'>
						<a href=''>About</a>
					</li>
					<li className='nav__menu-items'>
						<a href=''>Experiences</a>
					</li>
					<li className='nav__menu-items'>
						<a href=''>Contact</a>
					</li>
				</ul>
				<div className='nav__action-button'>
					<button>Login/Register</button>
				</div>
				<div className='hamburger'>
					{open ? (
						<AiOutlineClose onClick={handleClick} className='closeIcon' />
					) : (
						<AiOutlineMenu onClick={handleClick} />
					)}
				</div>
			</div>

			<div className={open ? 'nav__menu-mobile active' : 'nav__menu-mobile'}>
				<li className='nav__menu-items'>
					<a href=''>Home</a>
				</li>
				<li className='nav__menu-items'>
					<a href=''>About</a>
				</li>
				<li className='nav__menu-items'>
					<a href=''>Experiences</a>
				</li>
				<li className='nav__menu-items'>
					<a href=''>Contact</a>
				</li>
				<li className='mobile-menu-button'>
					<button>Signin/Register</button>
				</li>
			</div>
		</nav>
	);
};

export default Header;
