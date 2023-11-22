import { Fade } from 'react-awesome-reveal';

export type Props = {
	title: string;
};

export const TitleComponent = ({ title }: Props) => {
	return (
		<Fade>
			<h1 className='text-2xl md:text-3xl font-semibold mb-10 underline decoration-4 underline-offset-8 decoration-[#F4E822] text-center uppercase'>
				{title}
			</h1>
		</Fade>
	);
};
