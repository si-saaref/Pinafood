import RestaurantServices from '../../data/data-source';
import { cardRestoItemTemplate } from '../templates/template-creator';

const Home = {
	async render() {
		return `
      <section>
				<div class="content-header">
					<header class="content-header__label">Explore Restaurant</header>
				</div>
				<div class="content-post"></div>
			</section>
    `;
	},

	async afterRender() {
		const restaurants = await RestaurantServices.getRestaurantList();
		console.log('RESTAURATNS => ', restaurants);
		const restaurantListContainer = document.querySelector('.content-post');
		restaurantListContainer.innerHTML = '';
		restaurants.forEach((item) => {
			restaurantListContainer.innerHTML += cardRestoItemTemplate(item);
		});
	},
};

export default Home;