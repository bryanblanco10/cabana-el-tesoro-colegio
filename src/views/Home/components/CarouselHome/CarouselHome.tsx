import { Carousel, IconButton, Typography } from '@material-tailwind/react';
import { Bounce, Fade } from 'react-awesome-reveal';
import data from '../../carousel.json';
interface Data {
	image: string;
	title: string;
	subtitle: string;
}
export const CarouselHome = () => {
	return (
		<Carousel
			autoplay
			loop
			className='h-64 md:h-[300px] lg:h-[500px]'
			prevArrow={({ handlePrev }) => (
				<IconButton
					variant='text'
					color='white'
					size='lg'
					onClick={handlePrev}
					className='!absolute top-2/4 left-4 -translate-y-2/4'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
						/>
					</svg>
				</IconButton>
			)}
			nextArrow={({ handleNext }) => (
				<IconButton
					variant='text'
					color='white'
					size='lg'
					onClick={handleNext}
					className='!absolute top-2/4 !right-4 -translate-y-2/4'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
						/>
					</svg>
				</IconButton>
			)}
		>
			{data?.carousels.map((item: Data) => (
				<div className='relative h-full w-full' key={item?.title}>
					<img
						src={item?.image}
						alt={item?.title}
						className='h-full w-full object-cover'
					/>
					<div className='absolute inset-0 grid h-full w-full place-items-center bg-black/50'>
						<div className='w-3/4 text-center md:w-2/4'>
							<Bounce>
								<Typography
									variant='h1'
									color='white'
									className='mb-2 md:mb-4 text-3xl md:text-4xl lg:text-5xl'
								>
									{item?.title}
								</Typography>
							</Bounce>
							<Fade direction='up'>
								<Typography
									variant='lead'
									color='white'
									className='text-base md:text-xl mb-4'
								>
									{item?.subtitle}
								</Typography>
							</Fade>
						</div>
					</div>
				</div>
			))}
		</Carousel>
	);
};
