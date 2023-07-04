import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import LayoutHelper from '../../utils/layout-helper';
import { cardRestoItemTemplate } from '../templates/template-creator';

const Favorites = {
	async render() {
		return `
      <section class='content-container section-favorite'>
				<div class="content-header">
					<header class="content-header__label">Favorites Resto</header>
				</div>
				<div class="content-post"></div>
			</section>
    `;
	},

	async afterRender() {
		const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
		const restaurantListContainer = document.querySelector('.content-post');
		restaurantListContainer.innerHTML = '';
		restaurants.forEach((item) => {
			restaurantListContainer.innerHTML += cardRestoItemTemplate(item);
		});

		LayoutHelper.hideHeroImage();
		window.scrollTo(0, 0);
	},
};

export default Favorites;
