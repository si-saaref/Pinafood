import 'regenerator-runtime'; /* for async await transpile */
import '../styles/css-starter.css';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
	button: document.querySelector('.hamburger-wrapper'),
	drawer: document.querySelector('#drawer'),
	mainContent: document.querySelector('.main'),
	heroImage: document.querySelector('.hero'),
	header: document.querySelector('.header'),
	appLogo: document.querySelector('.header__title'),
	navList: document.querySelectorAll('.header a'),
	footer: document.querySelector('.footer'),
	skipButton: document.querySelector('.skip-link'),
});

app.initialAppShell();

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
	app.renderPage();
	swRegister();
});
