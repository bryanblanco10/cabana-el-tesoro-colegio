import { TitleComponent } from '@/components';
import {
	IconAire,
	IconBar,
	IconBreakfast,
	IconJardin,
	IconParking,
	IconPep,
	IconRestaurant,
	IconRoom,
} from '@/icons';
import { Fade } from 'react-awesome-reveal';
import { CarouselHome } from '..';

export const Home = () => {
	return (
		<>
			<CarouselHome />
			<div className='container md:mx-auto px-3 py-8'>
				<section className='py-4'>
					<p className='text-lg md:text-xl mb-4'>
						CABAÑAS EL TESORO entendemos que no somos dueños de la naturaleza,
						somos en esencia parte de ella, por eso la conservación de las
						especies nativas, el respeto por sus fuentes hídricas y el uso de
						materiales que reduzcan el alto impacto en la industria hotelera. Es
						un lugar ideal para disfrutar del mar para calmar y reducir la
						ansiedad cerca de los espacios de color azul, compartir en familia y
						hacer parte de esta zona mágica llena de muchas aventuras.
					</p>
					<p className='text-lg md:text-xl mb-4'>
						En este sitio ubicado en la segunda ensenada de Tolú en el sector de
						la Marta encontraras el mar como una auténtica piscina de mar
						salada, por sus aguas calmas y cálidas en las mañanas, y en la tarde
						jugar en las olas arrojándose audazmente contra el agua rompiente,
						donde luego podrás compartir la mejor puesta de sol.
					</p>
					<p className='text-lg md:text-xl mb-4'>
						Nuestras instalaciones y alimentación cuentan con toda la atención
						de un grupo humano dispuesto a que sea la mejor experiencia de tus
						vacaciones.
					</p>
				</section>
				<section className='py-4'>
					<TitleComponent title='ATRACCIONES' />
					<p className='text-lg md:text-xl mb-4'>
						En coveñas cada segundo es de felicidad, deja tu rutina y escápate a
						vivir nuevas experiencias.
					</p>

					<ul className='list-outside'>
						<li>Tour a las islas</li>
						<li>Tour a la ciénaga la caimanera</li>
						<li>Tour en bicicar con música por las calles de tolú</li>
						<li>Parque museo de infantería de Marina</li>
					</ul>
				</section>
				<section className='py-4'>
					<TitleComponent title='Servicios' />
					<div className='flex flex-wrap gap-x-6 gap-y-6'>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconAire /> Aire acondicionado
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconJardin /> Jardín
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconPep /> Admite mascotas
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconRoom /> Habitaciones familiares
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconBreakfast /> Desayuno
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconRestaurant /> Restaurantes
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconParking /> Parking gratis
							</p>
						</Fade>
						<Fade>
							<p className='flex items-center gap-x-2'>
								<IconBar /> Bar
							</p>
						</Fade>
					</div>
				</section>
				<section className='py-4'>
					<TitleComponent title='Ubicación' />
					<p className='text-lg md:text-xl mb-4 normal-case'>
						El mejor destino turístico de Sucre a tan solo 10 minutos DEL
						AEROPUERTO LOCAL de la ciudad de Tolú. Segunda ensenada sector la
						marta cabañas el tesoro
					</p>
					<div className='w-full'>
						<img src='/images/mapa.jpeg' alt='' className='w-full' />
					</div>
				</section>
			</div>
		</>
	);
};
