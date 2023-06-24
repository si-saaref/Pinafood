const HeaderInitiator = {
	init({ header, appLogo, navList, drawer }) {
		console.log(navList);
		document.addEventListener('scroll', function () {
			if (window.scrollY > 50) {
				header.style.backgroundColor = 'white';
				appLogo.style.color = 'black';
				drawer.style.color = 'black';
				navList.forEach((elem) => (elem.style.color = 'black'));
				header.style.boxShadow = '0 2px 10px 5px rgba(0, 0, 0, 0.2)';
			} else {
				header.style.backgroundColor = 'transparent';
				appLogo.style.color = 'white';
				drawer.style.color = 'white';
				navList.forEach((elem) => (elem.style.color = 'white'));
				header.style.boxShadow = 'none';
			}
		});
	},
};

export default HeaderInitiator;
