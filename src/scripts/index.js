import 'regenerator-runtime'; /* for async await transpile */
import '../styles/css-starter.css';
import '../styles/main.css';

document.querySelector('.hamburger-wrapper').addEventListener('click', function (evt) {
	evt.stopPropagation();
	document.querySelector('#drawer').classList.toggle('active');
});

['.hero', '.main', '.header'].forEach((item) => {
	document.querySelector(`${item}`).addEventListener('click', function (evt) {
		evt.stopPropagation();
		document.getElementById('drawer').classList.remove('active');
	});
});
