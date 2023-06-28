const LayoutHelper = {
	header: null,
	appLogo: null,
	navList: null,
	drawer: null,
	heroImage: null,
	footer: null,
	mainContent: null,
	skipButton: null,

	init({ header, appLogo, navList, drawer, heroImage, footer, mainContent, skipButton }) {
		this.header = header;
		this.appLogo = appLogo;
		this.navList = navList;
		this.drawer = drawer;
		this.heroImage = heroImage;
		this.footer = footer;
		this.mainContent = mainContent;
		this.skipButton = skipButton;
	},

	handleColorHeader() {
		document.addEventListener('scroll', () => {
			if (window.scrollY < 50) {
				this.mainContent.classList.remove('reveal-content');
			} else {
				this.mainContent.classList.add('reveal-content');
			}
		});
	},

	showWhiteHeader() {
		this.header.style.backgroundColor = 'transparent';
		this.header.style.boxShadow = 'none';
		this.header.style.position = 'fixed';
		this.appLogo.style.color = 'white';
		this.drawer.style.color = 'white';
		this.navList.forEach((elem) => {
			const navItem = elem;
			navItem.style.color = 'white';
		});
	},

	showBlackHeader(url) {
		this.header.style.backgroundColor = 'white';
		this.header.style.boxShadow = '0 2px 10px 5px rgba(0, 0, 0, 0.2)';
		this.header.style.position = url === '/' ? 'fixed' : 'sticky';
		this.appLogo.style.color = 'black';
		this.drawer.style.color = 'black';
		this.navList.forEach((elem) => {
			const navItem = elem;
			navItem.style.color = 'black';
		});
	},

	showHeroImage() {
		this.heroImage.classList.add('show-hero');
	},

	hideHeroImage() {
		this.heroImage.classList.remove('show-hero');
	},

	removeRevealContentSelector() {
		this.mainContent.classList.remove('reveal-content');
	},

	handleClickSkipButton() {
		this.skipButton.addEventListener('click', (event) => {
			event.preventDefault();
			document.querySelector(`#main-content`).focus();
		});
	},
};

export default LayoutHelper;
