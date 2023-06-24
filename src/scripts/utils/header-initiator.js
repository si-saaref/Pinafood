const HeaderInitiator = {
	init({ header, appLogo, navList, drawer, heroImage, footer }) {
		document.addEventListener('scroll', () => {
			const { display: isShownHero } = getComputedStyle(heroImage);
			console.log(footer);
			if (isShownHero === 'none') {
				this.__showBlackHeader({ header, appLogo, navList, drawer, footer });
				header.style.position = 'sticky';
				footer.style.position = 'fixed';
				return;
			}

			if (window.scrollY < 50) {
				this.__showWhiteHeader({ header, appLogo, navList, drawer, footer });
			} else {
				this.__showBlackHeader({ header, appLogo, navList, drawer, footer });
			}
		});
	},

	__showWhiteHeader({ header, appLogo, navList, drawer, footer }) {
		header.style.backgroundColor = 'transparent';
		appLogo.style.color = 'white';
		drawer.style.color = 'white';
		navList.forEach((elem) => (elem.style.color = 'white'));
		header.style.boxShadow = 'none';
		header.style.position = 'fixed';
		footer.style.position = 'relative';
	},

	__showBlackHeader({ header, appLogo, navList, drawer, footer }) {
		header.style.backgroundColor = 'white';
		appLogo.style.color = 'black';
		drawer.style.color = 'black';
		navList.forEach((elem) => (elem.style.color = 'black'));
		header.style.boxShadow = '0 2px 10px 5px rgba(0, 0, 0, 0.2)';
		header.style.position = 'fixed';
		footer.style.position = 'relative';
	},
};

export default HeaderInitiator;
