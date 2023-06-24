import 'regenerator-runtime'; /* for async await transpile */
import '../styles/css-starter.css';
import '../styles/main.css';
import App from './views/app';

const app = new App({
	button: document.querySelector('.hamburger-wrapper'),
	drawer: document.querySelector('#drawer'),
	mainContent: document.querySelector('.main'),
	heroImage: document.querySelector('.hero'),
	header: document.querySelector('.header'),
	appLogo: document.querySelector('.header h1'),
	navList: document.querySelectorAll('.header a'),
});

app.initialAppShell();
