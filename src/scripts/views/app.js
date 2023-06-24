import DrawerInitiator from '../utils/drawer-initiator';
// import UrlParser from '../routes/url-parser';
// import routes from '../routes/routes';

class App {
	constructor({ button, drawer, mainContent, heroImage, header }) {
		this.__button = button;
		this.__drawer = drawer;
		this.__mainContent = mainContent;
		this.__heroImage = heroImage;
		this.__header = header;
	}

	initialAppShell() {
		DrawerInitiator.init({
			button: this.__button,
			drawer: this.__drawer,
			mainContent: this.__mainContent,
			heroImage: this.__heroImage,
			header: this.__header,
		});
	}

	async renderPage() {
		// const url = UrlParser.parseActiveUrlWithCombiner();
		// const page = routes[url];
		// this.__mainContent.innerHTML = await page.render();
		// await page.afterRender();
	}
}

export default App;
