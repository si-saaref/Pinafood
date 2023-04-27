import 'regenerator-runtime'; /* for async await transpile */
import '../styles/css-starter.css';
import '../styles/main.css';

document.querySelector('.hamburger-wrapper').addEventListener('click', function () {
	document.getElementById('drawer').classList.add('active');
});

['.hero', '.main', '.head'].forEach((item) => {
	document.querySelector(`${item}`).addEventListener('click', function () {
		document.getElementById('drawer').classList.remove('active');
	});
});
