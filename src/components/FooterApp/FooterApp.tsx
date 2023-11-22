import { IconFB, IconInst, IconWpp } from '@/icons';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export const FooterApp = () => {
	return (
		<footer className='relative w-full pt-5 bg-white mt-20'>
			<div className='mx-auto w-full max-w-7xl px-8'>
				<div className='flex justify-center'>
					<Link to='/' className='flex items-center gap-x-2'>
						<img
							src='/images/logo.png'
							alt='cabañas-el-tesoro-colegio'
							className='w-[150px] h-[90px]'
						/>
					</Link>
				</div>
				<div className='mt-5 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between'>
					<Typography
						variant='small'
						className='mb-4 text-center font-normal text-blue-gray-900 md:mb-0 order-2 md:order-1'
					>
						&copy; {currentYear} Cabañas El Tesoro - Todos los derechos
						reservados.
					</Typography>
					<div className='flex gap-4 text-blue-gray-900 sm:justify-center order-1 md:order-2 mb-4 md:mb-0'>
						<a
							href={`https://api.whatsapp.com/send?phone=${573244372872}&text=Hola,%20quiero%20reservar%20un%20alojamiento`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconWpp />
						</a>
						<a
							href='https://www.facebook.com/cabanaseltesorocovenas/?locale=es_LA'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconFB />
						</a>
						<a
							href='https://www.instagram.com/cabanaseltesoro/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconInst />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
