import { Outlet, ScrollRestoration } from 'react-router-dom';
import { FooterApp, NavbarApp } from './components';
export const App = () => {
	return (
		<>
			<NavbarApp />
			<Outlet />
			<ScrollRestoration />
			<FooterApp />
		</>
	);
};
