import {
	Collapse,
	IconButton,
	Navbar,
	Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Flip } from 'react-awesome-reveal';

interface NavList {
	name: string;
	path: string;
}
export const NavbarApp = () => {
	const mediaQuery = window.matchMedia('(max-width: 960px)');
	const [isVisible, setVisible] = useState<boolean>(false);
	mediaQuery.addEventListener('change', () => {
		validateMatches(false);
	});

	const validateMatches = (value: boolean) => {
		setVisible(value);
	};

	useEffect(() => {
		validateMatches(false);
	}, []);

	const listNav: NavList[] = [
		{
			path: '/',
			name: 'Inicio',
		},
	];

	const activeClassName = {
		textUnderlineOffset: '6px',
		textDecorationColor: '#F4E822',
		textDecorationLine: 'underline',
		textDecorationThickness: '3px',
	};

	const navList = (
		<ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
			{listNav.map((item: NavList) => (
				<Typography
					as='li'
					variant='small'
					color='blue-gray'
					className='p-1 font-normal uppercase'
					key={item?.path}
				>
					<NavLink
						to={item?.path}
						className='flex items-center'
						style={({ isActive }) => (isActive ? activeClassName : undefined)}
						onClick={() => setVisible(false)}
					>
						{item?.name}
					</NavLink>
				</Typography>
			))}
		</ul>
	);
	return (
		<Navbar className='sticky top-0 z-50 bg-white bg-opacity-100 h-max max-w-full rounded-none py-2 px-2 lg:px-8 lg:py-3'>
			<div className='flex items-center justify-between text-blue-gray-900'>
				<Flip>
					<Link to='/' className='flex items-center gap-x-2'>
						<img
							src='/images/logo.png'
							alt='cabaña-el-tesoro-colegio'
							className='w-[150px] h-[90px]'
						/>
					</Link>
				</Flip>
				<div className='flex items-center gap-x-4'>
					<div className='mr-4 hidden lg:block'>{navList}</div>
					<IconButton
						variant='text'
						className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
						ripple={false}
						onClick={() => setVisible(!isVisible)}
					>
						{isVisible ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								className='h-6 w-6'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</IconButton>
				</div>
			</div>
			<Collapse open={isVisible}>{navList}</Collapse>
		</Navbar>
	);
};
