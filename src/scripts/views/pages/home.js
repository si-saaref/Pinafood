import RestaurantServices from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import LayoutHelper from '../../utils/layout-helper';
import { cardRestoItemTemplate } from '../templates/template-creator';

const Home = {
	async render() {
		return `
      <section class='content-container'>
				<div class="content-header">
					<header class="content-header__label">Explore Restaurant</header>
				</div>
				<div class="content-post"></div>
			</section>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const restaurants = await RestaurantServices.getRestaurantList();
		const restaurantListContainer = document.querySelector('.content-post');
		restaurantListContainer.innerHTML = '';
		restaurants.forEach((item) => {
			restaurantListContainer.innerHTML += cardRestoItemTemplate(item);
		});

		LayoutHelper.showHeroImage();
		LayoutHelper.handleColorHeader();
	},
};

export default Home;
