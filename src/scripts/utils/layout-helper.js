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
				this.header.classList.remove('header-white');
			} else {
				this.header.classList.add('header-white');
				this.mainContent.classList.add('reveal-content');
			}
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
