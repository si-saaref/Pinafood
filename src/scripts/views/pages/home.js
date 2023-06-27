import RestaurantServices from '../../data/data-source';
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
		const { data, status } = await RestaurantServices.getRestaurantList();
		const restaurantListContainer = document.querySelector('.content-post');

		if (status === 400) {
			restaurantDetailContainer.innerHTML += notFoundContent();
			return;
		}

		restaurantListContainer.innerHTML = '';
		data.forEach((item) => {
			restaurantListContainer.innerHTML += cardRestoItemTemplate(item);
		});

		LayoutHelper.showHeroImage();
	},
};

export default Home;
