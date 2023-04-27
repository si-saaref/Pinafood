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

document.addEventListener('scroll', function () {
	if (window.scrollY > 50) {
		document.querySelector('.header').style.backgroundColor = 'white';
		document.querySelector('.header h1').style.color = 'black';
		document.querySelector('.hamburger-wrapper ').style.color = 'black';
		document.querySelectorAll('.header a').forEach((elem) => (elem.style.color = 'black'));
	} else {
		document.querySelector('.header').style.backgroundColor = 'transparent';
		document.querySelector('.header h1').style.color = 'white';
		document.querySelector('.hamburger-wrapper ').style.color = 'white';
		document.querySelectorAll('.header a').forEach((elem) => (elem.style.color = 'white'));
	}
});

const mediaQuery = window.matchMedia('(min-width: 768px)');
function handleCloseDrawerOnDesktop(e) {
	if (e.matches) {
		document.querySelector('#drawer').classList.remove('active');
	}
}
mediaQuery.addListener(handleCloseDrawerOnDesktop);
handleCloseDrawerOnDesktop(mediaQuery);
