const DrawerInitiator = {
	init({ button, drawer, mainContent, heroImage, header }) {
		button.addEventListener('click', (event) => {
			this.__toggleDrawer(event, drawer);
		});

		mainContent.addEventListener('click', (event) => {
			this.__closeDrawer(event, drawer);
		});

		heroImage.addEventListener('click', (event) => {
			this.__closeDrawer(event, drawer);
		});

		header.addEventListener('click', (event) => {
			this.__closeDrawer(event, drawer);
		});

		this.__handleAutoCloseDrawer(drawer);
	},

	__toggleDrawer(event, drawer) {
		event.stopPropagation();
		drawer.classList.toggle('active');
	},

	__closeDrawer(event, drawer) {
		event.stopPropagation();
		drawer.classList.remove('active');
	},

	__handleAutoCloseDrawer() {
		const mediaQuery = window.matchMedia('(min-width: 768px)');
		function handleCloseDrawerOnDesktop(e) {
			if (e.matches) {
				drawer.classList.remove('active');
			}
		}
		mediaQuery.addListener(handleCloseDrawerOnDesktop);
		handleCloseDrawerOnDesktop(mediaQuery);
	},
};

export default DrawerInitiator;
