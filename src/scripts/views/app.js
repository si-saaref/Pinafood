import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import LayoutHelper from '../utils/layout-helper';

class App {
	constructor({
		button,
		drawer,
		mainContent,
		heroImage,
		header,
		appLogo,
		navList,
		footer,
		skipButton,
	}) {
		this.__button = button;
		this.__drawer = drawer;
		this.__mainContent = mainContent;
		this.__heroImage = heroImage;
		this.__header = header;
		this.__appLogo = appLogo;
		this.__navList = navList;
		this.__footer = footer;
		this.__skipButton = skipButton;
	}

	initialAppShell() {
		DrawerInitiator.init({
			button: this.__button,
			drawer: this.__drawer,
			mainContent: this.__mainContent,
			heroImage: this.__heroImage,
			header: this.__header,
		});

		LayoutHelper.init({
			header: this.__header,
			appLogo: this.__appLogo,
			drawer: this.__drawer,
			navList: this.__navList,
			heroImage: this.__heroImage,
			footer: this.__footer,
			mainContent: this.__mainContent,
			skipButton: this.__skipButton,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		this.__mainContent.innerHTML = await page.render();

		await page.afterRender();

		LayoutHelper.handleClickSkipButton();

		if (['/', '/home'].includes(url)) {
			LayoutHelper.handleColorHeader();
		}
	}
}

export default App;
