const LayoutHelper = {
	header: null,
	appLogo: null,
	navList: null,
	drawer: null,
	heroImage: null,
	footer: null,

	init({ header, appLogo, navList, drawer, heroImage, footer }) {
		this.header = header;
		this.appLogo = appLogo;
		this.navList = navList;
		this.drawer = drawer;
		this.heroImage = heroImage;
		this.footer = footer;
	},

	handleColorHeader() {
		document.addEventListener('scroll', () => {
			if (window.scrollY < 50) {
				this.showWhiteHeader();
			} else {
				this.showBlackHeader();
			}
		});
	},

	showWhiteHeader() {
		this.header.style.backgroundColor = 'transparent';
		this.appLogo.style.color = 'white';
		this.drawer.style.color = 'white';
		this.navList.forEach((elem) => (elem.style.color = 'white'));
		this.header.style.boxShadow = 'none';
		this.header.style.position = 'fixed';
		this.footer.style.position = 'relative';
	},

	showBlackHeader() {
		this.header.style.backgroundColor = 'white';
		this.appLogo.style.color = 'black';
		this.drawer.style.color = 'black';
		this.navList.forEach((elem) => (elem.style.color = 'black'));
		this.header.style.boxShadow = '0 2px 10px 5px rgba(0, 0, 0, 0.2)';
		this.header.style.position = 'fixed';
		this.footer.style.position = 'relative';
	},

	showHeroImage() {
		this.heroImage.style.display = 'block';
	},

	hideHeroImage() {
		this.heroImage.style.display = 'none';
	},
};

export default LayoutHelper;
